// pages/api/articles.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/lib/prisma";

// Remplace bien par ton URL n8n réel !
const N8N_WEBHOOK_URL = "https://thomasgoons.app.n8n.cloud/webhook/seo-agent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return res.status(401).json({ error: "Non authentifié" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    return res.status(404).json({ error: "Utilisateur introuvable" });
  }

  if (req.method === "GET") {
    const articles = await prisma.article.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ articles });
  }

  if (req.method === "POST") {
    const { title } = req.body;
    if (!title || typeof title !== "string" || title.trim().length < 5) {
      return res.status(400).json({ error: "Titre d'article invalide" });
    }

    // Vérifier que l'utilisateur a au moins 1 token
    if (user.tokens < 1) {
      return res.status(403).json({
        error:
          "Vous n'avez plus de tokens disponibles. Veuillez en acheter pour continuer à générer des articles.",
      });
    }

    try {
      // Appel workflow n8n
      const n8nRes = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: title }),
      });
      const content = await n8nRes.text();

      if (!content || content.trim().length < 20) {
        return res.status(400).json({
          error:
            "La génération d'article a échoué. Veuillez reformuler votre demande.",
        });
      }

      // Transaction pour créer l'article ET décompter le token
      const result = await prisma.$transaction(async (tx) => {
        // Créer l'article
        const article = await tx.article.create({
          data: { title, content, userId: user.id },
        });

        // Décompter 1 token de l'utilisateur
        await tx.user.update({
          where: { id: user.id },
          data: { tokens: { decrement: 1 } },
        });

        // Récupérer l'utilisateur mis à jour pour retourner le nombre de tokens restants
        const updatedUser = await tx.user.findUnique({
          where: { id: user.id },
          select: { tokens: true },
        });

        return { article, remainingTokens: updatedUser?.tokens || 0 };
      });

      return res.status(200).json({
        article: result.article,
        remainingTokens: result.remainingTokens,
      });
    } catch (error) {
      console.error("Erreur lors de la génération d'article:", error);
      return res.status(500).json({
        error: "Une erreur est survenue lors de la génération de l'article.",
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
}

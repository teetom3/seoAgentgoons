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

    const article = await prisma.article.create({
      data: { title, content, userId: user.id },
    });

    return res.status(200).json({ article });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
}

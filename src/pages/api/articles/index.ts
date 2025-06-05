// pages/api/articles/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return res.status(401).json({ error: "Non authentifié" });
  }

  try {
    if (req.method === "GET") {
      // Récupération des articles
      const { page = "1", limit = "10" } = req.query;
      const pageNumber = parseInt(page as string);
      const limitNumber = parseInt(limit as string);
      const skip = (pageNumber - 1) * limitNumber;

      const [articles, totalArticles] = await Promise.all([
        prisma.article.findMany({
          take: limitNumber,
          skip: skip,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        }),
        prisma.article.count(),
      ]);

      return res.status(200).json({
        articles,
        totalArticles,
        totalPages: Math.ceil(totalArticles / limitNumber),
        currentPage: pageNumber,
      });
    }

    if (req.method === "POST") {
      // Création d'un nouvel article
      const { title, content } = req.body;

      if (!title || !content) {
        return res
          .status(400)
          .json({ error: "Le titre et le contenu sont obligatoires" });
      }

      // Récupération de l'utilisateur
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      // Création de l'article
      const article = await prisma.article.create({
        data: {
          title: title.trim(),
          content: content.trim(),
          userId: user.id,
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });

      return res.status(201).json(article);
    }
  } catch (error) {
    console.error("Erreur API articles:", error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  } finally {
    await prisma.$disconnect();
  }
}

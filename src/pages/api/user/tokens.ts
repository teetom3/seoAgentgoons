import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user?.email) {
    return res.status(401).json({ error: "Non autorisé" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { tokens: true },
  });

  if (!user) {
    return res.status(404).json({ error: "Utilisateur introuvable" });
  }

  return res.status(200).json({ tokens: user.tokens });
}

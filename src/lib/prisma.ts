// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Eviter les instanciations multiples en développement
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma || new PrismaClient({ log: ["query", "error", "warn"] });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

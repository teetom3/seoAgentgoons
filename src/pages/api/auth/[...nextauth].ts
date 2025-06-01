// pages/api/auth/[...nextauth].ts
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("🔑 SignIn callback:", { user, account, profile });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("🔄 Redirect callback:", { url, baseUrl });

      // Si on vient de se connecter, rediriger vers dashboard
      if (url === baseUrl) return `${baseUrl}/dashboard`;

      // Si l'URL est relative, la construire complètement
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      // Si l'URL est du même domaine, l'utiliser
      if (new URL(url).origin === baseUrl) return url;

      // Par défaut, rediriger vers dashboard
      return `${baseUrl}/dashboard`;
    },
    async session({ session, user }) {
      // Ajouter l'ID utilisateur à la session
      if (session.user && user) {
        (session.user as any).id = user.id;
        (session.user as any).image = user.image;
      }
      return session;
    },
  },
  events: {
    createUser: ({ user }) => console.log("➕ createUser", user),
    linkAccount: ({ account }) => console.log("🔗 linkAccount", account),
    signIn: ({ user }) => console.log("🎉 User signed in:", user.email),
  },
};

export default NextAuth(authOptions);

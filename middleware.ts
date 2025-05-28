// middleware.ts (à la racine du projet)
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("🛡️ Middleware - Token:", req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Protège toutes les routes qui commencent par /dashboard
export const config = {
  matcher: ["/dashboard/:path*"],
};

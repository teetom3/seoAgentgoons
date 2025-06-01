import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { LogOut } from "lucide-react";
import DashboardNavbar from "./components/DashboardNavbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }
  if (!session) {
    if (typeof window !== "undefined") router.push("/auth/signin");
    return <div>Redirection...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">
      <DashboardNavbar/>
      <div className="container mx-auto px-4 py-12 max-w-lg">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 border border-gray-200/50">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={session.user?.image ?? "/default-user.svg"}
              alt="Profil"
              className="w-20 h-20 rounded-full border shadow"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {session.user?.name || "Utilisateur"}
              </h2>
              <div className="text-gray-500">{session.user?.email}</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <span className="block text-sm text-gray-500 font-light mb-1">Email</span>
              <span className="font-medium text-gray-900">{session.user?.email || "Non renseigné"}</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <span className="block text-sm text-gray-500 font-light mb-1">Nom complet</span>
              <span className="font-medium text-gray-900">{session.user?.name || "Non renseigné"}</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="block text-sm text-gray-500 font-light mb-1">Connexion</span>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                Google
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-6 py-3 rounded-xl shadow hover:bg-red-100 font-semibold transition"
            >
              <LogOut className="w-4 h-4" /> Se déconnecter
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

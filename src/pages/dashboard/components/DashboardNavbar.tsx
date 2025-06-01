import { useSession, signOut } from "next-auth/react";
import { Coins, Archive, Crown, LogOut } from "lucide-react";

export default function DashboardNavbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extralight text-gray-900">
            <span className="font-medium bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              BlogCraft AI
            </span>
            <span className="hidden md:inline ml-2 text-gray-400 font-light">
              Dashboard
            </span>
          </span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-3 py-2 rounded-xl"
          >
            <Coins className="w-4 h-4" /> Historique tokens
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-3 py-2 rounded-xl"
          >
            <Archive className="w-4 h-4" /> Articles archivés
          </a>
          <a
            href="/dashboard/profil"
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-3 py-2 rounded-xl"
          >
            <img
              src={session?.user?.image ?? "/default-user.svg"}
              alt="Profil"
              className="w-6 h-6 rounded-full border"
            />
            Profil
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 text-red-600 hover:bg-red-50 border border-red-200 font-medium px-4 py-2 rounded-xl shadow-sm transition"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
}

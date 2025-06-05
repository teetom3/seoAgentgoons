import { Crown } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow">
            <Crown className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-800 tracking-tight">
            BlogCraft
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent font-bold ml-1">
              AI
            </span>
          </span>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#features"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-lg px-5 py-2 text-sm font-semibold shadow-md transition-all"
          >
            Commencer gratuitement
          </a>
        </div>
      </div>
    </header>
  );
}

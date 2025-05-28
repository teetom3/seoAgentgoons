// components/Header.tsx
import { Crown } from "lucide-react"; // ou importe ton icône Crown favorite

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-light text-gray-900">
            BlogCraft{" "}
            <span className="font-medium bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#features"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-xl px-6 py-2 font-medium shadow-lg transition"
          >
            Commencer gratuitement
          </a>
        </div>
      </div>
    </header>
  );
}

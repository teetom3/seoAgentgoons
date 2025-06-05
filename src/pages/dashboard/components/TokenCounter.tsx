// components/TokenCounter.tsx
import { Coins } from "lucide-react";
import { useToken } from "@/pages/context/TokenContext";

export default function TokenCounter() {
  const { tokens } = useToken();

  return (
    <div className="flex items-center gap-1 text-sm text-gray-700 px-3 py-2 rounded-xl hover:text-amber-600 transition">
      <Coins className="w-4 h-4" />
      {tokens === null ? "..." : `${tokens} token${tokens === 1 ? "" : "s"}`}
    </div>
  );
}

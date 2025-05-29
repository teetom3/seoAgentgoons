import { useState } from "react";
import { Loader2, Sparkles, FileText } from "lucide-react";

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface Props {
  onArticle: (article: Article) => void;
}

export default function ArticleGenerator({ onArticle }: Props) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [article, setArticle] = useState<Article | null>(null);

  const handleGenerate = async () => {
    setError(null);
    setArticle(null);
    setLoading(true);
    try {
      const res = await fetch("/api/articles/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");
      setArticle(data.article);
      onArticle(data.article);
      setTitle("");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <section className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-8 mx-auto w-full max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Générer un article SEO</h2>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="border-2 border-amber-100 focus:border-amber-400 px-4 py-3 rounded-xl text-lg transition outline-none"
          placeholder="Exemple : Meilleur CRM pour TPE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />

        <button
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-xl transition-all disabled:opacity-60"
          disabled={loading || !title.trim()}
          onClick={handleGenerate}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Génération...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" /> Générer l’article
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {article && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border">
          <h3 className="font-bold text-xl mb-2">{article.title}</h3>
          <pre className="whitespace-pre-wrap text-sm">{article.content}</pre>
        </div>
      )}
    </section>
  );
}

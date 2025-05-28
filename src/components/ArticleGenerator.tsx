import { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function ArticleGenerator() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<Article[]>([]);

  // Charger l'historique à l'ouverture
  useEffect(() => {
    fetch("/api/articles/articles")
      .then((res) => res.json())
      .then((data) => setHistory(data.articles || []));
  }, []);

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
      setHistory((prev) => [data.article, ...prev]);
      setTitle("");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto pt-12">
      {/* Centre : Générateur */}
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border">
        <h2 className="text-2xl font-bold mb-4">Générer un article SEO</h2>
        <input
          type="text"
          className="border px-4 py-2 rounded-lg w-full mb-4"
          placeholder="Titre de l'article (ex: Meilleur CRM pour TPE)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50"
          disabled={loading || !title.trim()}
          onClick={handleGenerate}
        >
          {loading ? "Génération..." : "Générer"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {article && (
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-2">{article.title}</h3>
            <pre className="whitespace-pre-wrap bg-gray-50 border rounded-lg p-4 text-sm">
              {article.content}
            </pre>
          </div>
        )}
      </div>

      {/* Droite : Historique */}
      <div className="w-full md:w-96 bg-gray-50 rounded-2xl p-6 shadow-md border h-fit">
        <h3 className="font-semibold text-lg mb-4">Historique</h3>
        {history.length === 0 && (
          <p className="text-gray-400">Aucun article généré pour l’instant.</p>
        )}
        <ul className="space-y-4 max-h-[600px] overflow-y-auto">
          {history.map((art) => (
            <li key={art.id} className="p-2 border rounded-lg bg-white shadow">
              <div className="text-sm font-bold">{art.title}</div>
              <div className="text-xs text-gray-400">
                {new Date(art.createdAt).toLocaleString("fr-FR")}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

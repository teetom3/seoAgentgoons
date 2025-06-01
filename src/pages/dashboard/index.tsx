import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleGenerator from "@/components/ArticleGenerator";
import { Archive, Clock, Coins, Crown, LogOut, X, Copy } from "lucide-react";
import Footer from "@/components/Footer";
import DashboardNavbar from "./components/DashboardNavbar";

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [history, setHistory] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Fetch history au chargement
  useEffect(() => {
    fetch("/api/articles/articles")
      .then((res) => res.json())
      .then((data) => setHistory(data.articles || []));
  }, []);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/auth/signin");
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }
  if (!session) return <div>Redirection...</div>;

  const handleAddArticle = (article: Article) => {
    setHistory((prev) => [article, ...prev]);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Navbar */}
<DashboardNavbar/>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Centre : bloc marketing + générateur */}
        <div className="lg:col-span-2 flex flex-col items-center">
          {/* Bloc accroche */}
          <section className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-3">
              🚀 Développez votre visibilité avec le{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-semibold">
                SEO
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light mb-4">
              Publier régulièrement des articles optimisés SEO augmente le
              trafic sur votre site, booste votre positionnement Google et vous
              fait gagner des clients.
            </p>
            <p className="text-md text-gray-500">
              Générez un article en 1 clic grâce à notre IA : choisissez un
              sujet, laissez la magie opérer, puis publiez directement sur votre
              blog !
            </p>
          </section>

          {/* ArticleGenerator (sans historique) */}
          <ArticleGenerator onArticle={handleAddArticle} />
        </div>

        {/* Sidebar historique */}
        <aside className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 sticky top-28 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" /> Historique des
              articles
            </h3>
            <div className="flex flex-col gap-3">
              {history.length === 0 && (
                <div className="text-gray-400 text-sm">
                  Aucun article généré pour le moment.
                </div>
              )}
              {history.map((art) => (
                <button
                  key={art.id}
                  className="flex flex-col items-start w-full bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm hover:bg-amber-50 transition text-left"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div className="font-medium text-gray-900 truncate">
                    {art.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(art.createdAt).toLocaleString("fr-FR")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Modal d'affichage d'article */}
      {selectedArticle && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm transition">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
              onClick={() => setSelectedArticle(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6">
              <div className="text-lg font-semibold text-gray-900">
                {selectedArticle.title}
              </div>
              <div className="text-xs text-gray-400">
                {new Date(selectedArticle.createdAt).toLocaleString("fr-FR")}
              </div>
            </div>
            <pre className="bg-gray-50 rounded-lg p-4 text-gray-800 text-sm max-h-72 overflow-auto whitespace-pre-wrap">
              {selectedArticle.content}
            </pre>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => copyToClipboard(selectedArticle.content)}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg font-medium"
              >
                <Copy className="w-4 h-4" />
                Copier le texte
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

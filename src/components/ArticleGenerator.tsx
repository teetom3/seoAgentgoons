// components/ArticleGenerator.tsx
import { useState } from "react";
import {
  FileText,
  Coins,
  Sparkles,
  Loader2,
  Eye,
  Copy,
  Download,
} from "lucide-react";

const MOCK_ARTICLES = [
  {
    id: "1",
    title: "Comment améliorer son SEO en 2024",
    content: `# Comment améliorer son SEO en 2024

## Introduction

Cet article traite du sujet "Comment améliorer son SEO en 2024" de manière approfondie et optimisée pour le SEO.

## Développement principal

### Sous-section 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Sous-section 2
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Conclusion

Pour conclure, "Comment améliorer son SEO en 2024" est un sujet important qui mérite une attention particulière dans votre stratégie de contenu SEO.

---
*Cet article a été généré automatiquement par BlogCraft AI*`,
    createdAt: "26/05/2025 13:45:11",
  },
];

export default function ArticleGenerator() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(MOCK_ARTICLES);
  const [tokens, setTokens] = useState(2);

  const generateDemoArticle = () => {
    if (!title.trim() || tokens <= 0) return;
    setLoading(true);

    setTimeout(() => {
      const newArticle = {
        id: Date.now().toString(),
        title,
        content: `# ${title}\n\nCet article a été généré en mode démo.`,
        createdAt: new Date().toLocaleString("fr-FR"),
      };
      setArticles((prev) => [newArticle, ...prev]);
      setTokens(tokens - 1);
      setTitle("");
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      className="py-24 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden"
      id="generator"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Générateur d'articles
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                Créez votre article
              </span>
              <br />
              <span className="text-gray-900">en quelques secondes</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Coins className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-gray-900">
                  Tokens restants: {tokens}
                </span>
                {tokens <= 0 && (
                  <span className="ml-2 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
                    Épuisés
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm mb-12 rounded-3xl">
              <div className="text-center pb-6 pt-8">
                <div className="flex items-center justify-center gap-3 text-2xl font-bold mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  Créer un nouvel article
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    placeholder="Entrez le titre de votre article..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 h-14 text-lg border-2 border-orange-100 focus:border-orange-300 rounded-2xl px-4"
                    disabled={loading}
                  />
                  <button
                    onClick={generateDemoArticle}
                    disabled={loading || tokens <= 0}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 h-14 px-8 rounded-2xl shadow-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Génération...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Générer l'article
                      </>
                    )}
                  </button>
                </div>
                {tokens <= 0 && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-center text-sm text-red-700">
                    Vous avez épuisé vos tokens gratuits. Achetez des tokens
                    pour continuer à créer des articles.
                  </div>
                )}
              </div>
            </div>

            {articles.length > 0 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Vos articles générés
                  </h3>
                  <p className="text-gray-600">
                    Gérez et personnalisez vos articles créés
                  </p>
                </div>

                <div className="grid gap-8">
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden rounded-3xl"
                    >
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-xl text-gray-900 font-bold">
                          {article.title}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                            {article.createdAt}
                          </span>
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-2 bg-white border border-gray-200 rounded-xl flex items-center text-sm text-gray-700 hover:bg-gray-50 transition">
                              <Eye className="w-4 h-4 mr-2" /> Aperçu
                            </button>
                            <button className="px-3 py-2 bg-white border border-gray-200 rounded-xl flex items-center text-sm text-gray-700 hover:bg-gray-50 transition">
                              <Copy className="w-4 h-4 mr-2" /> Copier
                            </button>
                            <button className="px-3 py-2 bg-white border border-gray-200 rounded-xl flex items-center text-sm text-gray-700 hover:bg-gray-50 transition">
                              <Download className="w-4 h-4 mr-2" /> Export
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-b-3xl">
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed overflow-x-auto">
                          {article.content}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

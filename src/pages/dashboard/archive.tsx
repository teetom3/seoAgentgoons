// pages/articles/archived.tsx (ou app/articles/archived/page.tsx pour App Router)
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]"; // Ajustez le chemin selon votre structure
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import Link from "next/link";
import DashboardNavbar from "./components/DashboardNavbar";
import Footer from "@/components/Footer";
// Fonction utilitaire pour formater les dates
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const prisma = new PrismaClient();

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: {
    name: string | null;
    email: string | null;
  };
}

interface ArchivedArticlesProps {
  articles: Article[];
  currentPage: number;
  totalPages: number;
  totalArticles: number;
}

export default function ArchivedArticles({
  articles,
  currentPage,
  totalPages,
  totalArticles,
}: ArchivedArticlesProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Fonction de recherche côté client
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(term.toLowerCase()) ||
          article.content.toLowerCase().includes(term.toLowerCase()) ||
          article.user.name?.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  // Fonction pour tronquer le contenu
  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <DashboardNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Articles Archivés
          </h1>
          <p className="text-gray-600">
            {totalArticles} article{totalArticles > 1 ? "s" : ""} archivé
            {totalArticles > 1 ? "s" : ""}
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans les articles..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Liste des articles */}
        <div className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? "Aucun résultat trouvé" : "Aucun article archivé"}
              </h3>
              <p className="text-gray-500">
                {searchTerm
                  ? "Essayez avec des mots-clés différents."
                  : "Les articles archivés apparaîtront ici."}
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link
                        href={`/articles/${article.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {article.user.name ||
                          article.user.email ||
                          "Utilisateur inconnu"}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="h-4 w-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m3 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m14 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7h14z"
                          />
                        </svg>
                        {formatDate(article.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center space-x-2">
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      Lire
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {truncateContent(article.content)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Pagination (seulement si pas de recherche active) */}
        {!searchTerm && totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              {/* Bouton précédent */}
              {currentPage > 1 && (
                <Link
                  href={`/articles/archived?page=${currentPage - 1}`}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Précédent
                </Link>
              )}

              {/* Numéros de page */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={`/articles/archived?page=${page}`}
                    className={`px-3 py-2 border rounded-md text-sm font-medium ${
                      page === currentPage
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </Link>
                )
              )}

              {/* Bouton suivant */}
              {currentPage < totalPages && (
                <Link
                  href={`/articles/archived?page=${currentPage + 1}`}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Suivant
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  // Vérification de l'authentification (optionnel)
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const page = parseInt(context.query.page as string) || 1;
  const limit = 10; // Nombre d'articles par page
  const skip = (page - 1) * limit;

  try {
    // Récupération des articles avec pagination
    const [articles, totalArticles] = await Promise.all([
      prisma.article.findMany({
        take: limit,
        skip: skip,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      }),
      prisma.article.count(),
    ]);

    const totalPages = Math.ceil(totalArticles / limit);

    return {
      props: {
        articles: articles.map((article) => ({
          ...article,
          createdAt: article.createdAt.toISOString(),
        })),
        currentPage: page,
        totalPages,
        totalArticles,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    return {
      props: {
        articles: [],
        currentPage: 1,
        totalPages: 0,
        totalArticles: 0,
      },
    };
  } finally {
    await prisma.$disconnect();
  }
};

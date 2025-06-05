// pages/articles/[id].tsx
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import DashboardNavbar from "../dashboard/components/DashboardNavbar";
import Footer from "@/components/Footer";
// Fonction utilitaire pour formater les dates
const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const prisma = new PrismaClient();

interface ArticlePageProps {
  article: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    user: {
      name: string | null;
      email: string | null;
    };
  } | null;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <DashboardNavbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-6">
            Cet article n'existe pas ou a été supprimé.
          </p>
          <Link
            href="/articles/archived"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/dashboard/archive"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 py-7"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux articles
          </Link>
        </div>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* En-tête de l'article */}
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
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
                  Par{" "}
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
                  {formatDateTime(article.createdAt)}
                </span>
              </div>
            </header>

            {/* Contenu de l'article */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {article.content}
              </div>
            </div>
          </div>
        </article>

        {/* Actions */}
        <div className="mt-6 flex justify-between items-center">
          <Link
            href="/dashboard/archive"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux articles
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Imprimer
          </button>
        </div>
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

  const { id } = context.params!;
  const articleId = parseInt(id as string);

  if (isNaN(articleId)) {
    return {
      notFound: true,
    };
  }

  try {
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!article) {
      return {
        props: {
          article: null,
        },
      };
    }

    return {
      props: {
        article: {
          ...article,
          createdAt: article.createdAt.toISOString(),
        },
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error);
    return {
      props: {
        article: null,
      },
    };
  } finally {
    await prisma.$disconnect();
  }
};

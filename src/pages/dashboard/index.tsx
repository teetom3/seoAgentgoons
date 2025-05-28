// pages/dashboard.tsx
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) router.push("/auth/signin"); // Not logged in
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return <div>Redirection...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-6 mb-8">
            {session.user?.image && (
              <div className="relative">
                <Image
                  src={session.user.image}
                  alt="Photo de profil"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Bienvenue, {session.user?.name || "Utilisateur"}
              </h2>
              <p className="text-gray-600 mt-1">
                Voici vos informations personnelles
              </p>
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informations du compte
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <p className="mt-1 text-gray-900">
                  {session.user?.name || "Non renseigné"}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <p className="mt-1 text-gray-900">
                  {session.user?.email || "Non renseigné"}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Photo de profil
                </label>
                <p className="mt-1 text-gray-900">
                  {session.user?.image
                    ? "Photo Google importée"
                    : "Aucune photo"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informations de session
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Statut de connexion
                </label>
                <p className="mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✓ Connecté
                  </span>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Type de connexion
                </label>
                <p className="mt-1 text-gray-900">Compte Google</p>
              </div>
            </div>
          </div>

          {/* Session Info (Debug) */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">
              Informations de session (Debug)
            </h4>
            <pre className="text-sm text-blue-800 overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}

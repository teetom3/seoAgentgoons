// components/NavBar.tsx
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Mon App SEO</h1>
      <div>
        {status === "loading" ? (
          <p>Chargement...</p>
        ) : session ? (
          <>
            <span className="mr-4">Bonjour, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
}

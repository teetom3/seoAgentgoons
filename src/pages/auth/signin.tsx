// pages/auth/signin.tsx
import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface SignInProps {
  providers: Record<string, any>;
}

export default function SignIn({ providers }: SignInProps) {
  const availableProviders = providers ? Object.values(providers) : [];
  return (
    <>
      <Head>
        <title>Se connecter</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>
        {availableProviders.length === 0 ? (
          <p className="text-red-500">
            Aucun fournisseur d'authentification disponible.
          </p>
        ) : (
          availableProviders.map((provider) => (
            <div key={provider.id} className="mb-2">
              <button
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "/dashboard" })
                }
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Se connecter avec {provider.name}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers: providers ?? {} },
  };
};

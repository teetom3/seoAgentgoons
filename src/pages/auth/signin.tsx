// pages/auth/signin.tsx
import { getProviders, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Sparkles, Crown, ArrowRight, LogIn } from "lucide-react";

interface SignInProps {
  providers: Record<string, any>;
}

export default function SignIn({ providers }: SignInProps) {
  const availableProviders = providers ? Object.values(providers) : [];

  return (
    <>
      <Head>
        <title>Connexion | BlogCraft AI</title>
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background décoratif */}
        <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-to-tl from-amber-100/30 to-orange-100/30 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-3xl shadow-2xl p-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-extralight text-gray-900 mb-0 leading-tight">
                  BlogCraft <span className="font-medium bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">AI</span>
                </h1>
                <div className="text-sm text-gray-500 font-light mt-1">Connexion à votre compte</div>
              </div>
            </div>

            <div className="mb-8">
              <Sparkles className="w-7 h-7 mx-auto text-amber-600 mb-2 animate-pulse" />
              <div className="text-gray-700 font-light text-lg">Profitez de 2 articles gratuits sans CB 💸</div>
            </div>

            {availableProviders.length === 0 ? (
              <p className="text-red-500">
                Aucun fournisseur d'authentification disponible.
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {availableProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() =>
                      signIn(provider.id, { callbackUrl: "/dashboard" })
                    }
                    className="flex items-center justify-center w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-lg font-medium shadow-xl hover:shadow-2xl gap-3 transition-all duration-200 transform hover:scale-105"
                  >
                    <LogIn className="w-6 h-6" />
                    Connexion avec {provider.name}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-12 text-xs text-gray-400">
              <span>En vous connectant, vous acceptez nos </span>
              <a href="#" className="underline hover:text-amber-600">conditions d’utilisation</a>
              <span> et </span>
              <a href="#" className="underline hover:text-amber-600">notre politique de confidentialité</a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers: providers ?? {} },
  };
};

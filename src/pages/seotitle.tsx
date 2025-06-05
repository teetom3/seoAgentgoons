// pages/seo-titres.tsx
import Head from "next/head";
import { Lightbulb, PencilLine, Star, Target } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeoTitresPage() {
  return (
    <>
      <Header />
      <Head>
        <title>Choisir ses titres SEO | BlogCraft AI</title>
      </Head>

      <section className="pt-28 pb-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden min-h-screen">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-100/40 to-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
              Bien choisir ses titres SEO
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Découvrez comment capter l’attention des moteurs de recherche et
              des lecteurs avec des titres percutants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bloc 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Pourquoi le titre est si important ?
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Le titre est le premier élément visible dans les résultats de
                recherche. Il doit à la fois susciter la curiosité de
                l'utilisateur et contenir des mots-clés stratégiques pour
                améliorer le référencement naturel (SEO).
              </p>
              <Image
                src="/images/seo-title-preview.png"
                alt="Aperçu d’un titre SEO dans Google"
                width={640}
                height={360}
                className="rounded-xl mt-6 shadow"
              />
            </div>

            {/* Bloc 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <PencilLine className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Comment construire un bon titre SEO ?
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inclure le mot-clé principal au début</li>
                <li>Limiter la longueur &agrave; 60 caract&egrave;res</li>
                <li>Utiliser des chiffres ou des questions</li>
                <li>
                  Apporter une promesse claire (ex : « Les 5 meilleures
                  astuces... »)
                </li>
              </ul>
            </div>

            {/* Bloc 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Exemples de titres efficaces
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                  ✅ Comment optimiser son site WordPress pour le SEO
                </li>
                <li className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                  ✅ Les 10 erreurs SEO les plus fréquentes (et comment les
                  éviter)
                </li>
                <li className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                  ✅ SEO local : Attirez plus de clients en magasin
                </li>
              </ul>
            </div>

            {/* Bloc 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Le + de BlogCraft AI
                </h2>
              </div>
              <p className="text-gray-600">
                Notre IA vous aide à formuler automatiquement des titres
                percutants en analysant les tendances, la concurrence et les
                mots-clés les plus recherchés dans votre domaine.
              </p>
              <a
                href="/auth/signin"
                className="mt-6 inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
              >
                Générer un titre automatiquement
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

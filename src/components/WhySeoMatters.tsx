import {
  Lightbulb,
  BookOpenCheck,
  BarChart4,
  Target,
  CheckCircle,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

export default function WhySeoMattersPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <section className="mb-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          À quoi sert le <span className="text-amber-600">SEO</span> et pourquoi
          la
          <br className="hidden sm:block" /> génération d'articles est
          importante ?
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Le SEO et la production de contenu sont deux piliers du marketing
          digital moderne. Voici pourquoi ils sont indispensables.
        </p>
      </section>

      {/* 3 Colonnes */}
      <section className="grid md:grid-cols-3 gap-10 mb-24">
        <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
          <Lightbulb className="w-10 h-10 text-amber-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Visibilité accrue
          </h3>
          <p className="text-gray-600 text-sm">
            Le SEO améliore votre classement sur Google, permettant aux clients
            de vous trouver plus facilement.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
          <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Trafic qualifié
          </h3>
          <p className="text-gray-600 text-sm">
            Attirez des visiteurs qui cherchent activement vos produits ou
            services, ce qui augmente vos chances de conversion.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
          <BookOpenCheck className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Contenu utile
          </h3>
          <p className="text-gray-600 text-sm">
            Des articles de qualité positionnent votre marque comme experte et
            renforcent la confiance de vos visiteurs.
          </p>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/images/seo-chart.png"
            width={480}
            height={320}
            alt="Graphique SEO"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Pourquoi faire du SEO ?
            </h2>
            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Visibilité en
                ligne accrue
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Trafic
                durable et non payant
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> Rentabilité
                sur le long terme
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Les 3 piliers du SEO
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <Target className="w-8 h-8 text-purple-500 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Contenu</h4>
            <p className="text-sm text-gray-600">
              Rédigez du contenu riche et pertinent en utilisant les bons
              mots-clés.
            </p>
          </div>
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <BarChart4 className="w-8 h-8 text-indigo-500 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Technique</h4>
            <p className="text-sm text-gray-600">
              Optimisez la structure de votre site, sa vitesse et son
              accessibilité.
            </p>
          </div>
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <UserCheck className="w-8 h-8 text-pink-500 mb-3" />
            <h4 className="text-xl font-semibold mb-2">Popularité</h4>
            <p className="text-sm text-gray-600">
              Créez des backlinks de qualité pour asseoir votre autorité dans
              votre domaine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 p-10 rounded-2xl shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-3 text-amber-700">
          Boostez votre stratégie SEO dès aujourd'hui
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Créer du contenu de qualité, adapté à votre audience, est la clé pour
          apparaître en haut des résultats Google et attirer les bons visiteurs.
        </p>
        <a
          href="/auth/signin"
          className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-medium py-3 px-8 rounded-xl shadow-xl"
        >
          Commencer gratuitement
        </a>
      </section>
    </main>
  );
}

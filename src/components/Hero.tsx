import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-amber-100/20 to-orange-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow mb-10">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
            <Star className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm text-gray-700 font-medium">
              Générateur #1 d’articles SEO par IA
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Rédigez des articles
            <br />
            <span className="font-semibold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              SEO performant
            </span>
            <br />
            <span className="text-3xl sm:text-4xl text-gray-600 font-light">
              en moins de 30 secondes
            </span>
          </h1>

          {/* Paragraphe descriptif */}
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Donnez un simple titre, et notre IA crée pour vous un article
            optimisé, structuré et prêt à publier. Gagnez du temps et grimpez
            sur Google.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="/auth/signin"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-base sm:text-lg font-semibold px-10 py-4 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Commencer gratuitement
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>2 articles gratuits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Aucune carte requise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

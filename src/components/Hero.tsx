// components/HeroSection.tsx
import { ArrowRight, Sparkles, Crown, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-amber-100/20 to-orange-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg mb-12">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4 animate-pulse"></div>
            <Star className="w-4 h-4 text-amber-600 mr-2 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              #1 Générateur d'articles SEO alimenté par l'IA
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-extralight mb-12 text-gray-900 leading-none">
            Créez des articles
            <br />
            <span className="font-light bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              SEO parfaits
            </span>
            <br />
            <span className="text-5xl lg:text-7xl text-gray-600">
              en 30 secondes
            </span>
          </h1>

          <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Transformez un simple titre en article professionnel optimisé SEO.
            Notre IA analyse, planifie et rédige pour vous avec une précision
            inégalée.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-8 mb-20">
            <a
              href="/auth/signin"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-12 py-6 h-auto text-lg font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <Sparkles className="mr-3 w-5 h-5" />
              Commencer gratuitement
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>2 articles gratuits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Sans carte bancaire</span>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">
                  +2,500 créateurs
                </div>
                <div className="text-xs text-gray-500">nous font confiance</div>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">4.9/5</div>
                <div className="text-xs text-gray-500">satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating demo card */}
        <div className="max-w-2xl mx-auto mt-24">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl transform hover:scale-105 transition-all duration-700">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Crown className="w-6 h-6 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">
                    BlogCraft AI - Génération en cours
                  </span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Recherche de mots-clés terminée
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Analyse des meilleurs articles
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Plan SEO généré</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">
                    Rédaction de l'article...
                  </span>
                </div>
              </div>

              <div className="bg-gray-50/50 rounded-2xl p-6 space-y-4">
                <h3 className="font-medium text-gray-900">
                  Comment optimiser son référencement SEO en 2024
                </h3>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200/60 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200/60 rounded-full w-4/5"></div>
                  <div className="h-2 bg-gray-200/60 rounded-full w-3/4"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                  <span>1,847 mots</span>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    Score SEO: 94/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

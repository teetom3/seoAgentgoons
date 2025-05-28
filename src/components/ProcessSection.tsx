// components/ProcessSection.tsx
import {
  Search,
  FileSearch,
  FileText,
  Edit,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Recherche intelligente",
      description:
        "Notre IA analyse votre titre pour identifier les mots-clés les plus pertinents et recherchés dans votre domaine.",
      step: "01",
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FileSearch,
      title: "Analyse concurrentielle",
      description:
        "Étude des articles les mieux classés sur votre sujet pour comprendre ce qui fonctionne actuellement.",
      step: "02",
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
    {
      icon: FileText,
      title: "Architecture SEO",
      description:
        "Création d'une structure cohérente avec les balises H1-H6 optimisées pour le référencement naturel.",
      step: "03",
      gradient: "from-emerald-100 to-green-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Edit,
      title: "Rédaction experte",
      description:
        "Génération d'un article complet et professionnel que vous pouvez personnaliser selon vos besoins.",
      step: "04",
      gradient: "from-amber-100 to-orange-100",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-200 rounded-2xl mb-8 shadow-lg">
            <Sparkles className="w-8 h-8 text-purple-700" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-gray-900">
            Un processus
            <br />
            <span className="font-extralight bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              d'excellence
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Notre IA ne se contente pas de générer du contenu. Elle suit un
            processus méthodique de recherche et d'analyse pour créer des
            articles véritablement optimisés.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Desktop connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )}

                  <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2 border border-gray-200/50">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-sm font-medium text-gray-600">
                        {step.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-medium mb-4 text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 font-light leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${step.gradient.replace(
                          "100",
                          "500"
                        )} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Résultat */}
        <div className="mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-xl">
              <div className="text-center">
                <h3 className="text-3xl font-light mb-6 text-gray-900">
                  Résultat : Un article prêt à performer
                </h3>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-8">
                  Grâce à ce processus complet, vous obtenez un article
                  professionnel, optimisé SEO et personnalisable selon vos
                  besoins spécifiques.
                </p>

                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light text-blue-600 mb-2">
                      28s
                    </div>
                    <div className="text-sm text-gray-500 font-light">
                      Temps moyen
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-emerald-600 mb-2">
                      92/100
                    </div>
                    <div className="text-sm text-gray-500 font-light">
                      Score SEO
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-purple-600 mb-2">
                      2K+
                    </div>
                    <div className="text-sm text-gray-500 font-light">
                      Utilisateurs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

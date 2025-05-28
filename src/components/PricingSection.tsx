// components/PricingSection.tsx
import { Check, Crown, Diamond, Star } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Essentiel",
      icon: Diamond,
      price: "1.99€",
      tokens: 10,
      description: "Pour débuter avec élégance",
      features: [
        "10 articles premium",
        "Optimisation SEO",
        "Support privilégié",
      ],
      popular: false,
      gradient: "bg-gradient-to-br from-slate-50 to-gray-100",
      iconColor: "text-slate-600",
      borderColor: "border-slate-200",
    },
    {
      name: "Excellence",
      icon: Crown,
      price: "4.99€",
      tokens: 50,
      description: "L'expérience complète",
      features: [
        "50 articles premium",
        "SEO expert",
        "Support prioritaire",
        "Templates exclusifs",
      ],
      popular: true,
      gradient: "bg-gradient-to-br from-amber-50 to-yellow-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      name: "Prestige",
      icon: Star,
      price: "14.99€",
      tokens: 200,
      description: "Pour les exigences les plus hautes",
      features: [
        "200 articles premium",
        "Conseil stratégique",
        "Support dédié",
        "Accès API",
        "Formation privée",
      ],
      popular: false,
      gradient: "bg-gradient-to-br from-purple-50 to-indigo-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-100/20 to-orange-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-2xl mb-8 shadow-lg">
            <Crown className="w-8 h-8 text-amber-700" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-gray-900">
            Choisissez votre
            <br />
            <span className="font-extralight bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              expérience
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Des solutions sur mesure pour créer du contenu exceptionnel.
            <br />
            Payez uniquement ce que vous utilisez, sans engagement.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={plan.name} className="relative group">
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 text-sm font-medium shadow-lg rounded-xl border-0">
                      Recommandé
                    </span>
                  </div>
                )}

                <div
                  className={`
                  relative overflow-hidden border-2 ${
                    plan.borderColor
                  } shadow-xl transition-all duration-700
                  ${
                    plan.popular
                      ? "scale-105 shadow-2xl"
                      : "hover:shadow-2xl hover:-translate-y-1"
                  }
                  bg-white/80 backdrop-blur-sm rounded-3xl
                `}
                >
                  {/* Card content */}
                  <div className="text-center pt-12 pb-8 px-6">
                    {/* Icon */}
                    <div
                      className={`
                      w-20 h-20 ${plan.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 
                      shadow-lg group-hover:scale-110 transition-transform duration-500
                    `}
                    >
                      <IconComponent
                        className={`w-10 h-10 ${plan.iconColor}`}
                      />
                    </div>

                    {/* Plan name */}
                    <div className="text-2xl font-light text-gray-900 mb-4">
                      {plan.name}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-extralight text-gray-900">
                          {plan.price}
                        </span>
                        <div className="text-left ml-2">
                          <div className="text-sm font-medium text-gray-700">
                            {plan.tokens} tokens
                          </div>
                          <div className="text-xs text-gray-500">
                            {(parseFloat(plan.price) / plan.tokens).toFixed(2)}€
                            / token
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-light text-lg">
                      {plan.description}
                    </p>
                  </div>

                  <div className="px-8 pb-10">
                    {/* Features */}
                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <Check className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700 font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`
                      w-full h-14 rounded-2xl font-medium text-lg transition-all duration-300
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl"
                      }
                      hover:scale-105 transform
                    `}
                    >
                      Commencer avec {plan.name}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee section */}
        <div className="text-center mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl mb-8">
                <Check className="w-7 h-7 text-emerald-700" />
              </div>

              <h3 className="text-3xl font-light mb-6 text-gray-900">
                Garantie sérénité
              </h3>

              <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                Votre satisfaction est notre priorité absolue.
                <br />
                Remboursement intégral sous 30 jours, sans condition.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl">🔒</div>
                  <span className="text-sm text-gray-600 font-light">
                    Paiement sécurisé
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">⚡</div>
                  <span className="text-sm text-gray-600 font-light">
                    Activation instantanée
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🎯</div>
                  <span className="text-sm text-gray-600 font-light">
                    Support expert
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">♾️</div>
                  <span className="text-sm text-gray-600 font-light">
                    Tokens permanents
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

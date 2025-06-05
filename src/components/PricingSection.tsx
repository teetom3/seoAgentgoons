import { Star, Coins } from "lucide-react";

const plans = [
  {
    title: "10 tokens",
    subtitle: "Starter",
    price: 3.99,
    tokens: 10,
    icon: (
      <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
        <Coins className="text-white" />
      </div>
    ),
    highlight: false,
  },
  {
    title: "30 tokens",
    subtitle: "Pro",
    price: 9.99,
    tokens: 30,
    icon: (
      <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center">
        <Star className="text-white" />
      </div>
    ),
    highlight: true,
  },
  {
    title: "100 tokens",
    subtitle: "Expert",
    price: 24.99,
    tokens: 100,
    icon: (
      <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center">
        <Coins className="text-white" />
      </div>
    ),
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white text-center" id="pricing">
      <h2 className="text-4xl font-semibold text-amber-600 mb-2">
        Boutique de tokens
      </h2>
      <p className="text-gray-600 text-lg mb-16">
        Achetez des packs de tokens pour générer vos articles à volonté 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition border ${
              plan.highlight ? "border-yellow-400 shadow-lg" : "border-gray-100"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                ⭐ Le plus populaire
              </div>
            )}

            <div className="flex justify-center mb-6">{plan.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {plan.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>

            <div className="text-3xl font-bold text-gray-900 mb-1">
              {plan.price.toFixed(2)} €
            </div>
            <p className="text-sm text-gray-500 mb-6">
              {(plan.price / plan.tokens).toFixed(2)} € / token
            </p>

            <a
              href={`/dashboard/shop?pack=${plan.tokens}`}
              className={`block w-full text-center text-white font-semibold py-3 rounded-xl transition ${
                plan.highlight
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              Acheter
            </a>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mt-12">
        Paiement 100% sécurisé • Activation instantanée des tokens
      </p>
    </section>
  );
}

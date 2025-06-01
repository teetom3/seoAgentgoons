// pages/boutique.tsx
import { Coins, Diamond, Star } from "lucide-react";
import Head from "next/head";

const plans = [
  {
    name: "Starter",
    tokens: 10,
    price: 3.99,
    icon: Diamond,
    color: "from-blue-400 to-indigo-500",
    popular: false,
  },
  {
    name: "Pro",
    tokens: 30,
    price: 9.99,
    icon: Star,
    color: "from-amber-400 to-yellow-500",
    popular: true,
  },
  {
    name: "Expert",
    tokens: 100,
    price: 24.99,
    icon: Coins,
    color: "from-emerald-400 to-green-500",
    popular: false,
  },
];

export default function Shop() {
  return (
    <>
      <Head>
        <title>Boutique – Acheter des tokens | BlogCraft AI</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extralight text-center mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Boutique de tokens
            </span>
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Achetez des packs de tokens pour générer vos articles à volonté 🚀
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {plans.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`
                    relative rounded-3xl bg-white/90 shadow-xl border-2
                    border-gray-100 p-8 flex flex-col items-center 
                    ${
                      plan.popular
                        ? "scale-105 border-amber-400 shadow-2xl"
                        : "hover:scale-105"
                    }
                    transition-transform duration-300
                  `}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full text-sm font-medium shadow-md z-10">
                      ⭐ Le plus populaire
                    </span>
                  )}
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg bg-gradient-to-br ${plan.color}`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.tokens} tokens
                  </h2>
                  <p className="text-gray-500 mb-4">{plan.name}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-light text-gray-900">
                      {plan.price} €
                    </span>
                    <div className="text-xs text-gray-400">
                      {(plan.price / plan.tokens).toFixed(2)} € / token
                    </div>
                  </div>
                  <button
                    className={`w-full py-3 rounded-xl font-medium text-lg transition
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg"
                          : "bg-gray-900 hover:bg-gray-800 text-white shadow"
                      }
                    `}
                  >
                    Acheter
                  </button>
                </div>
              );
            })}
          </div>
          <p className="text-center text-gray-500 mt-16">
            Paiement 100% sécurisé • Activation instantanée des tokens
          </p>
        </div>
      </div>
    </>
  );
}

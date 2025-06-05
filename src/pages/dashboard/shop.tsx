// pages/boutique.tsx
import { Coins, Diamond, Star } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { useState } from "react";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
import DashboardNavbar from "./components/DashboardNavbar";
import Footer from "@/components/Footer";

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
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const handlePurchase = async (packIndex: number) => {
    setLoadingIndex(packIndex);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packIndex }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Erreur lors de la création de la session:", data.error);
        alert("Erreur lors de la création de la session de paiement");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue lors de la création du paiement");
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <>
      <DashboardNavbar />
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
              const isLoading = loadingIndex === idx;

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
                      {plan.price} €
                    </span>
                    <div className="text-xs text-gray-400">
                      {(plan.price / plan.tokens).toFixed(2)} € / token
                    </div>
                  </div>
                  <button
                    onClick={() => handlePurchase(idx)}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-medium text-lg transition relative
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg"
                          : "bg-gray-900 hover:bg-gray-800 text-white shadow"
                      }
                      ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
                    `}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Redirection...
                      </span>
                    ) : (
                      "Acheter"
                    )}
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
      <Footer />
    </>
  );
}

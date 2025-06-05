// pages/api/stripe/checkout.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

// Initialiser Stripe avec la clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Configuration des packs (doit correspondre à ceux de ta page boutique)
const plans = [
  {
    name: "Starter",
    tokens: 10,
    price: 3.99,
  },
  {
    name: "Pro",
    tokens: 30,
    price: 9.99,
  },
  {
    name: "Expert",
    tokens: 100,
    price: 24.99,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    // Vérifier l'authentification
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user) {
      return res.status(401).json({ error: "Non authentifié" });
    }

    const { packIndex } = req.body;

    // Vérifier que l'index du pack est valide
    if (
      typeof packIndex !== "number" ||
      packIndex < 0 ||
      packIndex >= plans.length
    ) {
      return res.status(400).json({ error: "Pack invalide" });
    }

    const selectedPlan = plans[packIndex];

    // Récupérer l'utilisateur pour avoir son ID
    // Tu devras adapter cette partie selon ta base de données
    // Pour l'exemple, j'utilise l'email comme identifiant
    const userId = session.user.email; // ou session.user.id si tu l'as

    // Créer la session de checkout Stripe
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Pack ${selectedPlan.name} - ${selectedPlan.tokens} tokens`,
              description: `Achat de ${selectedPlan.tokens} tokens pour BlogCraft AI`,
            },
            unit_amount: Math.round(selectedPlan.price * 100), // Stripe utilise les centimes
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/shop?canceled=true`,
      metadata: {
        userId: userId as string,
        tokens: selectedPlan.tokens.toString(),
        packName: selectedPlan.name,
      },
    });

    res.status(200).json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Erreur Stripe checkout:", error);
    res.status(500).json({
      error: "Erreur lors de la création de la session de paiement",
      details: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}

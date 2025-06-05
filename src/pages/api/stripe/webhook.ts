// pages/api/stripe/webhook.ts
import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import { prisma } from "../../../lib/prisma"; // Ajuste le chemin selon ton setup

// Configuration pour désactiver le body parser par défaut
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialiser Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    // Récupérer le body brut de la requête
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"]!;

    let event: Stripe.Event;

    try {
      // Vérifier la signature du webhook
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      console.error("Erreur de signature webhook:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("=== WEBHOOK STRIPE ===");
    console.log("Type d'événement:", event.type);

    // Traiter l'événement de paiement réussi
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("Session complétée:", session.id);
      console.log("Métadonnées:", session.metadata);

      // Récupérer les informations depuis les métadonnées
      const userEmail = session.metadata?.userId;
      const tokens = parseInt(session.metadata?.tokens ?? "0", 10);
      const packName = session.metadata?.packName;

      if (!userEmail || tokens <= 0) {
        console.error("Métadonnées manquantes ou invalides:", {
          userEmail,
          tokens,
          packName,
        });
        return res.status(400).json({ error: "Métadonnées invalides" });
      }

      try {
        // Trouver l'utilisateur par email et créditer les tokens
        const updatedUser = await prisma.user.update({
          where: { email: userEmail },
          data: {
            tokens: {
              increment: tokens,
            },
          },
        });

        console.log(`✅ ${tokens} tokens ajoutés à l'utilisateur ${userEmail}`);
        console.log(`Nouveau solde: ${updatedUser.tokens} tokens`);

        // Optionnel : Créer un historique des achats
        await prisma.tokenPurchase.create({
          data: {
            userId: updatedUser.id,
            tokens: tokens,
            amount: session.amount_total ? session.amount_total / 100 : 0, // Stripe utilise les centimes
            stripeSessionId: session.id,
            packName: packName || "Inconnu",
          },
        });

        console.log("Historique d'achat créé");
      } catch (dbError) {
        console.error("Erreur base de données:", dbError);

        // Si l'utilisateur n'existe pas, on peut essayer de le créer
        // ou renvoyer une erreur selon ton cas d'usage
        if (
          dbError instanceof Error &&
          dbError.message.includes("Record to update not found")
        ) {
          console.error(`Utilisateur non trouvé: ${userEmail}`);
          return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        throw dbError; // Re-lancer l'erreur pour la gestion générale
      }
    }

    // Autres types d'événements que tu peux écouter (optionnel)
    else if (event.type === "payment_intent.payment_failed") {
      console.log("❌ Paiement échoué");
      // Tu peux gérer les échecs de paiement ici
    }

    // Confirmer la réception du webhook
    res.json({ received: true });
  } catch (error) {
    console.error("Erreur webhook:", error);
    res.status(500).json({
      error: "Erreur interne du serveur",
      details: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}

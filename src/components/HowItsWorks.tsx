import { Pencil, Sparkles, UploadCloud } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white relative z-10 border-t border-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Générez des articles SEO en quelques clics. Laissez l’IA faire le
          travail pendant que vous vous concentrez sur votre activité.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Étape 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <Pencil className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              1. Saisissez un sujet
            </h3>
            <p className="text-sm text-gray-600">
              Donnez un titre ou une idée d’article. Par exemple : “Le meilleur
              CRM pour TPE”.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              2. L’IA rédige pour vous
            </h3>
            <p className="text-sm text-gray-600">
              En quelques secondes, l’article complet est généré. Structuré,
              optimisé et prêt à être publié.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              3. Publiez sur votre site
            </h3>
            <p className="text-sm text-gray-600">
              Copiez-collez ou exportez le texte directement vers votre CMS
              préféré.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

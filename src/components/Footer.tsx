// components/Footer.tsx
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Crown,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-amber-100/20 to-orange-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">
                  BlogCraft{" "}
                  <span className="font-medium bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    AI
                  </span>
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                L'outil IA de référence pour créer des articles de blog SEO
                optimisés en quelques secondes. Rejoignez plus de 2500 créateurs
                satisfaits.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 shadow-lg border border-gray-200/50"
                >
                  <Twitter className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 shadow-lg border border-gray-200/50"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 shadow-lg border border-gray-200/50"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-medium text-lg mb-8 text-gray-900">
                Produit
              </h4>
              <ul className="space-y-4">
                {[
                  "Fonctionnalités",
                  "Tarifs",
                  "API",
                  "Documentation",
                  "Intégrations",
                  "Templates",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="font-medium text-lg mb-8 text-gray-900">
                Support
              </h4>
              <ul className="space-y-4">
                {[
                  "Centre d'aide",
                  "Contact",
                  "Statut",
                  "Communauté",
                  "Tutoriels",
                  "FAQ",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-medium text-lg mb-8 text-gray-900">
                Contact
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-200/50 flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-light mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@blogcraft.ai"
                      className="text-gray-900 hover:text-amber-600 transition-colors font-light"
                    >
                      contact@blogcraft.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-200/50 flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-light mb-1">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33123456789"
                      className="text-gray-900 hover:text-amber-600 transition-colors font-light"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-200/50 flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-light mb-1">
                      Adresse
                    </p>
                    <p className="text-gray-900 font-light">
                      123 Rue de l'Innovation
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-500 text-sm font-light">
                &copy; 2024 BlogCraft AI. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  Conditions d'utilisation
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  Mentions légales
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm font-light">
                Fait avec
              </span>
              <span className="text-red-400 text-lg">❤️</span>
              <span className="text-gray-500 text-sm font-light">
                en France
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

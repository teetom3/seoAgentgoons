// Nouveau composant : ConfirmModal.tsx
import { X } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmModal({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
          onClick={onCancel}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Confirmer la génération ?
        </h2>
        <p className="text-gray-600 mb-6">
          La génération d’un article coûtera{" "}
          <span className="font-bold">1 token</span>. Voulez-vous continuer ?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-700"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow"
          >
            Oui, générer
          </button>
        </div>
      </div>
    </div>
  );
}

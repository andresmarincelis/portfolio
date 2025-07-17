import { useState } from "react";

interface ContactInfoModalProps {
  onClose: () => void;
  onOpenContactModal: () => void;
}

const MiniContact = ({
  onClose,
  onOpenContactModal,
}: ContactInfoModalProps) => {
  const [copiedField, setCopiedField] = useState<
    "phone" | "email" | "github" | null
  >(null);

  const copyToClipboard = (
    text: string,
    field: "phone" | "email" | "github"
  ) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    });
  };

  const phone = "+569 84467457";
  const email = "andresmarincelis@gmail.com";
  //   const github = "https://github.com/andresmarincelis";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-black text-white p-5 rounded-xl shadow-xl w-full max-w-sm border border-white/20 space-y-4 transition-all duration-300">
        <h2 className="text-xl font-bold text-secondary">
          Información de contacto
        </h2>

        <div className="flex items-center justify-between">
          <span>{phone}</span>
          <button
            onClick={() => copyToClipboard(phone, "phone")}
            className="text-sm px-2 py-1 border border-white/40 rounded hover:bg-secondary hover:text-white transition-all"
          >
            {copiedField === "phone" ? "Copiado" : "Copiar"}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span>{email}</span>
          <button
            onClick={() => copyToClipboard(email, "email")}
            className="text-sm px-2 py-1 border border-white/40 rounded hover:bg-secondary hover:text-white transition-all"
          >
            {copiedField === "email" ? "Copiado" : "Copiar"}
          </button>
        </div>

        {/* <div className="flex items-center justify-between">
          <span>{github}</span>
          <button
            onClick={() => copyToClipboard(github, "github")}
            className="text-sm px-2 py-1 border border-white/40 rounded hover:bg-secondary hover:text-white transition-all"
          >
            {copiedField === "github" ? "Copiado" : "Copiar"}
          </button>
        </div> */}

        <div className="flex justify-between pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-darkBg transition-all"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContactModal();
            }}
            className="px-4 py-2 border border-secondary text-secondary rounded hover:bg-secondary hover:text-white transition-all"
          >
            Contacta conmigo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniContact;

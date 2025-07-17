import emailjs from "emailjs-com";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_8qlawqj",
        "template_v6oodns",
        form,
        "gwuVD2p851Uv2YQf1"
      );

      alert("Mensaje enviado correctamente!");
      form.reset();
      onClose();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-black text-white p-6 rounded-xl shadow-xl w-full max-w-md border border-white/20 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Contáctame</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary placeholder-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary placeholder-white"
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            rows={4}
            required
            className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary placeholder-white"
          ></textarea>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-darkBg transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

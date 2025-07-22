"use client";
import Link from "next/link";
import { useState } from "react";
import MotionTransition from "./MotionTransition";
import { socialNetworks } from "@/data";
import MiniContact from "./MiniContact";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // para encadenar al modal de contacto si quieres

  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block top-0 w-full px-20 bg-gradient-cover bg-no-repeat bg-cover py-12"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href={"/"}>
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Andrés<span className="text-secondary font-bold">Marín</span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) =>
              id === 3 ? (
                <button
                  key={id}
                  onClick={() => setIsModalOpen(true)}
                  className="transition-all duration-300 hover:text-secondary"
                >
                  {logo}
                </button>
              ) : (
                <Link
                  key={id}
                  href={src}
                  target="_blank"
                  className="transition-all duration-300 hover:text-secondary"
                >
                  {logo}
                </Link>
              )
            )}
          </div>
        </div>
      </header>

      {isModalOpen && (
        <MiniContact
          onClose={() => setIsModalOpen(false)}
          onOpenContactModal={() => {
            setIsModalOpen(false);
            setShowContactForm(true); // puedes levantarlo a nivel global si lo necesitas
          }}
        />
      )}

      {showContactForm && (
        <ContactModal onClose={() => setShowContactForm(false)} />
      )}
    </MotionTransition>
  );
};

export default Header;

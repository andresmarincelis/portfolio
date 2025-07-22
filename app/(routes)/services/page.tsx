"use client";
import AvatarServices from "@/components/AvatarServices";
import CircleImage from "@/components/CircleImage";
import ContactModal from "@/components/ContactModal";
import CoverParticles from "@/components/CoverParticles";
import SliderServices from "@/components/SliderServices";
import TransitionPage from "@/components/TransitionPage";
import { useState } from "react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center min-h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-4 pt-48">
        <div className="max-w-[450px] mt-10 md:mt-0 md:ml-5">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis
            <span className="font-bold text-secondary"> servicios</span>
          </h1>
          <p className="mb-10 text-xl text-white">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            diseño interfaces de usuario intuitivas y responsivas que reflejan
            la identidad de marca de mis clientes y mejoran su presencia en
            línea.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-2 bg-secondary transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
          >
            Contacta conmigo
          </button>
        </div>

        {/* SLIDER */}

        <div>
          <SliderServices />
        </div>
      </div>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Services;

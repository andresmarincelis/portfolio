"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ContactModal from "./ContactModal";

const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="z-20 w-full bg-darkBg-60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-image2.png"
          priority
          width={180}
          height={180}
          alt="Home Pic"
          className="w-32 md:w-48 max-w-xs h-auto rounded-2xl border-2 border-white shadow-lg mx-auto"
        />

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                " puedes programarlo",
                1000,
                " puedes optimizarlo",
                1000,
                " puedes implementarlo",
                1000,
                " puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary" //tambien podria ser un <br> en vez del block
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Soy un apasionado del desarrollo Fullstack y un entusiasta de la
            tecnología. Disfruto trabajar en equipo, comunicarme de manera
            efectiva y enfrentar nuevos desafíos.
            {/* Para mí, el aprendizaje
            continuo es clave, siempre busco mejorar mis habilidades y descubrir
            nuevas soluciones. */}
          </p>

          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 bg-secondary transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Ver proyectos
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-2 bg-secondary transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Contacta conmigo
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Introduction;

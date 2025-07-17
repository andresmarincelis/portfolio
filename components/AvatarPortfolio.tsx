"use client";

import Image from "next/image";
import MotionTransition from "./MotionTransition";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:inline-block md:fixed"
    >
      <Image
        src="/avatar-works.png"
        width={300}
        height={300}
        className="w-full h-full"
        alt="Avatar portfolio"
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;

//cambié el md:absolute por fixed para que se vea al final

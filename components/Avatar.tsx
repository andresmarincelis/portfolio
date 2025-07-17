"use client";

import Image from "next/image";
import MotionTransition from "./MotionTransition";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-10 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-2.png"
        width={350}
        height={350}
        className="w-full h-full mt-20"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;

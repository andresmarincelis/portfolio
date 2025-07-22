"use client";

import Image from "next/image";
import MotionTransition from "./MotionTransition";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="fixed bottom-0 right-0 hidden md:inline-block z-10"
    >
      <Image
        src="/avatar-2.png"
        width={350}
        height={350}
        className="w-auto h-[350px]"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;

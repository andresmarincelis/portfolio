import Image from "next/image";
import MotionTransition from "./MotionTransition";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={300}
        height={300}
        className="w-[250px] h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default AvatarServices;

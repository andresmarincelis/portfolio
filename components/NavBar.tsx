"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./MotionTransition";

const NavBar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      {/* Contenedor principal con grupo para manejar hover */}
      <nav className="group">
        {/* Navbar con opacidad baja y escala, ambas transicionan al hacer hover */}
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm opacity-30 scale-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default NavBar;

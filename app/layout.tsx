import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Landing Page made by Andrés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased bg-gradient-cover bg-no-repeat bg-cover min-h-screen`}
      >
        <NavBar />
        <Header />
        {children}
      </body>
    </html>
  );
}

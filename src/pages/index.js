import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/works";
import Marquee from "@/components/marquee";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Marquee />
    </div>
  );
}

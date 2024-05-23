import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/works";
import Marquee from "@/components/marquee";
import Process from "@/components/process";
import Experience from "@/components/experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center bg-slate-100">
      <div className="flex flex-1 flex-col max-w-[1560px] bg-white overflow-hidden">
        <Header />
        <Hero />
        <Work />
        <Marquee />
        <Process />
        <Experience />
      </div>
    </div>
  );
}

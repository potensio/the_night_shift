"use client";
import React from "react";

import { Process } from "@/app/(home)/process";
import { Experience } from "@/app/(home)/experience";
import { Benefits } from "@/app/(home)/benefits";
import { Faq } from "@/app/(home)/faq";
import { Hero } from "@/app/(home)/hero";
import { Works } from "@/app/(home)/works";
import { Marquee } from "@/app/(home)/marquee";

export default function Home() {
  const scrollTo = () => {
    const processDiv = document.getElementById("process");
    if (processDiv) {
      processDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const h = "test";
    console.log(h);
  };

  return (
    <div className="flex flex-col bg-white">
      <Hero triggerScroll={scrollTo} />
      <Works />
      <Marquee />
      <div id="process">
        <Process />
      </div>
      <Experience />
      <Benefits />
      <Faq />
    </div>
  );
}

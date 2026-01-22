"use client";

import { StripedPattern } from "@/components/ui/StripedPattern";
import NavBar from "../components/NavBar";
import MaskedSection from "../components/MaskedSection";
import React, { ReactNode } from "react";

const HeroSection = () => {
  const element: ReactNode = (
    <h2 className="2xl:text-7xl text-6xl font-black tracking-tighter w-1/2">
      Hey, I'm Yacine <br />
      full-stack developer <br />
      based in Medea Algeria.
    </h2>
  );

  const maskedElement: ReactNode = (
    <>
      I enjoy building creative <br></br>ideas and turning them <br></br>
      into meaningful interactions.
    </>
  );
  return (
    <section className="flex relative flex-col py-6 min-h-[70vh] bg-cover w-screen">
      <div className="absolute flex h-[70vh] w-screen flex-col items-center justify-center overflow-hidden left-0 top-16">
        <StripedPattern className="2xl:mask-[radial-gradient(20rem_circle_at_center,white,transparent)] mask-[radial-gradient(15rem_circle_at_center,white,transparent)] w-full 2xl:opacity-70 opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <NavBar />
      </div>

      <MaskedSection element={element} maskedElement={maskedElement} />
    </section>
  );
};

export default HeroSection;

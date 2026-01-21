"use client";
import About from "./(sections)/About";
import Contact from "./(sections)/Contact";
import Experience from "./(sections)/Experience";
import Hero from "./(sections)/Hero";
import ProjectsSection from "./(sections)/Projects";
import Stack from "./(sections)/Stack";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black w-screen">
      <main className="font-bricolage bg-linear-to-br from-slate-800 from-10% to-stone-800 via-black/95 bg-cover bg-fixed text-white min-h-screen w-screen">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>
    </div>
  );
}

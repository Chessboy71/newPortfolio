import MaskedSection from "../components/MaskedSection";
import { Copy, Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const element = (
    <h2 className="text-8xl font-black tracking-tighter  bg-linear-to-r from-white  to-white/80 text-transparent bg-clip-text">
      Feel free to get in touch for potential opportunities
    </h2>
  );
  const maskedElement = (
    <p className="bg-linear-to-r from-zinc-700  text-8xl to-black/80 text-transparent bg-clip-text text-center ml-auto mr-auto">
      ... or let's build your next project
    </p>
  );
  return (
    <section
      id="contact"
      className="flex relative flex-col py-6 2xl:h-[70vh] h-screen bg-cover w-screen"
    >
      <MaskedSection element={element} maskedElement={maskedElement} />
      <button
        className="mt-4 font-darker font-bold uppercase tracking-tight text-xl text-white flex 
      items-center group gap-2 hover:text-amber-600 transition-all duration-300 absolute top-3/4 z-50 cursor-pointer left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          navigator.clipboard.writeText("Bentegrimohamed@gmail.com");
        }}
      >
        Bentegrimohamed@gmail.com{" "}
        <Copy className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 size-3.5" />
      </button>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-6 z-50">
        <Github className="2xl:size-5 size-4 hover:text-amber-600 hover:scale-105 cursor-pointer transition-all duration-300" />
        <Instagram className="2xl:size-5 size-4 hover:text-amber-600 hover:scale-105 cursor-pointer transition-all duration-300" />
        <Linkedin className="2xl:size-5 size-4 hover:text-amber-600 hover:scale-105 cursor-pointer transition-all duration-300" />
      </div>
    </section>
  );
};

export default Contact;

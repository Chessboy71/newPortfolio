import consCorp from "@/public/ConstCorp.svg";
import Image from "next/image";
import { useState } from "react";
import qantra from "@/public/Logo-qantra.svg";
import rapskey from "@/public/rapskeyLogo.svg";

const Experience = () => {
  const [consHover, setConsHover] = useState(false);
  const [qantraHover, setQantraHover] = useState(false);
  const [rapskeyHover, setRapskeyHover] = useState(false);
  return (
    <section
      id="experience"
      className="w-full px-[10vw] flex flex-row gap-10 2xl:py-96 py-64 items-start"
    >
      <div className="text-6xl font-black w-1/2 leading-16 -tracking-[0.075em] pr-12 ">
        <h4 className="text-base font-darker font-black text-neutral-500  uppercase tracking-normal">
          About
        </h4>
        From <span className="text-amber-600">interaction</span> ideas to fully
        engineered, production-ready{" "}
        <span className="text-amber-600">experiences</span>
      </div>
      <div className="w-1/2 text-amber-50  text-2xl font-darker font-medium pt-4 flex flex-col">
        <div>
          Currently focusing on making my projects feel alive with a strong
          focus on interactions, experience and animations.
          <br></br>
          <br></br> My first project with this approach was{" "}
          <span
            className="text-amber-600 font-bold hover:underline cursor-pointer"
            onMouseEnter={() => setConsHover(true)}
            onMouseLeave={() => setConsHover(false)}
          >
            constCorp
          </span>
          . I also had the chance to work on a SAAS for a pharmaceutical company
          with{" "}
          <span
            className="text-amber-600 font-bold hover:underline cursor-pointer"
            onMouseEnter={() => setQantraHover(true)}
            onMouseLeave={() => setQantraHover(false)}
          >
            Qantra{" "}
          </span>
          team on {""}
          <span
            className="text-amber-600 font-bold hover:underline cursor-pointer"
            onMouseEnter={() => setRapskeyHover(true)}
            onMouseLeave={() => setRapskeyHover(false)}
          >
            Rapskey
          </span>
          , where interactions were minimal yet effective to enhance user
          experience.
        </div>
        <div className="uppercase text-neutral-600 font-black font-darker py-6 text-base">
          Companies I've worked with
        </div>
        <div className="flex flex-row items-center gap-8">
          <Image
            src={consCorp}
            alt="consCorp logo"
            width={1200}
            height={800}
            className={`-translate-y-1 object-cover shadow-lg h-8 w-auto ${consHover ? "opacity-100" : "opacity-50"} transition-all hover:opacity-100 cursor-pointer duration-500`}
          />
          <Image
            src={qantra}
            alt="Qantra logo"
            width={1200}
            height={800}
            className={` object-cover shadow-lg h-8 w-auto ${qantraHover ? "opacity-100 grayscale-0" : "opacity-50 grayscale-100"} transition-all hover:opacity-100 hover:grayscale-0 cursor-pointer duration-500`}
          />
          <Image
            src={rapskey}
            alt="Raspkey logo"
            width={1200}
            height={800}
            className={` object-cover shadow-lg h-5 w-auto ${rapskeyHover ? "opacity-100 grayscale-0" : "opacity-50 grayscale-100"} transition-all hover:opacity-100 hover:grayscale-0 cursor-pointer duration-500`}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;

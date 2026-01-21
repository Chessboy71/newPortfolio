import { Ripple } from "@/components/ui/Ripple";
import Image from "next/image";
import jsLogo from "@/public/jsLogo.svg";
import tsLogo from "@/public/tsLogo.svg";
import expressLogo from "@/public/expressLogo.svg";
import reactLogo from "@/public/reactLogo.svg";
import gsapLogo from "@/public/gsapLogo.svg";
import nodeLogo from "@/public/nodeLogo.svg";
import nextLogo from "@/public/nextjsLogo.svg";

const StackSection = () => {
  return (
    <section className="w-full px-40 flex flex-col  items-center justify-center min-h-[50vh] mt-24">
      {" "}
      <h2 className="text-7xl font-black tracking-tighter bg-linear-to-r from-white  to-white/80 text-transparent bg-clip-text">
        Destined For success
      </h2>
      <h4 className="text-xl  font-darker font-bold text-amber-600">
        Tech stack
      </h4>
      <div className="relative h-150 w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-row gap-8 z-50">
          <div className="grayscale rounded-full p-3 bg-white/10  hover:grayscale-0 scale-75 opacity-70 hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={expressLogo}
              alt="JavaScript Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full "
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              Express JS
            </p>
          </div>
          <div className="grayscale rounded-full p-3 bg-white/10  hover:grayscale-0 scale-75 opacity-70 hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={nodeLogo}
              alt="JavaScript Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full"
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              Node JS
            </p>
          </div>
          <div className="grayscale rounded-full p-3 bg-white/10  hover:grayscale-0 scale-75 opacity-70 hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={tsLogo}
              alt="JavaScript Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full"
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              TypeScript
            </p>
          </div>
          <div className="grayscale hover:grayscale-0 scale-110 p-3 bg-white/10 rounded-full hover:scale-125 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={jsLogo}
              alt="JavaScript Logo"
              width={64}
              height={64}
              className="h-16 w-16 object-cover rounded-full"
            />
            <p className="text-[0.65rem] font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              JavaScript
            </p>
          </div>
          <div className="grayscale rounded-full hover:grayscale-0 bg-gray-800 p-3 scale-75  hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={reactLogo}
              alt="React Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full"
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              React JS
            </p>
          </div>
          <div className="grayscale rounded-full hover:grayscale-0 bg-gray-800 p-3 scale-75  hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={nextLogo}
              alt="Next.js Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full"
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              Next JS
            </p>
          </div>
          <div className="grayscale rounded-full hover:grayscale-0 bg-gray-800 p-3 scale-75  hover:scale-90 hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-4 group">
            <Image
              src={gsapLogo}
              alt="GSAP Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-cover rounded-full"
            />
            <p className="text-xs font-bold text-white/70 absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase font-darker">
              GSAP
            </p>
          </div>
        </div>
        <Ripple mainCircleSize={150} numCircles={4} />
      </div>
      <div className="w-1/2 text-center text-lg font-semibold">
        Almost two years of experience as a JavaScript fullstack developer with
        a frontend focus, mostly comfortable working with React.js and Next.js.
        Experienced in building RESTful APIs using Express.js and Node.js.
        Proficient in TypeScript and JavaScript, with a strong understanding of
        modern web development practices.
      </div>
    </section>
  );
};

export default StackSection;

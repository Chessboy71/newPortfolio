import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className=" w-full px-[10vw] flex flex-row gap-10 py-20 items-start"
    >
      <div className="2xl:text-6xl text-5xl font-black w-1/2 leading-16 -tracking-[0.075em]">
        <span className="text-amber-600">Design-driven</span> development
        <br></br> for modern web experiences
      </div>
      <div className="w-1/2 text-amber-50 text-xl 2xl:text-2xl font-darker font-medium pt-4 flex flex-col">
        I build applications where performance, structure, and user experience
        go hand in hand.
        <br></br>
        <br></br> With a strong focus on front-end development and architecture,
        I translate design ideas into reliable, scalable solutions. I value
        clean code, reusable components, and thoughtful interactions that make
        products easy to use and maintain.
        <Link
          href="/projects"
          className="mt-4 font-bricolage font-black uppercase tracking-tighter text-xl text-white flex items-center group gap-2 hover:text-amber-600 transition-all duration-300"
        >
          Learn More{" "}
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
        </Link>
      </div>
    </section>
  );
};

export default About;

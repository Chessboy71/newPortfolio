import rapskey from "@/public/rapskey.png";
import consCorp from "@/public/consCorp.png";
import tutoraProf from "@/public/tutoraProf.png";
import dentist from "@/public/dentistProject.png";
import ecom from "@/public/ecom.png";

import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center min-h-[60vh] px-[10vw] mt-24">
      <h2 className="text-7xl font-black tracking-tighter bg-linear-to-r from-white  to-white/80 text-transparent bg-clip-text">
        Check it yourself
      </h2>
      <h4 className="text-xl font-darker font-bold text-amber-600">
        Projects Showcase
      </h4>
      <div className="flex flex-row flex-wrap w-full mt-12 gap-8 justify-center max-w-7xl">
        <div className="w-[45%]">
          {/* Project Card */}
          <ProjectCard
            title="Rapskey"
            description="is a Regulatory Information Management (RIM) software developed to 
        simplify and modernize how pharmaceutical companies manage their regulatory projects and data in Africa and MENA region"
            imageSrc={rapskey.src}
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "ShadCn",
              "Redux",
            ]}
            year="24"
            link="https://qantra.ai/en/cas-client/rapskey-2/"
          />
        </div>
        <div className="w-[45%]">
          {/* Project Card */}
          <ProjectCard
            title="Dentist Clinic"
            description="This project is currently in developement, a platform where combines between a dashboard that tracks the dentist's patients information, 
            their appointmenets, medical history and future work"
            imageSrc={dentist.src}
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "ShadCn",
              "Redux",
              "node",
              "express",
            ]}
            year="24"
            link="/projects/rapskey"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full mt-12 gap-4 justify-center max-w-7xl">
        <div className="w-[30%]">
          {/* Project Card */}
          <ProjectCard
            title="Local Ecommerce"
            description="An ecommerce website, with a fresh modern look that gives everything the user needs. Filters, clean and easy showcase of product, and performance."
            imageSrc={ecom.src}
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "ShadCn",
              "Redux",
            ]}
            year="24"
            link="/projects/rapskey"
          />
        </div>
        <div className="w-[30%]">
          {/* Project Card */}
          <ProjectCard
            title="constCorp"
            description="A front-end implementation of an existing backend to showcase a company specialised in construction with a dashboard, authentification 
            and smooth transition between the elements."
            imageSrc={consCorp.src}
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "ShadCn",
              "Redux",
              "framer motion",
            ]}
            year="24"
            link="https://cons-corp.vercel.app/"
          />
        </div>
        <div className="w-[30%]">
          {/* Project Card */}
          <ProjectCard
            title="TutoraProf"
            description="A UI/UX study with a landing page for a promising private school in Montreal, Canada. Includes a full presentation and contact form of the parents and potential tutor recruits"
            imageSrc={tutoraProf.src}
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "ShadCn",
              "Figma",
            ]}
            year="24"
            link="https://tutora-prof.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

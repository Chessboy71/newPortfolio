import rapskey from "@/public/rapskey.png";
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
            link="/projects/rapskey"
          />
        </div>
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
            link="/projects/rapskey"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full mt-12 gap-4 justify-center max-w-7xl">
        <div className="w-[30%]">
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
            link="/projects/rapskey"
          />
        </div>
        <div className="w-[30%]">
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
            link="/projects/rapskey"
          />
        </div>
        <div className="w-[30%]">
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
              "Redux",
              "Redux",
            ]}
            year="24"
            link="/projects/rapskey"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

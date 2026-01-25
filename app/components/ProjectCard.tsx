import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  technologies: string[];
  year: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  technologies,
  year,
}) => {
  return (
    <div className="flex-1 h-125 p-6 bg-zinc-900/70 rounded-xl border-white/10 border relative overflow-hidden group cursor-pointer flex flex-col justify-between">
      <div>
        <div className="w-full bg-amber-50 text-white h-3/4 rounded-full rounded-t-none absolute top-0 left-0 blur-3xl z-0 opacity-0 group-hover:opacity-5 transition-all duration-300 delay-100"></div>
        <div className="text-zinc-800 font-black text-5xl opacity-0 group-hover:opacity-100 transition-all duration-700 absolute top-2 right-2">
          {year}'
        </div>
        <Link href={link} className="group flex flex-row gap-2 items-center">
          <h3 className="text-2xl font-black uppercase text-white tracking-tighter ">
            {title}
          </h3>
          <ArrowUpRight className="group-hover:translate-x-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500" />
        </Link>
        <p className="text-white/50 font-darker 2xl:text-xl text-base font-semibold 2xl:leading-5 leading-4 2xl:max-w-[85%] max-w-[95%]">
          {description}
        </p>

        <div className="flex flex-row flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <p
              key={tech}
              className="bg-amber-600 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>

      <Image
        src={imageSrc}
        alt={title}
        width={2000}
        height={2000}
        className="mt-8 rounded-xl w-full object-cover shadow-lg  group-hover:scale-[102%] transition-all duration-500"
      />
    </div>
  );
};

export default ProjectCard;

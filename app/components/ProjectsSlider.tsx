import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import github from "@/public/github.svg";
import TutoraTopPic from "@/public/TutoraTopPic.png";
import TutoraPhonePic from "@/public/TutoraPhonePic.png";
import TutoraLastPic from "@/public/TutoraLastPic.png";
import Image from "next/image";
import IconAnimated from "@/components/ui/iconAnimated";
import liveDemoIcon from "@/public/liveDemoIcon.svg";

const ProjectsSlider = () => {
  return (
    <div className="w-full z-10">
      <div className="w-1/2">
        {/* Top Part */}
        <div className="flex flex-row justify-between items-center mb-6">
          {/* nav */}
          <div className="flex flex-row justify-between w-1/6 [&>button]:cursor-pointer">
            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/20 border-white/20 rounded-full text-white size-12 group p-0 flex items-center justify-center"
            >
              <div className="rounded-full size-4 bg-white group-hover:size-12 flex items-center justify-center transition-all">
                <ChevronLeft className="size-4 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/20 border-white/20 rounded-full text-white size-12 group p-0 flex items-center justify-center"
            >
              <div className="rounded-full size-4 bg-white group-hover:size-12 flex items-center justify-center transition-all">
                <ChevronRight className="size-4 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Button>
          </div>
          <div className="text-2xl text-white font-bold mt-auto">Projects</div>
          {/* Picture */}
        </div>
        <Image
          src={TutoraTopPic}
          alt="projects"
          width={2800}
          height={2800}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
      <div className="mt-12 flex flex-row w-full">
        <div className="w-1/2 flex flex-col justify-center pr-8">
          <div className="text-slate-800 font-black text-8xl max-w-42 leading-20">
            Tutora Prof
          </div>
          <div className="text-gray-500 mt-4 font-darker  text-2xl w-2/3 leading-6 font-medium">
            An innovative platform connecting students with expert tutors for
            personalized learning experiences. Features include scheduling,
            secure payments, and interactive tools to enhance education.
          </div>
          <div className=" flex">
            <IconAnimated icon={github} text="View Source" link="#" />
            <IconAnimated icon={liveDemoIcon} text="View Demo" link="#" />
          </div>
        </div>
        <div className="w-1/2 flex flex-row flex-wrap gap-[1%]">
          <Image
            src={TutoraLastPic}
            alt="projects"
            width={2800}
            height={2800}
            className="w-[65%] rounded-2xl shadow-lg object-cover max-h-[50vh]"
          />
          <Image
            src={TutoraPhonePic}
            alt="projects"
            width={2800}
            height={2800}
            className="w-1/3 rounded-2xl shadow-lg object-cover max-h-[50vh]"
          />
          <div className="w-full flex flex-row justify-between pr-2 mt-6">
            <div className="flex flex-row justify-between w-1/6 [&>button]:cursor-pointer">
              <Button
                variant="outline"
                className="bg-transparent hover:bg-slate-900  rounded-full text-slate-900 size-12 group p-0 flex items-center justify-center"
              >
                <div className="rounded-full size-4 bg-slate-900 group-hover:size-12 flex items-center justify-center transition-all">
                  <ChevronLeft className="size-4 opacity-0 group-hover:opacity-100 transition-all text-white" />
                </div>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-slate-900 rounded-full text-slate-900 size-12 group p-0 flex items-center justify-center"
              >
                <div className="rounded-full size-4 bg-slate-900 group-hover:size-12 flex items-center justify-center transition-all">
                  <ChevronRight className="size-4 opacity-0 group-hover:opacity-100 transition-all text-white" />
                </div>
              </Button>
            </div>
            <div className="text-2xl font-black tracking-tighter flex items-center">
              TutoraProf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;

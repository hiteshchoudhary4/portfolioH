import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start justify-center lg:w-3/5">
            <p className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
              Building Smart &amp; Scalable Web Apps
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Turning Ideas into Real-World Solutions"
              className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Hitesh, a BTech CSE student and Full Stack Developer.
            </p>

            <a href="#projects">
              <MagicButton
                title="View My Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="lg:w-2/5 flex justify-center mt-10 lg:mt-0 relative">
            <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_0_40px_rgba(120,119,198,0.3)] group/image">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img 
                src="/hitesh.jpeg" 
                alt="Hitesh Choudhary" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

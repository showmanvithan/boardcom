"use client";
import Image from "next/image";
import { GrainGradient } from '@paper-design/shaders-react';
import { useState, useEffect } from "react";

import { FaRegFolderOpen } from "react-icons/fa6";
import { MdWorkspacesFilled } from "react-icons/md";

import GlassSurface from '@/components/GlassSurface'
import { Skeleton } from "@/components/ui/skeleton"

import { TypographyH1, TypographyH2, TypographyP, TypographyP2 } from "@/components/typographies/Typography";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiThunderstormsLine } from "react-icons/ri";
import { ImageDithering } from '@paper-design/shaders-react';
import dynamic from "next/dynamic";

import { RiGitRepositoryCommitsFill } from "react-icons/ri";

import SwitchMode from "@/components/theme-toggle/switch-mode";


import { ProgressiveBlur } from "@/components/ui/progressive-blur"

import ProjectCakes from "@/components/sections/projects";

import SectionDivider from "@/components/ui/section-divider";

import ExperienceCake from "@/components/sections/experience";
import { FiActivity } from "react-icons/fi";

import { BsFile } from "react-icons/bs";
import ShowGhActivities from "@/components/sections/show-gh-activites";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import TechStackCake from "@/components/sections/techstack";

import { soraFont } from "@/components/typographies/Typography";

import Noise from "@/components/Noise";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function Home() {

  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  const profileName = "Vignesh Thapanera";
  const navbarprofileName = "vgnsh";
  const profileDescription = "Not a book club. A reading party. Read with friends to live music & curated playlists!"

  return (
    <>
      <SwitchMode />
      <div className="relative">
        <div className="absolute h-full w-full z-10">
          <Noise
            patternSize={500}
            patternScaleX={3.5}
            patternScaleY={3.9}
            patternRefreshInterval={2}
            patternAlpha={25}
          />
        </div>

        <div className=" relative bg-zinc-50 dark:bg-zinc-950 z-11">

          <div className="z-10 absolute left-40 w-2/4 p-5 dark:bg-cyan-300  bg-cyan-300 blur-3xl h-10 dark:opacity-50  overflow-hidden transform rotate-160" />
          <div
            style={{ fontFamily: '"Sora", sans-serif' }}
            className={`left-1 antialiased flex z-10  w-full p-5 md:opacity-30 opacity-0 text-zinc-800 dark:text-emerald-100 items-center gap-1 fixed`}>

            <RiThunderstormsLine size={30} />
            <TypographyH2>{navbarprofileName}</TypographyH2>
          </div>

          <div className=" flex flex-col items-center bg-zinc-50 dark:bg-zinc-950 font-sans text-white  md:pt-30 pt-0 h-screen">


            <div className=" md:w-3/4  w-full pb-20">
              <div className="relative bg-zinc-300 dark:bg-zinc-700 w-full md:h-60 h-30 md:rounded-3xl rounded-none">

                <div className="absolute inset-0 w-full h-full overflow-hidden md:rounded-3xl rounded-none z-10 ">

                  <ImageDithering
                    width={1920}
                    height={1080}
                    image="/twb_fire_tower_cover_art.webp"
                    colorBack="#000c38"
                    colorFront="#94ffaf"
                    colorHighlight="#eaff94"
                    originalColors={false}
                    inverted={false}
                    type="8x8"
                    size={2}
                    colorSteps={2}
                    fit="cover"

                  />
                </div>
                <div className="absolute -bottom-12.5 md:left-9 left-4 bg-amber-400 md:p-15 p-10 md:rounded-2xl rounded-2xl border-4 border-zinc-50 dark:border-none bg-[url('/pp.jpeg')] bg-cover bg-center z-20" />

              </div>
              <div className="md:pt-20 pt-15" />

              <div className="flex md:flex-row flex-col w-full text-left  md:pl-10 md:pr-10 pl-5 pr-5 justify-center gap-5">
                <div className="flex-1 dark:text-zinc-50 text-zinc-950">
                  <TypographyH1>{profileName}</TypographyH1>
                  <div className="p-1.5" />
                  <div className="border-dashed border-t border-zinc-300 dark:border-zinc-800" />
                  <div className="p-1.5" />

                  <div className="text-zinc-500 dark:text-zinc-400 flex flex-1">
                    <TypographyP>{profileDescription}</TypographyP>
                  </div>

                </div>
                <div className="flex flex-1 justify-end items-center ">
                  <div className="dark:bg-zinc-900 flex  items-center gap-1 p-1 rounded-lg border dark:border-zinc-700 text-zinc-800 dark:text-zinc-50 bg-zinc-100 z-200">


                    <Tooltip>
                      <TooltipTrigger>
                        <FaInstagram size={23} />
                      </TooltipTrigger>
                      <TooltipContent align="end" side="top" avoidCollisions sideOffset={8}>
                        Instagram / @vit4ahn
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <BsTwitterX size={20} />
                      </TooltipTrigger>
                      <TooltipContent align="center" side="top" avoidCollisions sideOffset={8}>
                        X.com / @vgnshx
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <FaGithub size={22} />
                      </TooltipTrigger>
                      <TooltipContent align="start" side="top" sticky="partial" avoidCollisions sideOffset={8}>
                        Github / @vignexshh
                      </TooltipContent>
                    </Tooltip>





                  </div>



                </div>



              </div>
              <div className="p-3" />
              <div className="relative dark:text-zinc-50 text-zinc-500 flex md:flex-row flex-col border dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2 ml-2.5 mr-2.5 ">
                {show && <>
                  <div className="w-full h-full dark:bg-zinc-950 bg-zinc-400 absolute z-200 rounded-3xl" />
                  <Skeleton className="h-full w-full rounded-3xl absolute z-200" />
                </>

                }



                <ShowGhActivities />
                <div className=" lg:w-120 dark:bg-zinc-950 bg-zinc-50 flex items-end justify-end p-5 rounded-3xl border dark:border-0">
                  <GitHubCalendar
                    username="ascorbic"
                    blockSize={10}
                    blockMargin={2}
                    fontSize={12}
                  />

                </div>
              </div>


              <div className="p-3" />
              <SectionDivider title="PROJECTS" icon={FaRegFolderOpen} />

              <div className="p-1" />
              <div className="relative w-full">
                <div className="absolute left h-full p-5 bg-linear-90 dark:from-transparent from-zinc-50 to-transparent dark:w-0 w-20 z-50" />
                <div className="absolute right-0 h-full p-5 bg-gradient-to-l dark:from-transparent from-zinc-50 to-transparent dark:w-0 w-20 z-50" />
                <ProjectCakes />
              </div>



              <div className="p-3" />
              <SectionDivider title="EXPERIENCE" icon={MdWorkspacesFilled} />
              <div className="p-3" />
              <ExperienceCake />
              <div className="p-3" />
              <SectionDivider title="TECH STACK" icon={MdWorkspacesFilled} />
              <div className="p-3" />


              <div className="p-3" />







            </div>


          </div>
        </div>
      </div>
    </>
  );
}

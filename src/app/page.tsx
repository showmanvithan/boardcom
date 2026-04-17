"use client";
import Image from "next/image";
import { GrainGradient } from '@paper-design/shaders-react';
import { useState, useEffect } from "react";



import { TypographyH1, TypographyH2 } from "@/components/typographies/Typography";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiThunderstormsLine } from "react-icons/ri";
import { ImageDithering } from '@paper-design/shaders-react';
import dynamic from "next/dynamic";

import { TypographyP } from "@/components/typographies/Typography";

import SwitchMode from "@/components/theme-toggle/switch-mode";

import { motion } from "framer-motion";


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function Home() {


  const profileName = "Vignesh Thapanera";
  const navbarprofileName = "vgnsh.org";
  const profileDescription = "Not a book club. A reading party. Read with friends to live music & curated playlists!"

  return (
    <>

      <SwitchMode />

      <div className="z-10 absolute w-full p-5 bg-cyan-300 blur-3xl h-10 opacity-50 overflow-hidden" />
      <div
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        className={`left-3 antialiased flex z-10 absolute w-full p-5 md:opacity-30 opacity-0 text-zinc-800 dark:text-emerald-100 items-center gap-1 font-`}>
        <RiThunderstormsLine size={30} />
        <TypographyH2>{navbarprofileName}</TypographyH2>
      </div>
      <div className="flex flex-col items-center bg-zinc-50 dark:bg-zinc-950 font-sans text-white  md:pt-30 pt-0 h-screen">


        <div className=" md:w-3/4  w-full md:h-60">
          <div className="relative bg-zinc-300 dark:bg-zinc-700 w-full md:h-60 h-30 md:rounded-3xl rounded-none ">
            <div className="absolute inset-0 w-full h-full overflow-hidden md:rounded-3xl rounded-none bg-[url('/twb_fire_tower_cover_art.webp')] bg-cover bg-center">
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
            <div className="absolute -bottom-12.5 md:left-9 left-4 bg-amber-400 md:p-15 p-10 md:rounded-2xl rounded-2xl border-4 border-zinc-50 dark:border-zinc-950  bg-[url('/pp.jpeg')] bg-cover bg-center" />

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
              <div className="bg-zinc-900 flex  items-center gap-1 p-2 rounded-xl border border-zinc-700">


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
          <div className="dark:text-zinc-50 text-zinc-500 flex md:flex-row flex-col border-0 dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2 ml-2.5 mr-2.5">
            <div className="flex flex-1 m-5 ml-6">
              namaste
            </div>
            <div className="lg:w-120 overflow-scroll dark:bg-zinc-950 bg-zinc-50 flex items-end justify-end p-5 rounded-3xl border dark:border-0">
              <GitHubCalendar
                username="ascorbic"
                blockSize={7}
                blockMargin={2}
                fontSize={8}
              />

            </div>
          </div>
        </div>


      </div>
    </>
  );
}

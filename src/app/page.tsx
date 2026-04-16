"use client";
import Image from "next/image";
import { GrainGradient } from '@paper-design/shaders-react';
import { useState, useEffect } from "react";

import { TypographyH1, TypographyH2 } from "@/components/typographies/Typography";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiThunderstormsLine } from "react-icons/ri";

import { TypographyP } from "@/components/typographies/Typography";

export default function Home() {


  const profileName = "Vignesh Thapanera";
  const navbarprofileName = "vgnsh.org";

  return (
    <>
      <div className="z-10 absolute w-full p-5 bg-cyan-300 blur-3xl h-10 opacity-50" />
      <div className={`left-3 antialiased flex z-10 absolute w-full p-5 md:opacity-50 opacity-0 text-zinc-500 dark:text-zinc-400 items-center gap-1`}>
<RiThunderstormsLine size={30}/>
        <TypographyH2>{navbarprofileName}</TypographyH2>
      </div>
      <div className="flex flex-col items-center bg-zinc-50 dark:bg-zinc-950 font-sans text-white  md:pt-30 pt-0 h-screen">


        <div className=" md:w-3/4  w-full md:h-60">
          <div className="relative bg-zinc-300 dark:bg-zinc-700 w-full md:h-60 h-30 md:rounded-3xl rounded-none ">
            <div className="absolute inset-0 w-full h-full overflow-hidden md:rounded-3xl rounded-none">
              <GrainGradient
                width={5000}
                height={500}
                colors={["#00f9ff", "#00c1ff", "#00bfff", "#2b00ff"]}
                colorBack="#000000"
                softness={0.36}
                intensity={0.55}
                noise={0.25}
                shape="wave"
                speed={1}
                scale={1.44}
              />
            </div>
            <div className="absolute -bottom-12.5 md:left-9 left-4 bg-amber-400 md:p-15 p-10 md:rounded-2xl rounded-2xl border-4 border-zinc-50 dark:border-zinc-950  bg-[url('/pp.jpeg')] bg-cover bg-center" />

          </div>
          <div className="md:pt-20 pt-15" />

          <div className="flex md:flex-row flex-col w-full text-left  md:pl-10 md:pr-10 pl-5 pr-5 justify-center">
            <div className="flex-1 dark:text-zinc-50 text-zinc-950">
              <TypographyH1>{profileName}</TypographyH1>
              <div className="pt-3"/>
              <div className="text-zinc-500 dark:text-zinc-400 "> 
              <TypographyP>Not a book club. A reading party.
                Read with friends to live music & curated playlists!</TypographyP>
                </div>
            </div>
            <div className="flex flex-1 justify-end items-center gap-1 ">
              <div className="bg-zinc-900 flex  items-center gap-1 p-2 rounded-xl border border-zinc-700">
                <FaInstagram size={23} />
                <BsTwitterX size={20} />
                <FaGithub size={22} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}

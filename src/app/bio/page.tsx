"use client";
import StickyNavbar from "@/components/sections/sticky-navbar";

import HeaderCake from "@/components/sections/header";
import Noise from "@/components/Noise";

import NameHeaderCake from "@/components/sections/name-header";
import ShowGhActivities from "@/components/sections/show-gh-activites";

import { TypographyBaseText } from "@/components/typographies/Typography";
import SocialCake from "@/components/sections/social-profiles";
import BrandsCake from "@/components/sections/brands";

import GradualBlur from "@/components/GradualBlur";

import dynamic from "next/dynamic"

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function Bio() {
    const navbarprofileName: string = "vgnsh";
    return (
        <div className=" bg-white dark:bg-black h-screen flex justify-evenly overflow-x-hidden">

            <div className=" flex flex-col gap-5 md:border-l md:border-r border-0 border-dashed bg-zinc-50 dark:bg-zinc-950 md:w-200 w-full p-5 border-zinc-800 overflow-scroll">
                <Noise
                    patternSize={1}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={1}
                    patternAlpha={15}
                />
                <StickyNavbar name="vgnsh" />
                <HeaderCake
                    headerBgPath="image.png"
                    headerProfilePath="shipyard-anime-bg-webp.webp"
                />
                <NameHeaderCake
                    firstName="vignesh"
                    secondName="thapanera"
                />
                <div className="md:hidden visible">
                    <SocialCake />
                </div>



                <div className="flex flex-col dark:bg-black bg-white ">
                    <ShowGhActivities />
                    <div className="flex items-center justify-center p-5 bg-green-50 dark:bg-green-950/20 border border-dashed border-green-600 border-t-0">
                        <GitHubCalendar
                            username="ascorbic"
                            blockSize={15}
                            blockMargin={2}
                            fontSize={12}
                        />

                    </div>


                </div>

                <BrandsCake />

                <div className="p-10"/>


                <GradualBlur
                    target="parent"
                    position="bottom"
                    height="3rem"
                    strength={1}
                    divCount={10}
                    curve="bezier"
                    exponential
                    opacity={1}
                />




            </div>

        </div>
    )
}
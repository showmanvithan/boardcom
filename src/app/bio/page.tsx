"use client";
import StickyNavbar from "@/components/sections/sticky-navbar";

import HeaderCake from "@/components/sections/header";
import Noise from "@/components/Noise";

import NameHeaderCake from "@/components/sections/name-header";
import ShowGhActivities from "@/components/sections/show-gh-activites";
import { GitHubCalendar } from "react-github-calendar";
import { TypographyBaseText } from "@/components/typographies/Typography";
import SocialCake from "@/components/sections/social-profiles";
import BrandsCake from "@/components/sections/brands";

export default function Bio() {
    const navbarprofileName: string = "vgnsh";
    return (
        <div className=" bg-zinc-100 dark:bg-black h-screen flex justify-evenly">

            <div className=" flex flex-col gap-5 md:border-l md:border-r border-0 border-dashed bg-zinc-50 dark:bg-zinc-900 md:w-200 w-full p-5 border-zinc-800 overflow-scroll">
                <Noise
                    patternSize={1}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={1}
                    patternAlpha={15}
                />
                <StickyNavbar name="vgnsh" />
                <HeaderCake
                    headerBgPath="./pp.jpeg"
                    headerProfilePath="/shipyard-anime-bg-webp.webp"
                />
                <NameHeaderCake
                    firstName="vignesh"
                    secondName="thapanera"
                />
                <div className="md:hidden visible">
                <SocialCake/>
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

                <BrandsCake/>
                



            </div>

        </div>
    )
}
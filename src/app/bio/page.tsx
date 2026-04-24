"use client";
import StickyNavbar from "@/components/sections/sticky-navbar";

import HeaderCake from "@/components/sections/header";
import Noise from "@/components/Noise";

import NameHeaderCake from "@/components/sections/name-header";
import ShowGhActivities from "@/components/sections/show-gh-activites";

export default function Bio() {
    const navbarprofileName: string = "vgnsh";
    return (
        <div className="bg-zinc-50 dark:bg-black h-screen flex justify-evenly">

            <div className="flex flex-col gap-5 relative border-l border-r border-dashed bg-zinc-200 dark:bg-zinc-900 md:w-200 w-full p-5 border-zinc-800 overflow-hidden">
                <Noise
                    patternSize={1}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={1}
                    patternAlpha={15}
                />
                <StickyNavbar />
                <HeaderCake
                    headerBgPath="./pp.jpeg"
                    headerProfilePath="/shipyard-anime-bg-webp.webp"
                />
                <NameHeaderCake
                    firstName="vignesh"
                    secondName="thapanera"
                />

                <div className="dark:bg-black bg-white ">
                    <ShowGhActivities/>

                </div>



            </div>

        </div>
    )
}
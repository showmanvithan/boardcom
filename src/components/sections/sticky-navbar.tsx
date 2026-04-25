"use client";

import { TypographyH2 } from "@/components/typographies/Typography";
import Image from "next/image";

import SwitchMode from "@/components/theme-toggle/switch-mode";

type NavBarProfileNameProps = {
    name: string;
}
export default function StickyNavbar({name} : NavBarProfileNameProps) {
    return (
                <div className="sticky top-0 left-0 w-full  border border-dashed bg-zinc-200 dark:bg-black/80 flex pl-5 border-zinc-800 dark:border-zinc-500 backdrop-blur z-1000">
                    <div className="flex items-center flex-1 justify-start">
                        <div className="flex items-center justify-center gap-1">
                            <Image src="/bug-game.png" alt="vignesh nav bar icon" width={25} height={25} className="dark:invert" />
                            <TypographyH2>{name}</TypographyH2>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center -mb-1.5">
                        <SwitchMode />
                    </div>

                </div>
    )
}
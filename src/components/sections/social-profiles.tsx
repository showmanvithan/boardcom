"use client";

import { TypographyBaseText } from "@/components/typographies/Typography";
import { GeistPixelCircle } from "geist/font/pixel";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function SocialCake() {
    return (
        <div className="dark:bg-black bg-white p-0 border border-dashed border-zinc-600 flex flex-row">
            <div className="flex flex-1 items-center justify-start pl-5"> 

            <TypographyBaseText>{`SOCIALS >`}</TypographyBaseText>

            </div>

            <div className="flex flex-1  items-center gap-1 p-1  text-zinc-800 dark:text-zinc-50 z-200 justify-end">
                <Tooltip>
                    <TooltipTrigger>
                        <FaInstagram size={30} />
                    </TooltipTrigger>
                    <TooltipContent align="end" side="top" avoidCollisions sideOffset={8} className="rounded-none">
                        Instagram / @vit4ahn
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <BsTwitterX size={25} />
                    </TooltipTrigger>
                    <TooltipContent align="center" side="top" avoidCollisions sideOffset={8} className="rounded-none">
                        X.com / @vgnshx
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <FaGithub size={28} />
                    </TooltipTrigger>
                    <TooltipContent align="start" side="top" sticky="partial" avoidCollisions sideOffset={8} className="rounded-none">
                        Github / @vignexshh
                    </TooltipContent>
                </Tooltip>





            </div>

        </div>
    )
}
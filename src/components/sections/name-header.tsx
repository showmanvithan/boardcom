
import { TypographyH1 } from "@/components/typographies/Typography";
import { GeistPixelCircle } from "geist/font/pixel";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

type NameFieldsProps = {
    firstName: string;
    secondName?: string;
}

export default function NameHeaderCake({firstName, secondName }: NameFieldsProps){
    return(
        <div className="flex flex-row border border-dashed border-zinc-600 pl-3 items-center bg-zinc-200 dark:bg-zinc-950">
                    <div className="flex flex-1 flex-col pb-2 pt-1 pl-1">
                        <TypographyH1>{firstName}</TypographyH1>
                        <TypographyH1 className={GeistPixelCircle.className} >{secondName}</TypographyH1>
                    </div>
                    <div className="flex flex-1 flex-col  h-full w-full items-end">

                        <div className="flex flex-1 items-end">
                            <div className= "flex  items-center gap-1 p-1 border border-dashed border-l border-t border-b-0 border-r-0  border-zinc-600 text-zinc-800 dark:text-zinc-50 z-200">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <FaInstagram size={35} />
                                    </TooltipTrigger>
                                    <TooltipContent align="end" side="top" avoidCollisions sideOffset={8} className="rounded-none">
                                        Instagram / @vit4ahn
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger>
                                        <BsTwitterX size={30} />
                                    </TooltipTrigger>
                                    <TooltipContent align="center" side="top" avoidCollisions sideOffset={8}  className="rounded-none">
                                        X.com / @vgnshx
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger>
                                        <FaGithub size={32} />
                                    </TooltipTrigger>
                                    <TooltipContent align="start" side="top" sticky="partial" avoidCollisions sideOffset={8}  className="rounded-none">
                                        Github / @vignexshh
                                    </TooltipContent>
                                </Tooltip>





                            </div>



                        </div>


                    </div>



                </div>
    )
}
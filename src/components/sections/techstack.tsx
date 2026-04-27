"use client";
import { GiNestedHexagons } from "react-icons/gi";
import { TypographyBaseText } from "../typographies/Typography";
import { IconType } from "react-icons";
import { RiNextjsFill } from "react-icons/ri";
type TechStackVariables = {
    label: string;
    icon: IconType;
};

export default function TechStackCake() {

    const items: TechStackVariables[] = [
        { label: "nextJS", icon: RiNextjsFill },
        { label: "nesxtJS", icon: RiNextjsFill },
        { label: "nedtJS", icon: RiNextjsFill },
        { label: "next2JS", icon: RiNextjsFill },
        { label: "next4JS", icon: RiNextjsFill },
        { label: "ne2xtJS", icon: RiNextjsFill },
        { label: "next7JS", icon: RiNextjsFill },
        { label: "next0JS", icon: RiNextjsFill },
        { label: "ne6xtsJS", icon: RiNextjsFill },
        { label: "nextJvS", icon: RiNextjsFill },

    ];

    return (
        <div className="border border-dashed border-zinc-600 flex flex-col">
            <div className="flex flex-1 items-center justify-start pl-3 pt-3 pb-3">
                <div className="text-blue-700 dark:text-blue-500 flex flex-row items-center justify-between border-dashed border border-blue-600 dark:border-blue-500 dark:bg-blue-500/10 rounded-full p-1 pr-2 gap-1 bg-blue-600/10">
                    <GiNestedHexagons />
                    <TypographyBaseText className="text-xs">TECH STACK</TypographyBaseText>
                </div>


            </div>

            <div className="flex flex-wrap flex-4 p-2 border-t border-dashed border-zinc-600 gap-1">
                {items.map(({ label, icon: Icon }) => (
                    <div key={label} className="text-zinc-700 dark:text-zinc-300 flex flex-row items-center justify-center border-dashed border border-zinc-600 dark:border-zinc-500 dark:bg-black p-3 pr-4 gap-1 bg-white">
                        <Icon />
                        <TypographyBaseText className="text-xs">{label}</TypographyBaseText>
                    </div>

                )
                )}

            </div>

        </div>
    )
}
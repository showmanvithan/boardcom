"use client";
import { GiNestedHexagons } from "react-icons/gi";
import { TypographyBaseText } from "../typographies/Typography";
import { IconType } from "react-icons";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoFlask } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiVitepress } from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { FaRust } from "react-icons/fa";

import { DiMysql } from "react-icons/di";

import { BiLogoPostgresql } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";




type TechStackVariables = {
    label?: string;
    icon: IconType;
};

export default function TechStackCake() {

    const items: TechStackVariables[] = [
        { label: "Flask", icon: BiLogoFlask },
        { label: "FastAPI", icon: SiFastapi },
        { label: "ExpressJS", icon: SiExpress },
        { label: "PyTorch", icon: SiPytorch },
        { label: "Tensorflow", icon: SiTensorflow },
        { label: "Pandas", icon: SiPandas },
        { label: "Numpy", icon: SiNumpy },
        { label: "ReactJS", icon: SiReact },
        { label: "NextJS", icon: RiNextjsFill },
        { label: "Vite", icon: SiVitepress },
        { label: "", icon: TbBrandCpp },
        { label: "Rust", icon: FaRust },
        { label: "MySQL", icon: DiMysql },
        { label: "PostgreSQL", icon: BiLogoPostgresql },
        { label: "Docker", icon: SiDocker },
        { label: "AWS", icon: FaAws },

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
                    <div key={label} className="text-zinc-700 dark:text-zinc-300 flex flex-row items-center justify-center border-dashed border border-zinc-600 dark:border-zinc-500 dark:bg-black p-3 pr-3 gap-1 bg-white">
                        <Icon />
                        <TypographyBaseText className="text-xs">{label}</TypographyBaseText>
                    </div>

                )
                )}

            </div>

        </div>
    )
}
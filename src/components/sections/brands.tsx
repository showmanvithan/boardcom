"use client";
import LogoLoop from "../LogoLoop";
import { TypographyBaseText } from "../typographies/Typography";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";


type TechStackVariables = {
    name: string;
    icon: Icon;
}

export default function BrandsCake() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];
    return (

        <div className="flex md:flex-row flex-col border border-dashed border-zinc-600 dark:bg-zinc-950 bg-white z-100 ">
            <div className="flex flex-1 pt-2 pl-3 pb-2 pr-3">
                <TypographyBaseText className={`text-xl text-zinc-600 dark:text-zinc-50 ${GeistPixelSquare.className}`}>BRANDS I WORKED AS A MARKETER</TypographyBaseText>

            </div>
            <div className="relative flex flex-2 md:border-l md:border-t-0 border-t border-dashed border-zinc-600 overflow-hidden items-center justify-center pt-2 text-zinc-600 dark:text-zinc-200">
                <LogoLoop
                    logos={techLogos}
                    speed={30}
                    direction="left"
                    logoHeight={50}
                    gap={30}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                    className=""
                />

                <div className="dark:bg-[linear-gradient(to_right,#000000,#000000E6,#000000BF,#00000000)] bg-[linear-gradient(to_right,#ffffff,#ffffffE6,#ffffffBF,#ffffff00)] absolute left-0 p-25"/>

            </div>

        </div>

    );
}
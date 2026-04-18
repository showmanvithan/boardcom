"use client";
import { TypographyH2, TypographyP2, TypographyH4 } from "../typographies/Typography";
import { FaGithub } from "react-icons/fa";
import { Marquee } from "../ui/marquee";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { repos } from "./repoUrls";

import Image from "next/image";

export default function ProjectCakes() {
    const ghRepoDesc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed amet ea quaerat labore beatae quas voluptate, quis doloribus incidunt dolor consectetur molestiae quibusdam quae, illum tempore! Maiores vero iste ullam.";
    const items = repos;
    return (

        <div className="relative flex md:flex-row flex-row gap-4 rounded-2xl overflow-hidden bg-zinc-900 dark:bg-zinc-950 pt-3 pb-3 ">

            <Marquee pauseOnHover className="[--duration:20s]">
                {items.map((item,index) =>
                (
                    <div key={index} className="dark:text-zinc-50 text-zinc-900 flex md:flex-col overflow-hidden flex-col border dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2  w-70">
                        <div className="flex flex-1  md:p-7 p-4 text-left flex-col text-xs gap-5 justify-around">
                            <div className="flex flex-row items-center gap-2">
                                <FaGithub size={25} />
                                <TypographyH4>{item.name}</TypographyH4>
                            </div>
                            <p className="text-left text-zinc-500 dark:text-zinc-400 max-w-120">{item.description}</p>
                        </div>
                        <div className={`flex flex-1 bg-cover bg-center`}>
                            <img src={item.imageUrl} alt="repo opengraph image" />


                        </div>
                    </div>

                ))}



{/* 

                <div className="dark:text-zinc-50 text-zinc-900 flex md:flex-col overflow-hidden flex-col border dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2  w-70">
                    <div className="flex flex-1  md:p-7 p-4  text-left flex-col text-xs gap-5 justify-around">
                        <div className="flex flex-row items-center gap-2">
                            <FaGithub size={25} />
                            <TypographyH4>vgnsh/project_name</TypographyH4>
                        </div>
                        <p className="text-left text-zinc-500 dark:text-zinc-400 max-w-120">{ghRepoDesc}</p>
                    </div>
                    <div className={`flex flex-1 bg-cover bg-center`}>
                        <img src="https://opengraph.githubassets.com/1/vignexshh/folio" alt="repo opengraph image" />


                    </div>
                </div>

                <div className="dark:text-zinc-50 text-zinc-900 flex md:flex-col overflow-hidden flex-col border dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2 w-70">
                    <div className="flex flex-1  md:p-7 p-4  text-left flex-col text-xs gap-5 justify-around">
                        <div className="flex flex-row items-center gap-2">
                            <FaGithub size={25} />
                            <TypographyH4>vgnsh/project_name</TypographyH4>
                        </div>
                        <p className="text-left text-zinc-500 dark:text-zinc-400 max-w-120">{ghRepoDesc}</p>
                    </div>
                    <div className={`flex flex-1 bg-cover bg-center`}>
                        <img src="https://opengraph.githubassets.com/1/vignexshh/folio" alt="repo opengraph image" />


                    </div>
                </div> */}

            </Marquee>

        </div>
    );
}
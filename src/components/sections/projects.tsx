"use client";
import { TypographyH2, TypographyP2 } from "../typographies/Typography";
import { FaGithub } from "react-icons/fa";


import Image from "next/image";

export default function ProjectCakes() {
  
    return (

        <div className="dark:text-zinc-50 text-zinc-900 flex md:flex-row overflow-hidden flex-col border dark:border-zinc-800  dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2 ml-2.5 mr-2.5 ">
            <div className="flex flex-6 border p-5 text-left flex-col text-xs gap-2">
                <div className="flex flex-row items-center gap-2">
                    <FaGithub size={25} />
                    <TypographyH2>vgnsh/project_name</TypographyH2>
                </div>
                <p className="text-justify text-zinc-500 dark:text-zinc-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nesciunt dolor hic tenetur eius ullam quam esse earum! Nihil, non alias fuga repellendus voluptate eius esse aspernatur. Enim esse adipisci quisquam inventore sint hic possimus voluptate aliquid. Enim quae maiores vitae quisquam pariatur cumque placeat labore, at necessitatibus quam.</p>
            </div>
            <div className={`flex flex-4 border bg-[url("https://opengraph.githubassets.com/1/vignexshh/folio")] bg-cover bg-center w-1200 h-50`}>

                {/* <Image
                    src="https://opengraph.githubassets.com/1/vignexshh/folio"
                    alt="GitHub repo preview"
                    width={1200}
                    height={630}
                /> */}
            </div>
        </div>
    );
}
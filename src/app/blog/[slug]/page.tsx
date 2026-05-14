import StickyNavbar from "@/components/sections/sticky-navbar";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/mdx";
import Image from "next/image";

import { MdTopic } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";

import {
  GeistPixelSquare,
  // GeistPixelGrid,
  // GeistPixelCircle,
  // GeistPixelTriangle,
  // GeistPixelLine,
} from "geist/font/pixel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MdxData {
  title: string
  description: string
  image: string
  date?: string
  topic?: string
  author?: string
  author_avatar?: string

}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let imported;
  try {
    imported = await import(`@/markdown/${slug}.mdx`)
  } catch {
    notFound()
  }

  const Post = imported!.default
  const mdxdata: MdxData = imported!.mdxdata

  return (
    <div className="bg-zinc-50 dark:bg-black h-screen flex justify-evenly overflow-x-hidden">
      <div className="flex flex-col  md:border-l md:border-r border-0 border-dashed md:w-200 w-full border-zinc-800 overflow-scroll no-scroll">
        <StickyNavbar name={`vgnsh/blog/${slug}`} />

        <div className="relative w-full min-h-40  border border-dashed border-zinc-600">
          <Image src={mdxdata.image} alt={mdxdata.title} loading={`eager`} fill className="object-cover" />
        </div>
        <div className="pl-5 pr-5 pt-5 pb-20">
          <div className="flex flex-col gap-2">
            <h1 className={`${GeistPixelSquare.className} text-4xl sm:text-6xl font-black`} >
              {mdxdata.title}
            </h1>
            <div className="p-1" />

            <div className="flex flex-row gap-2 items-center">
              <div className="border border-zinc-700 border-dashed p-1 pl-2  pr-3 rounded-full w-auto">
                <div className="flex flex-row gap-1 items-center dark:text-zinc-400 text-zinc-700">
                  <MdDateRange />
                  <p className="text-sm ">{mdxdata.date}</p>
                </div>
              </div>

              {mdxdata.topic ? (<div className="flex items-center border border-zinc-700 border-dashed p-1 pl-2 pr-3 rounded-full w-auto">
                <div className="flex flex-row gap-1 items-center dark:text-zinc-400 text-zinc-700">
                  <MdTopic />
                  <p className="text-sm">{mdxdata.topic}</p>
                </div>
              </div>) : null}

              {mdxdata.author ? (<div className="border border-zinc-700 border-dashed p-1 pl-1 pr-3 rounded-full w-auto">
                <div className="flex flex-row gap-1 items-center dark:text-zinc-400 text-zinc-700">
                  <Avatar size="sm">
                    <AvatarImage src={mdxdata.author_avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-sm">{mdxdata.author}</p>
                </div>
              </div>) : null}

            </div>

            <div className="p-2 border border-dashed rounded-2xl border-zinc-700 w-fit ">
              <div className={`${GeistPixelSquare.className} text-zinc-700 dark:text-zinc-400 flex flex-col items-left gap-2`}>
                <div className="flex flex-row  items-center border border-dashed border-pink-500 text-pink-700 dark:text-pink-500 pl-1 pr-2 rounded-md bg-pink-600/10 dark:bg-pink-600/30 w-fit"><AiFillThunderbolt /> TLDR</div>
                {mdxdata.description}
              </div>
            </div>
          </div>
          <div className="p-3" />
          <Post />
        </div>
      </div>
    </div>
  )
}

export const dynamicParams = true
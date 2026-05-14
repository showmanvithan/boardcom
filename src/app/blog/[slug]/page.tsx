import StickyNavbar from "@/components/sections/sticky-navbar";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/mdx";
import Image from "next/image";


import { MdDateRange } from "react-icons/md";
// import { mdxdata } from "@/markdown/welcome.mdx";

import {
  GeistPixelSquare,
  // GeistPixelGrid,
  // GeistPixelCircle,
  // GeistPixelTriangle,
  // GeistPixelLine,
} from "geist/font/pixel";

interface MdxData {
  title: string
  description: string
  image: string
  date: string
  topic: string
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
      <div className="flex flex-col gap-3 md:border-l md:border-r border-0 border-dashed md:w-200 w-full border-zinc-800 overflow-scroll no-scroll">
        <StickyNavbar name={`vgnsh/blog/${slug}`} />

        <div className="relative w-full min-h-40  border border-dashed border-zinc-600 p-1">
          <Image src={mdxdata.image} alt={mdxdata.title} loading={`eager`} fill className="object-cover" />
        </div>
        <div className="pl-5 pr-5 pt-2 pb-20">
          <div className="flex flex-col gap-2">
            <h1 className={`${GeistPixelSquare.className} text-4xl sm:text-6xl font-black`} >
              {mdxdata.title}
            </h1>
            <div className="p-1" />
            <div className="flex flex-row gap-2">
              <div className="border border-zinc-600 border-dashed p-1 pl-2 rounded-full w-30">
                <div className="flex flex-row gap-1 items-center dark:text-zinc-400 text-zinc-700">
                  <MdDateRange />
                  <p className="text-sm ">{mdxdata.date}</p>
                </div>
              </div>
              {mdxdata.topic ? (<div className="border border-zinc-600 border-dashed p-1 pl-2 rounded-full w-30">
                <div className="flex flex-row gap-1 items-center dark:text-zinc-400 text-zinc-700">
                  <MdDateRange />
                  <p className="text-sm">{mdxdata.topic}</p>
                </div>
              </div>) : null }
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
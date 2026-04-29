import StickyNavbar from "@/components/sections/sticky-navbar";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/mdx";
import Image from "next/image";

import MDXContent, { mdxdata } from '@/markdown/welcome.mdx'


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let Post;
  try {
    const imported = await import(`@/markdown/${slug}.mdx`)
    Post = imported.default
  } catch {
    notFound()
  }

  return (
    <div className="bg-zinc-50 dark:bg-black h-screen flex justify-evenly overflow-x-hidden">
      <div className="flex flex-col gap-3 md:border-l md:border-r border-0 border-dashed md:w-200 w-full border-zinc-800 overflow-scroll no-scroll">
        <StickyNavbar name={`vgnsh/blog/${slug}`} />

        <div className="relative w-full min-h-40  border border-dashed border-zinc-600 p-1">
          <Image src={mdxdata.image} alt={mdxdata.title} fill className="object-cover" />
        </div>

        <div className="pl-10 pr-10 pt-5 pb-20">
          <Post />
        </div>




      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Instrument_Serif, Inter_Tight, Stack_Sans_Text, Stack_Sans_Headline } from 'next/font/google';


export const Ins_Serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const Stack_Sans_Text_Font = Stack_Sans_Text({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const Stack_Sans_Headline_Font = Stack_Sans_Headline({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const mdxComponents = {
  h1: ({ children }) => (
    <h1 className={`${Stack_Sans_Headline_Font.className} text-5xl dark:text-zinc-50 text-zinc-950 font-bold mb-5 border-t border-b border-dashed border-zinc-600 pb-2 pt-2`}>{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className={`${Stack_Sans_Headline_Font.className} text-4xl dark:text-zinc-50 text-zinc-950 font-semibold border-t border-b border-dashed border-zinc-600 pt-1 pb-1 mt-2 mb-5`}>{children}</h2>
  ),

  p: ({ children }) => (
    <p className={`${Stack_Sans_Text_Font.className} font-light leading-tight text-md pb-2 mb-5`}>{children}</p>

  ),

  code: ({ children }) => (
    <code className={`p-2 bg-zinc-900  border border-dashed border-zinc-600`}>{children}</code>

  ),

  img: (props) => (
    <span className="relative block w-full h-[500px] mt-5 mb-5">
      <Image
        src={props.src!}
        alt={props.alt ?? ''}
        fill
        className="object-cover"
        priority
      />
      <span className="absolute -bottom-10 border border-dashed border-zinc-600 left-0 w-full text-center text-sm text-white bg-white/40 dark:bg-black/40 py-1 px-2 backdrop-blur-xl">
        {props.alt}
      </span>
    </span>
  ),
} satisfies MDXComponents

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, ...mdxComponents }  // merge incoming with yours, yours wins
}
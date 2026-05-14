
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import {
  Instrument_Serif,
  Stack_Sans_Text,
  Stack_Sans_Headline,
  IBM_Plex_Mono
} from 'next/font/google'
import { CopyButton } from '@/components/CopyButton';
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";
// ─── Fonts ────────────────────────────────────────────────────────────────────
import { Button } from '@/components/ui/button';

interface PreProps {
  children: React.ReactNode;
}

export const Ins_Serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const Stack_Sans_Text_Font = Stack_Sans_Text({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-stack-sans-text',
  display: 'swap',
})

export const Stack_Sans_Headline_Font = Stack_Sans_Headline({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-stack-sans-headline',
  display: 'swap',
})
export const IBM_Plex_Mono_Font_Local = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

// ─── Components ───────────────────────────────────────────────────────────────

const mdxComponents = {

  // H1 — page-level title. Full bleed, loud, anchoring.
  h1: ({ children }) => (
    <h1
      className={`
        ${GeistPixelSquare.className}
        text-4xl sm:text-6xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5
      `}
    >
      {children}
    </h1>
  ),

  // H2 — section dividers. Slightly softer, still structural.
  h2: ({ children }) => (
    <h2
     className={`
        ${GeistPixelSquare.className}
        text-3xl sm:text-5xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5
      `}
      
    >
      {children}
    </h2>
  ),

  // H3 — subsections. Serif for contrast against the headline font.
  h3: ({ children }) => (
    <h3
      className={`
        ${GeistPixelSquare.className}
        text-2xl sm:text-4xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5
      `}
    >
      {children}
    </h3>
  ),

  // H4 — labels, callout headers. Monospaced feel via uppercase tracking.
  h4: ({ children }) => (
    <h4
      className={`
        ${GeistPixelSquare.className}
        text-xl sm:text-3xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5
        
      `}
    >
      {children}
    </h4>
  ),

  // H5
  h5: ({ children }) => (
    <h5
      className={`
        ${GeistPixelSquare.className}
        text-xl sm:text-3xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5
      `}
    >
      {children}
    </h5>
  ),

  // H6
  h6: ({ children }) => (
    <h6
      className={`
        ${GeistPixelSquare.className}
        text-xl sm:text-3xl
        font-bold tracking-tight
        dark:text-zinc-50 text-zinc-950
        pb-5

      `}
    >
      {children}
    </h6>
  ),

  // Paragraph — readable, light, not crowded.
  p: ({ children }) => (
    <p
      className={`
        ${GeistPixelSquare.className}
        font-light text-base leading-relaxed
        dark:text-zinc-300 text-zinc-700
        mb-5
        text-justify
      `}
    >
      {children}
    </p>
  ),

  // Inline code — tight box, raw feel.
  code: ({ children }) => (
    <code
      className={`
        ${IBM_Plex_Mono_Font_Local.className}
        text-sm font-medium
        px-1.5 py-0.5
        dark:text-zinc-300 text-zinc-700
        border border-dashed
        dark:border-zinc-600 border-zinc-300
        rounded-none
        
      `}
    >
      {children}
    </code>
  ),

  // Code block — full-width, terminal-style.
  pre: ({ children }: { children: React.ReactNode }) => {
  const code =
    typeof children === "string"
      ? children
      : (children as React.ReactElement<{ children: string }>)?.props?.children ?? "";

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-zinc-800 border-dashed">
      <div className="flex items-center gap-2 px-4 py-3 dark:bg-zinc-800 bg-zinc-200 border-b border-dashed border-zinc-700">
        <span className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
        <span className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
        <span className="flex-1 text-center text-xs text-zinc-800 dark:text-zinc-300 font-medium tracking-wide select-none">
          editor
        </span>
        <CopyButton code={code} />
      </div>
      <pre
        className={`
          ${IBM_Plex_Mono_Font_Local.className}
          text-sm leading-relaxed
          dark:bg-zinc-900
          bg-zinc-50 
          text-zinc-600
          p-5
          overflow-x-auto
          [&>code]:border-none [&>code]:bg-transparent [&>code]:p-0
        `}
      >
        {children}
      </pre>
    </div>
  );
},

  // Blockquote — left rail mark, editorial pull-quote.
  blockquote: ({ children }) => (
    <blockquote
      className={`
        ${Ins_Serif.className}
        text-xl sm:text-2xl italic
        dark:text-zinc-300 text-zinc-600
        border-l-2 border-zinc-500 dark:border-zinc-500
        pl-5 my-8
      `}
    >
      {children}
    </blockquote>
  ),

  // Unordered list.
  ul: ({ children }) => (
    <ul
      className={`
        ${Stack_Sans_Text_Font.className}
        font-light text-base
        dark:text-zinc-300 text-zinc-700
        list-none
        space-y-2
        mb-6 pl-0
      `}
    >
      {children}
    </ul>
  ),

  // Ordered list.
  ol: ({ children }) => (
    <ol
      className={`
        ${Stack_Sans_Text_Font.className}
        font-light text-base
        dark:text-zinc-300 text-zinc-700
        list-none
        counter-reset-[item]
        space-y-2
        mb-6 pl-0
      `}
    >
      {children}
    </ol>
  ),

  // List item — custom dash marker, no bullet clutter.
  li: ({ children }) => (
    <li
      className={`
        flex gap-3
        dark:text-zinc-300 text-zinc-700
        leading-relaxed
        before:content-['—']
        before:dark:text-zinc-600
        before:text-zinc-400
        before:shrink-0
        before:select-none
      `}
    >
      {children}
    </li>
  ),

  // Horizontal rule — full dashed divider.
  hr: () => (
    <hr
      className={`
        border-none
        border-t border-dashed
        dark:border-zinc-700 border-zinc-300
        my-12
      `}
    />
  ),

  // Anchor — no underline by default, sharp hover.
  a: ({ href, children }) => (
    <a
      href={href}
      className={`
        ${Stack_Sans_Text_Font.className}
        dark:text-zinc-100 text-zinc-900
        underline underline-offset-4 decoration-dashed
        dark:decoration-zinc-600 decoration-zinc-400
        hover:dark:decoration-zinc-100 hover:decoration-zinc-900
        transition-all duration-150
      `}
    >
      {children}
    </a>
  ),

  // Strong/bold — no font-weight inflation, just higher contrast.
  strong: ({ children }) => (
    <strong
      className={`
        font-semibold
        dark:text-zinc-50 text-zinc-950
      `}
    >
      {children}
    </strong>
  ),

  // Em/italic — serif swap for genuine typographic italics.
  em: ({ children }) => (
    <em
      className={`
        ${Ins_Serif.className}
        not-italic text-[1.05em]
        dark:text-zinc-200 text-zinc-800
      `}
    >
      {children}
    </em>
  ),

  // Table — grid-aligned, dashed borders, no rounded corners.
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 border border-dashed dark:border-zinc-700 border-zinc-300">
      <table
        className={`
          ${Stack_Sans_Text_Font.className}
          w-full text-sm
          dark:text-zinc-300 text-zinc-700
          border-collapse
        `}
      >
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead
      className={`
        border-b border-dashed
        dark:border-zinc-700 border-zinc-300
        dark:bg-zinc-950 bg-zinc-50
      `}
    >
      {children}
    </thead>
  ),

  tbody: ({ children }) => (
    <tbody className="divide-y divide-dashed dark:divide-zinc-800 divide-zinc-200">
      {children}
    </tbody>
  ),

  tr: ({ children }) => (
    <tr className="hover:dark:bg-zinc-900 hover:bg-zinc-50 transition-colors duration-100">
      {children}
    </tr>
  ),

  th: ({ children }) => (
    <th
      className={`
        ${Stack_Sans_Headline_Font.className}
        text-xs font-semibold tracking-widest uppercase
        dark:text-zinc-400 text-zinc-500
        px-4 py-3
        text-left
      `}
    >
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td
      className={`
        px-4 py-3
        font-light
        dark:text-zinc-300 text-zinc-700
        align-top
      `}
    >
      {children}
    </td>
  ),

  // Image — full-bleed with inset caption.
  img: (props) => (
    <span className="relative block w-full h-[500px] mt-8 mb-12">
      <Image
        src={props.src!}
        alt={props.alt ?? ''}
        fill
        className="object-cover"
        priority
      />
      {props.alt && (
        <span
          className={`
            ${Stack_Sans_Text_Font.className}
            absolute -bottom-8 left-0
            w-full text-center
            text-xs font-light tracking-wide
            dark:text-zinc-400 text-zinc-500
            border border-t-0 border-dashed
            dark:border-zinc-700 border-zinc-300
            dark:bg-black/60 bg-white/60
            backdrop-blur-md
            py-1.5 px-4
          `}
        >
          {props.alt}
        </span>
      )}
    </span>
  ),
} satisfies MDXComponents

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, ...mdxComponents }
}
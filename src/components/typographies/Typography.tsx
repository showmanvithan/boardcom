
import { Sora, Noto_Sans_Mono } from "next/font/google";
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";

export const soraFont = Sora({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-sora",
  display: "swap",
});

export const Noto_Sans_Mono_Font = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-sora",
  display: "swap",
});
import { cn } from "@/lib/utils";

type TypographyH1Props = {
  children: React.ReactNode
  className?: string
}
type TypographyH2Props = {
  children: React.ReactNode
  className?: string
}
type TypographyH4Props = {
  children: React.ReactNode
  className?: string
}

type TypographyH5Props = {
  children: React.ReactNode
  className?: string
}

type TypographyPProps = {
  children: React.ReactNode
  className?: string
}




type TypographyP2Props = {
  children: React.ReactNode
}

export function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        GeistPixelSquare.className,
        "scroll-m-20 md:text-6xl text-4xl font-bold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children }: TypographyH2Props) {
  return (
    <h2 className={`${GeistPixelSquare.className} scroll-m-20 sm:text-2xl lg:text-2xl font-semibold tracking-tight`}>
      {children}
    </h2>
  )
}

export function TypographyH4({children}: TypographyH4Props) {
  return (
    <h4 className= {`${soraFont.className} scroll-m-20 text-xl font-semibold tracking-tight`}>
     {children}
    </h4>
  )
}

export function TypographyH5({children}: TypographyH5Props) {
  return (
    <h5 className="scroll-m-20 text-xs font-normal tracking-tight">
     {children}
    </h5>
  )
}

export function TypographyP({children}: TypographyPProps) {
  return (
    <h5 className={`${Noto_Sans_Mono_Font.className} leading-6 [&:not(:first-child)]:mt-6`}>
     {children}
    </h5>
  )
}

export function TypographyP2({children}: TypographyP2Props) {
  return (
    <h5 className="flex  gap-1 whitespace-nowrap leading-3 [&:not(:first-child)]:mt-6 text-xs">
     {children}
    </h5>
  )
}




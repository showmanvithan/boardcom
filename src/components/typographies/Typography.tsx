
import { Space_Grotesk, Geist_Mono } from "next/font/google";


const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type TypographyH1Props = {
  children: React.ReactNode
}
type TypographyH2Props = {
  children: React.ReactNode
}
type TypographyH4Props = {
  children: React.ReactNode
}

type TypographyH5Props = {
  children: React.ReactNode
}

type TypographyPProps = {
  children: React.ReactNode
}




type TypographyP2Props = {
  children: React.ReactNode
}

export function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className={` ${geistSans.variable} ${geistMono.variable} scroll-m-20 md:text-4xl text-3xl font-extrabold tracking-tight text-balance`}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children }: TypographyH2Props) {
  return (
    <h2 className={` ${geistSans.variable} ${geistMono.variable} scroll-m-20 sm:text-2xl lg:text-2xl font-semibold tracking-tight`}>
      {children}
    </h2>
  )
}

export function TypographyH4({children}: TypographyH4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
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
    <h5 className="leading-6 [&:not(:first-child)]:mt-6">
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




import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { GeistPixelSquare } from "geist/font/pixel";

import { TooltipProvider } from "@/components/ui/tooltip"

import { IBM_Plex_Mono } from "next/font/google";


export const IBM_Plex_Mono_Font = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vignesh T D / Profile",
  description: "Ssup, it's my profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased")}
      suppressHydrationWarning
    >
      <body 
      className={`flex flex-col bg-zinc-50 dark:bg-zinc-950 ${IBM_Plex_Mono_Font.className}`}  
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            // disableTransitionOnChange
          >
             <TooltipProvider> 
            {children}
            </TooltipProvider>
            </ThemeProvider>
            </body>
    </html>
  );
}

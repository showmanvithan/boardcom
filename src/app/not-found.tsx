"use client";

import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";

export default function NotFound() {
  return (
    
    <div className={`${GeistPixelSquare.className} w-screen h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center`}>
      <div className="border-l border-r border-dashed border-zinc-300 p-8 text-center rounded-b-full">
        <h1 className="text-6xl font-bold">404</h1>
        <h1 className="text-xl font-bold">path doesnt exist</h1>
      </div>
    </div>
  );
}
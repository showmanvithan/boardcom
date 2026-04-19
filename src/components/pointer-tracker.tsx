"use client";

import { useState } from "react";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full h-96 overflow-hidden bg-zinc-800"
      onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* follower */}
      <div
        className="absolute pointer-events-none"
        style={{
          transform: `translate(${pos.x - 50}px, ${pos.y - 50}px)`
        }}
      >
        <div className="w-24 h-24 bg-red-500 rounded-full" />
      </div>

      {/* demo content */}
      <div className="text-white p-4">
        Move cursor inside this box
      </div>
    </div>
  );
}
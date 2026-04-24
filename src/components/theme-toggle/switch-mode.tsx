"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function SwitchMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <div>
      <Button
        size="icon-lg"
        variant="outline"
        onClick={() =>
          setTheme(current === "dark" ? "light" : "dark")
        }
        className="relative overflow-hidden rounded-none border-dashed w-12 h-12 border-l border-r-0 border-t-0 border-b-0 border-zinc-800 dark:border-zinc-500"
      >
        {/* Dark icon */}
        <MdDarkMode
          size={22}
          className={`absolute transition-all duration-300 ease-in-out
          ${current === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
          }`}
        />

        {/* Light icon */}
        <MdLightMode
          size={22}
          className={`absolute transition-all duration-300 ease-in-out
          ${current === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </Button>
    </div>
  );
}
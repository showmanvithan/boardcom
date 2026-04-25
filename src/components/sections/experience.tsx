"use client";
import { BsAnthropic } from "react-icons/bs";
import CurvedLoop from "../CurvedLoop";

const experiences = [
    {
        logo: <BsAnthropic />,
        company: "Anthropic",
        role: "Senior Software Engineer",
        duration: "Jan 2024 – Present · 1 yr 4 mos · San Francisco, CA",
        description: "Building AI-powered developer tools. Led the architecture of a core inference pipeline reducing latency by 38%.",
        tags: ["Python", "LLMs", "Systems Design"],
    },
    {
        logo: "⚡",
        company: "Vercel",
        role: "Frontend Engineer",
        duration: "Jun 2022 – Dec 2023 · 1 yr 6 mos · Remote",
        description: "Worked on the Next.js core team. Shipped the App Router feature and reduced build times by 22%.",
        tags: ["Next.js", "TypeScript", "Rust"],
    },
    {
        logo: "⚡",
        company: "Vercel",
        role: "Frontend Engineer",
        duration: "Jun 2022 – Dec 2023 · 1 yr 6 mos · Remote",
        description: "Worked on the Next.js core team. Shipped the App Router feature and reduced build times by 22%.",
        tags: ["Next.js", "TypeScript", "Rust"],
    },
    {
        logo: "⚡",
        company: "Vercel",
        role: "Frontend Engineer",
        duration: "Jun 2022 – Dec 2023 · 1 yr 6 mos · Remote",
        description: "Worked on the Next.js core team. Shipped the App Router feature and reduced build times by 22%.",
        tags: ["Next.js", "TypeScript", "Rust"],
    },
    {
        logo: "⚡",
        company: "Vercel",
        role: "Frontend Engineer",
        duration: "Jun 2022 – Dec 2023 · 1 yr 6 mos · Remote",
        description: "Worked on the Next.js core team. Shipped the App Router feature and reduced build times by 22%.",
        tags: ["Next.js", "TypeScript", "Rust"],
    },
];

export default function ExperienceCake() {
    return (
        <div className="flex md:flex-row flex-col gap-2">
            <div className="flex-1 dark:bg-zinc-900 bg-white dark:text-zinc-100 text-zinc-900 border dark:border-zinc-800 border-zinc-200 rounded-3xl   p-5 ml-2 mr-2 overflow-scroll h-70">
                <div className="flex flex-col overflow-scroll">
                    {experiences.map((exp, i) => (
                        <div key={i} className="flex gap-4 relative pb-5 last:pb-0">
                            {/* Timeline column */}
                            <div className="flex flex-col items-center w-10 flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg dark:bg-zinc-800 bg-zinc-100 dark:border-zinc-700 border-zinc-200 border flex items-center justify-center text-lg z-10">
                                    {exp.logo}
                                </div>
                                {i < experiences.length - 1 && (
                                    <div className="w-px flex-1 dark:bg-zinc-700 bg-zinc-300 mt-1.5" />
                                )}
                            </div>
                            <div className="flex-1 pt-0.5">
                                <p className="text-sm font-semibold dark:text-zinc-100 text-zinc-900">{exp.company}</p>
                                <p className="text-xs dark:text-zinc-400 text-zinc-500 mt-0.5">{exp.role}</p>
                                <p className="text-xs dark:text-zinc-600 text-zinc-400 mt-0.5">{exp.duration}</p>
                                <p className="text-xs dark:text-zinc-400 text-zinc-600 mt-2 leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-2.5">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="text-xs dark:bg-blue-600 bg-blue-600 text-zinc-50 dark:text-zinc-900  rounded-full px-2.5 py-0.5 font-semibold ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 border-2 h-full ml-3 mr-3 rounded-3xl pt-5 pl-7 bg-white dark:bg-zinc-900 text-red-500 overflow-hidden max-h-70 items-center justify-start">
                <CurvedLoop
                    marqueeText="🐜   🐜🐜   🐜🐜   🐜🐜   🐜✦"
                    speed={2}
                    curveAmount={480}
                    direction="right"
                    interactive
                    className=""
                />
            </div>
        </div>
    );
}
"use client";

import { FiActivity } from "react-icons/fi";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { TypographyP2 } from "../typographies/Typography";
import { FaExternalLinkAlt } from "react-icons/fa";

import useSWR from "swr";

type GitHubEvent = {
    type: string;
    repo?: {
        name: string;
        id: number;
    };
    payload?: {
        head?: string;
        before?: string;
    };
    created_at: string;
};

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
};

export default function ShowGhActivities() {
    const { data, error, isLoading } = useSWR<GitHubEvent[]>(
        "https://api.github.com/users/vignexshh/events/public",
        fetcher
    );

    if (error)
        return (
            <div className="bg-red-500 p-10 text-2xl text-white">
                ERROR LOADING DATA
            </div>
        );

    if (isLoading || !data)
        return (
            <div className="bg-yellow-600 p-10 text-2xl text-white">
                Loading...
            </div>
        );

    const seen = new Set<number>();

    const filteredData = data
        .filter((e) => e?.type === "PushEvent")
        .filter((e) => {
            if (!e?.repo?.id) return false;
            if (seen.has(e.repo.id)) return false;
            seen.add(e.repo.id);
            return true;
        })
        .slice(0, 3)
        .map((e) => ({
            eventType: "Push",
            repo: e.repo!.name,
            repo_id: e.repo!.id,
            head: e.payload?.head?.slice(-6),
            before: e.payload?.before?.slice(-6),
            createdAt: e.created_at,
            repoVisitUrl: `https://github.com/${e.repo?.name}`,
            visitHeadUrl: `https://github.com/${e.repo?.name}/commit/${e.payload?.head}`,
            visitBeforeUrl: `https://github.com/${e.repo?.name}/commit/${e.payload?.before}`,

        }));

    //   return <pre>{JSON.stringify(filteredData, null, 2)}</pre>;



    return (

        <div className="relative flex flex-1 m-5 h-full items-start flex-col gap-5  max-h-40  overflow-hidden">
            <div className="overflow-auto w-full ">
                <div className="absolute top flex flex-col  items-start   text-zinc-400 dark:bg-zinc-900 bg-zinc-100 z-100 w-full pb-3 ">
                    <div className="flex flex-row items-center gap-2">
                        <FiActivity />
                        <p className="text-xs"> RECENT PUBLIC ACTIVITIES</p>
                    </div>
                </div>
                <div className="p-3" />
                <div className="absolute left-6.5 top-0 h-50 w-[1.5px] dark:bg-zinc-700 bg-zinc-300"></div>
                <div className="p-5" />
                <div className="relative flex flex-col gap-10 ">

                    {filteredData.map((item) => (
                        <div className="z-2" key={item.repo_id}>
                            <TypographyP2>
                                <div className="flex items-center justify-center bg-zinc-200 dark:bg-zinc-700  rounded-full border-8 dark:border-zinc-900 border-zinc-100 w-13 h-13 ">
                                    <RiGitRepositoryCommitsFill size={15} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex text-wrap">
                                        <p> Performed <strong>{item.eventType}</strong> at <strong>
                                            <a
                                                href={item.repoVisitUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline"
                                            >
                                                {item.repo}

    

                                            </a>
                                            
                                        </strong></p>
                                    </div>
                                    <div className="flex  flex-col items-start text-xs gap-1">
                                        <div className="items-center flex flex-row gap-2">
                                            <p>action created at</p> <div className="pl-1 pr-1 bg-zinc-200 dark:bg-black rounded-xl border border-zinc-300 dark:border-zinc-800 "> {item.createdAt}</div>
                                        </div>
                                        <div className="items-center flex flex-row gap-1">
                                            <p>made changes from <strong> <a
                                                href={item.visitBeforeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline"
                                            >
                                                {item.before}
                                            </a>
                                            </strong></p><FaExternalLinkAlt /> <p> to <strong>

                                                <a
                                                    href={item.visitHeadUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline hover:no-underline"
                                                >

                                                    {item.head}

                                                </a>

                                            </strong></p><FaExternalLinkAlt />
                                        </div>
                                    </div>
                                </div>
                            </TypographyP2>
                        </div>

                    ))}






                </div>

            </div>


        </div>

    );
}
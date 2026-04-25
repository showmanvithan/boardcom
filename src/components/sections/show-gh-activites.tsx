"use client";

import { FiActivity } from "react-icons/fi";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { TypographyBaseText, TypographyP2 } from "../typographies/Typography";
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
        "https://api.github.com/users/showmanvithan/events/public",
        fetcher
    );

    if (error)
        return (
            <div className=" p-2 text-2xl text-white">
                Failed to fetch data!
            </div>
        );

    if (isLoading || !data)
        return (
            <div className=" p-2 text-2xl text-white">
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
            eventType: "PUSH",
            repo: e.repo!.name,
            repo_id: e.repo!.id,
            head: e.payload?.head?.slice(0, 7),
            before: e.payload?.before?.slice(0, 7),
            createdAt: e.created_at,
            repoVisitUrl: `https://github.com/${e.repo?.name}`,
            visitHeadUrl: `https://github.com/${e.repo?.name}/commit/${e.payload?.head}`,
            visitBeforeUrl: `https://github.com/${e.repo?.name}/commit/${e.payload?.before}`,

        }));

    //   return <pre>{JSON.stringify(filteredData, null, 2)}</pre>;



    return (

        <div className="relative flex flex-1 pl-3 pr-3  h-full items-start flex-col gap-5  max-h-40  overflow-hidden border-dashed border bg-white dark:bg-zinc-900 border-green-600">
            <div className="overflow-x-hidden overflow-auto w-full ">
                <div className="absolute top flex flex-col  items-start text-green-600 dark:bg-zinc-900 bg-white z-1 w-full pb-2 ">
                    <div className="pt-3">
                        <div className="flex flex-row items-center gap-1 border pt-1 pb-1 pl-2 pr-2 border-dashed border-green-600 rounded-full bg-zinc-950">
                            <FiActivity />
                            <TypographyBaseText className="text-xs" >RECENT PUBLIC ACTIVITIES</TypographyBaseText>
                        </div>
                    </div>
                </div>
                <div className="p-3" />
                {/* line */}
                <div className="absolute left-9 top-0 h-50 w-1 border-l border-green-600 border-dotted" />
                <div className="p-5" />
                <div className="relative flex flex-col gap-10 ">

                    {filteredData.map((item) => (
                        <div className="pb-10" key={item.repo_id}>
                            <TypographyP2>

                                <div className="flex items-center justify-center  w-12 h-12 min-w-12 min-h-12 rounded-full border border-dashed dark:border-green-500 border-green-600 bg-zinc-50 dark:bg-zinc-900">
                                    <div className=" flex items-center justify-center bg-green-600 w-10 h-10 rounded-full">
                                        <RiGitRepositoryCommitsFill className="text-zinc-50 dark:text-zinc-950" size={20} />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 md:ml-2 ml-1">
                                    <div className="flex text-wrap">
                                        <TypographyBaseText className="text-green-600 dark:text-green-500 text-xs wrap-break-word"> Performed <strong>{item.eventType}</strong> at <strong>
                                            <a
                                                href={item.repoVisitUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline "
                                            >
                                                {item.repo}
                                            </a>

                                        </strong></TypographyBaseText>
                                    </div>
                                    <div className="flex  flex-col items-start text-xs gap-1">
                                        <div className="items-center flex flex-row gap-2">
                                            <TypographyBaseText>action created at</TypographyBaseText><div className="pl-1 pr-1 bg-zinc-200 dark:bg-black rounded-xl border border-zinc-300 dark:border-zinc-800 ">  <TypographyBaseText>{item.createdAt}</TypographyBaseText></div>
                                        </div>
                                        <div className="items-center flex flex-row gap-1">
                                            <TypographyBaseText> made changes from <strong> <a
                                                href={item.visitBeforeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:no-underline"
                                            >
                                                {item.before}
                                            </a>
                                            </strong>

                                            </TypographyBaseText>
                                            <FaExternalLinkAlt />
                                            <TypographyBaseText>
                                                to <strong>

                                                    <a
                                                        href={item.visitHeadUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline hover:no-underline"
                                                    >

                                                        {item.head}

                                                    </a>

                                                </strong>

                                            </TypographyBaseText>
                                            <FaExternalLinkAlt />
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
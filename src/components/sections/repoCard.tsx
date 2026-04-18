"use client";

import { FaGithub } from "react-icons/fa";

type RepoCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  repoUrl?: string;
};

export function RepoCard({
  name,
  description,
  imageUrl,
  repoUrl,
}: RepoCardProps) {
  const Wrapper = repoUrl ? "a" : "div";

  return (
    <Wrapper
      {...(repoUrl ? { href: repoUrl, target: "_blank", rel: "noreferrer" } : {})}
      className="dark:text-zinc-50 text-zinc-900 flex flex-col overflow-hidden border dark:border-zinc-800 dark:bg-zinc-900 bg-zinc-100 rounded-3xl gap-2 w-70"
    >
      <div className="flex flex-1 md:p-7 p-4 text-left flex-col text-xs gap-5 justify-around">
        <div className="flex flex-row items-center gap-2">
          <FaGithub size={25} />
          <h4 className="text-base font-semibold">{name}</h4>
        </div>
        <p className="text-left text-zinc-500 dark:text-zinc-400 max-w-120">
          {description}
        </p>
      </div>

      <div className="flex flex-1 bg-cover bg-center">
        <img
          src={imageUrl}
          alt={`${name} opengraph`}
          className="w-full h-full object-cover"
        />
      </div>
    </Wrapper>
  );
}
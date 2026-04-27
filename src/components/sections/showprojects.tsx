import { TypographyBaseText } from "../typographies/Typography";
import { GoFileDirectory } from "react-icons/go";
import Image from "next/image";

type ProjectItems = {
    title: string;
    description: string;
    thumbnail: string;
    url?: string;

};

export default function ShowProjectsCake() {

    const projectItems: ProjectItems[] = [
        { title: "this1 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
        { title: "this2 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
        { title: "this3 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
        { title: "this4 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
        { title: "this5 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
        { title: "this6 is my project", description: "random", thumbnail: "/twb_fire_tower_cover_art.webp" },
    ]
    return (
        <div className="flex flex-col border border-dashed border-zinc-600 dark:bg-black bg-white">
            <div className="flex flex-1 items-center justify-start pl-2 pt-2 pb-2">
                <div className="text-orange-600 dark:text-orange-400 flex flex-row items-center justify-between border-dashed border border-orange-400 dark:orange-orange-500 dark:bg-orange-500/10 rounded-full p-1 pl-2 pr-2 gap-1 bg-orange-600/10">
                    <GoFileDirectory />
                    <TypographyBaseText className="text-xs">RECENT PROJECTS</TypographyBaseText>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 p-2 border-t border-dashed border-zinc-600">
                {projectItems.map(({ title, description, thumbnail, url }) => (
                    <div key={title} className="flex flex-col border border-dashed border-zinc-600">
                        <div className="border-b border-dashed border-zinc-600">
                            <Image
                                src={thumbnail}
                                alt={description}
                                width={1280}
                                height={1080}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TypographyBaseText className="font-bold text-md p-2">{title}</TypographyBaseText>
                            <TypographyBaseText className="p-2 m-2 border-dashed border">{description}</TypographyBaseText>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
import { IconType } from "react-icons";

type SectionDividerProps = {
  title: string;
  icon: IconType;
};

export default function SectionDivider({
  title,
  icon: Icon,
}: SectionDividerProps) {
  return (
    <div className="flex items-center whitespace-nowrap md:pl-10 md:pr-10 pl-7 pr-5">
      <p className="md:flex-1 w-full flex flex-row items-center gap-2 text-xs dark:text-zinc-600 text-zinc-400 whitespace-nowrap">
        <Icon className="text-lg" />
        {title || "New Section"}
      </p>
      <div className="md:flex-10 flex-5 border-t m-5 dark:border-t-zinc-800 border-t-zinc-200" />
    </div>
  );
}
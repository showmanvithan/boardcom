type SectionDividerProps = {
  title: string;
};

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center whitespace-nowrap md:pl-10 md:pr-10 pl-7 pr-5">
      <p className="md:flex-1 w-full flex-1 font-xs dark:text-zinc-600 text-zinc-400 whitespace-nowrap">{title || "New Section"}</p>
      <div className="md:flex-10 flex-5 border-t m-5 dark:border-t-zinc-800 border-t-zinc-200" />
    </div>
  );
}
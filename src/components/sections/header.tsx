type HeaderCakeProps = {
    headerBgPath?: string;
    headerProfilePath?: string;
};

export default function HeaderCake({ headerBgPath, headerProfilePath }: HeaderCakeProps) {
    return (
        <div className="">
            <div className="relative bg-red-500 w-full p-10 md:h-60 h-40 border border-dashed dark:border-zinc-500 z-400"
                style={{ backgroundImage: `url(${headerProfilePath})` }}>
                <div
                    className="absolute -bottom-20 md:right-20 right-10 md:p-20 p-15 bg-blue-600 rounded-full bg-cover bg-center border border-dashed dark:border-zinc-400 "
                    style={{ backgroundImage: `url(${headerBgPath})` }}
                />
            </div>
        </div>
    );
}
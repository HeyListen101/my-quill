export default function NoteCard() {
    return (
        <div className="size-[200px] p-[20px] flex flex-col justify-between bg-[#FFED9E] rounded-[10px]">
            <p className="text-[12px] font-medium overflow-y-scroll max-h-100
                [&::-webkit-scrollbar]:w-0.5
                [&::-webkit-scrollbar-track]:rounded-ful
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#FFD41A]
            ">
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
                This is a docker note.
            </p>
            <div className="flex justify-between h-[25px] items-end">
                <span className="text-[10px] text-black font-light">April 23, 2025</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-[#444444] size-[12px] cursor-pointer">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg>
            </div>
        </div>
    )
}
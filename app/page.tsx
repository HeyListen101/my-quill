import Image from "next/image"
import NoteCard from "@/app/components/NoteCard"
import icon from "@/public/icon.png"

export default function RootPage() {
    return (
        <main>
            <div className="w-[100px] h-screen fixed left-0 top-0 shadow-lg flex flex-col items-center py-[50px] justify-between">
                <div className="flex flex-col gap-[80px]">
                <Image src={icon} alt="My Quill Icon" className="size-[35px]" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-[30px] fill-white bg-[#363636] p-[5px] rounded-[15px] cursor-pointer">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-[20px] fill-[#363636] cursor-pointer">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                </svg>
            </div>

            <div className="pl-[175px] pt-[30px] pr-[50px] h-screen overflow-y-scroll">
                <div className="flex justify-between items-center h-[50px]">
                    <form className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-[20px] fill-[#DDDDDD]">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                        <input type="text" placeholder="Search" className="text-[20px] text-[#BBBBBB] pl-[10px] placeholder-[#CCCCCC] focus:outline-none" />
                    </form>
                    <div className="flex gap-[20px] items-center">
                        <h1 className="font-medium text-[24px]">Welcome <span className="text-[#FD9E24]">Jose</span>!</h1>
                        <div className="size-[50px] rounded-[25px] flex items-center justify-center shadow-lg">
                            <h1 className="font-bold text-[28px]" >J</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <h1 className="font-medium text-[64px]">Notes</h1>
                    <div className="grid grid-cols-5 gap-[15px] pb-[30px]">
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                        <NoteCard />
                    </div>
                </div>
            </div>
        </main>
    )
}
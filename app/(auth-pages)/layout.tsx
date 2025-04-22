import Image from "next/image"
import icon from "@/public/icon.png"

export default function AuthLayout({ children } : { children : React.ReactNode}) {
    return (
        <main className="size-full">
            <div
                className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen filter blur-sm scale-105"
                aria-hidden="true"
            />
            <div className="flex justify-center items-center size-full">
                <div className="flex flex-col relative w-[400px] h-[330px] bg-white rounded-[20px] px-[40px] py-[30px] shadow-md gap-[25px]">
                    <div className="flex gap-[3px] items-center">
                        <Image src={icon} alt="My Quill Icon" className="size-[24px]" />
                        <span>My Quill</span>
                    </div>
                    { children }
                </div>
            </div>
        </main>
    )
}
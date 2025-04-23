import Link from "next/link"
import { signup } from "@/app/actions"

export default function SignUpPage() {
    return (
        <>
        <span className="inline-block font-bold text-[20px] text-center w-full">Sign Up</span>
        <form className="size-full flex flex-col gap-[25px]">
            <div className="relative">            
                <input type="text" placeholder="Username" id="username" name="username" required className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="absolute size-4 top-2.5 right-2.5 text-slate-600">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
            </div>
            <div className="relative">            
                <input type="password" placeholder="Password" id="password" name="password" required className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="absolute size-4 top-2.5 right-2.5 text-slate-600">
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                </svg>
            </div>
            <div className="flex justify-between">
                <button formAction={signup} className="rounded-[5px] bg-[#FCBF29] text-white font-medium px-[10px] py-[5px]">Sign Up</button>
                <Link href="/signin" className="font-medium text-[#FCBF29] px-[10px] py-[5px]">Sign In</Link>
            </div>
        </form>
        </>
    )
}
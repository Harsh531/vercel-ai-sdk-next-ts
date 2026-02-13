"use client";
import { useSidebar } from "./ui/sidebar";

export default function AppLogo() {
    const { open } = useSidebar();

    return (
        <div className='flex w-fit h-fit'>
            <div className="flex items-center flex-1">
                <h1 className={`flex ${!open ? "flex-col py-4 gap-0" : ""}  items-center gap-0 ${!open ? "text-sm" : "text-3xl"}  font-bold tracking-tight text-gray-900 dark:text-gray-100`}>
                    <span className=" ">
                        {!open ? "N" : "Next.js"}
                    </span>
                    <span className="px-1 text-accent-600 dark:text-accent-400">
                        {open && "/"}
                    </span>
                    <span className=" text-green-400 dark:text-primary-400">
                        {!open ? "AI" : "AI-SDK"}
                    </span>
                </h1>
            </div>
        </div>
    )
}

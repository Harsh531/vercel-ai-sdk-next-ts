"use client";


import { Button } from "./ui/button";
import { pages } from "@/lib/pagesList";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {
    const pathName = usePathname();

    return (
        <div className="flex gap-4 flex-1" >

            <div className="flex-1 flex flex-col  gap-0 px-4 py-4">
                {
                    pages.map(pathData => (
                        <Button key={pathData.path} variant={pathName === pathData.path ? "outline" : "ghost"} asChild className="flex justify-start w-full">
                            <Link href={pathData.path} className={`uppercase w-fit ${pathName === pathData.path ? "" : "text-gray-600"} `}>{pathData.name}</Link>
                        </Button>
                    ))
                }
            </div>

        </div>
    )
}

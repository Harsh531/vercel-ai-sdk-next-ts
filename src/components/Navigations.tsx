"use client";

import { Button } from "@/components/ui/button";
import { pages } from "@/lib/pagesList";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavigationComponent() {
    const pathName = usePathname();

    return (
        <div className="flex gap-4 flex-1" >

            <div className="flex-1 flex flex-col  gap-2 px-0 py-0">
                {
                    pages.map(pathData => (
                        <Button key={pathData.path} variant={pathName === pathData.path ? "outline" : "ghost"} asChild>
                            <Link href={pathData.path} className="uppercase">{pathData.name}</Link>
                        </Button>
                    ))
                }
            </div>

        </div>
    )
}
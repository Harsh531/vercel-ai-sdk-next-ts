"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navigations() {
    const pathName = usePathname();
    return (
        <div className="flex items-center gap-4 flex-1" style={{ display: pathName === "/" ? "none" : "flex" }}>

            <div className="flex-1 flex  gap-2 px-4 py-2">
                {
                    [{ name: "Home", path: "/" }, { name: "Completion", path: "/ui/completion" }, { name: "Stream", path: "/ui/stream" }, { name: "Chat", path: "/ui/chat" }].map(pathData => (
                        <Button key={pathData.path} variant={pathName === pathData.path ? "default" : "outline"} asChild>
                            <Link href={pathData.path} className="uppercase">{pathData.name}</Link>
                        </Button>
                    ))
                }
            </div>

        </div>
    )
}
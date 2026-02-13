"use client"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"
import { pages } from "@/lib/pagesList"
import Link from "next/link"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { isMobile } = useSidebar();

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <a href="#">
                                    <span className="text-base font-semibold">Next.js / AI-SDK</span>
                                </a>
                                {isMobile && <SidebarTrigger />}
                            </div>

                        </SidebarMenuButton>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>

                <SidebarGroup >
                    <SidebarMenu>

                        <SidebarMenuItem className="flex flex-col gap-1">
                            {
                                pages.map(page => {
                                    return (
                                        <SidebarMenuButton key={page.path} asChild>
                                            <Link href={page.path} className="font-semibold">{page.name}</Link>
                                        </SidebarMenuButton>
                                    )
                                })
                            }

                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>


            </SidebarContent>
            <SidebarFooter>
                Footer
            </SidebarFooter>
        </Sidebar>
    )
}

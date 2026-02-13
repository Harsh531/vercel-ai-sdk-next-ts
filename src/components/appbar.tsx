"use client";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { MonitorCog, Moon, Sun } from "lucide-react";

export default function AppBar() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  console.log(theme, "theme");

  return (
    <div className="flex w-full h-full  gap-4 z-50 backdrop-blur-sm items-center justify-between p-4">

      <SidebarTrigger />

      <div className="flex items-center flex-1">
        <h1 className="flex items-center gap-0 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <span className=" ">
            Next.js
          </span>
          <span className="px-1 text-accent-600 dark:text-accent-400">
            /
          </span>
          <span className=" text-green-400 dark:text-primary-400">
            AI-SDK
          </span>
        </h1>
      </div>






      <Button variant="outline" size="icon" onClick={handleChangeTheme}>
        {theme === "system" ?
          <MonitorCog />
          : theme === "light" ?
            <Sun />
            : <Moon />
        }
      </Button>



    </div>
  )
}
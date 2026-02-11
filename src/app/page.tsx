import { CaseUpper, MessageSquareText, Podcast } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-full min-w-full max-w-full items-center justify-center  font-sans dark:bg-black">

      <div className="flex flex-col flex-1 container max-w-7xl py-4 ">
        <div className="grid grid-cols-3 gap-4 w-full h-full ">
          {
            [{ name: "Text Completion", path: "/ui/completion" , icon : <CaseUpper />}, { name: "Text Streaming", path: "/ui/stream" , icon : <Podcast />}, { name: "Chat Message", path: "/ui/chat", icon : <MessageSquareText /> }].map(pathData => (
              <div key={pathData.path} className="flex flex-col items-center justify-center h-56 p-4 border-2  rounded-md text-black  transition-all ease-in  hover:border-gray-800 hover:bg-amber-100" >
                <Link href={pathData.path} className="uppercase font-semibold flex items-center justify-center gap-2 h-full w-full">
                {pathData.icon}
                {pathData.name}
                </Link>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  );
}

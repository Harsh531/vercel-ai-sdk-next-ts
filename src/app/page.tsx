import { pages } from "@/lib/pagesList";
import { CaseUpper, MessageSquareText, Podcast } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const list = pages.map(pathData => ({ ...pathData, icon: <CaseUpper /> }));

  return (
    <div className="flex flex-col gap-2 min-h-full min-w-full max-w-full items-center justify-center  font-sans dark:bg-black">

      <div className="flex flex-col flex-1 container max-w-7xl px-4 py-4 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4 w-full h-fit ">
          {
            list.map(pathData => (
              <div key={pathData.path} className="flex flex-col items-center justify-center h-56 p-4 border-2 border-gray-400 rounded-md text-black  transition-all ease-in-out  bg-white hover:text-green-400 hover:scale-105  " >
                <Link href={pathData.path} className="uppercase font-semibold flex items-center justify-center gap-2 h-full w-full">
                  <span className="flex items-center justify-center p-2 rounded-full shadow bg-gray-900 text-white">{pathData.icon}</span>
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

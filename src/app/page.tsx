import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-screen min-w-full max-w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">


<div className="grid grid-cols-3 gap-4 container max-w-7xl   py-4">
 {
                    [{ name: "Home", path: "/" }, { name: "Completion", path: "/ui/completion" }, { name: "Stream", path: "/ui/stream" }, { name: "Chat", path: "/ui/chat" }].map(pathData => (
                        <div key={pathData.path} className="flex flex-col items-center justify-center h-44 p-4 border-2 border-gray-300 rounded-md bg-gray-900 text-white  transition-all ease-in hover:border-4 hover:border-gray-600" >
                            <Link href={pathData.path} className="uppercase font-semibold hover:underline h-full w-full">{pathData.name}</Link>
                        </div>
                    ))
                }

</div>




      <h2>
        Pages go here:
      </h2>

      <div className="flex-1 flex flex-col gap-2 px-4 py-2">
        <Link href="/ui/completion" className="text-blue-500 underline">
          Go to Completion Page
        </Link>
        <Link href="/ui/stream" className="text-blue-500 underline">
          Go to Stream Page
        </Link>
        <Link href="/ui/chat" className="text-blue-500 underline">
          Go to Chat Page
          </Link>
      </div>

    </div>
  );
}

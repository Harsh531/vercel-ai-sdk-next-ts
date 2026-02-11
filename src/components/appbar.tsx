import Navigations from "./Navigations";


export default function AppBar() {

  return (
    <header className="flex sticky top-0 left-0 z-50 backdrop-blur-sm items-center justify-between border-b border-gray-300 p-4">

      <div className="flex items-center">
        <h1 className="flex items-center gap-0 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <span className=" text-gray-400  dark:text-primary-400">
            Next.js
          </span>
          <span className="px-1 text-accent-600 dark:text-accent-400">
            /
          </span>
          <span className=" dark:text-primary-400">
            AI-SDK
          </span>
        </h1>
      </div>

      <div className="">
        <Navigations />
      </div>

    </header>
  )
}
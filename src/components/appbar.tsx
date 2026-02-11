import Navigations from "./navigations";


export default function AppBar() {

  return (
    <div className="flex  z-50 backdrop-blur-sm items-center justify-between  p-4">

      <div className="flex items-center">
        <h1 className="flex items-center gap-0 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <span className=" text-gray-800  dark:text-primary-400">
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

      {/* <div className="">
        <Navigations />
      </div> */}

    </div>
  )
}
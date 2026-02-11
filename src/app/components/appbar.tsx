import Navigations from "./Navigations";


export default function AppBar() {

  return (
    <header className="flex sticky top-0 left-0 z-50 backdrop-blur-sm items-center justify-between border-b border-gray-300 p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">APP</h1>
      </div>
      <div className="">
        <Navigations />
      </div>

    </header>
  )
}
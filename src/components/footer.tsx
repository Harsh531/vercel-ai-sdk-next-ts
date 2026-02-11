

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <div className="flex flex-1  py-4 px-6 relative ">
            <div className="container mx-auto">
                <p className="text-center font-semibold">© {year} AI SDK Demo App. All rights reserved.</p>
            </div>
        </div>
    )
}

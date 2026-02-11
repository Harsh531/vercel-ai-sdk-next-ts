

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <div className="bg-gray-800 text-white py-4 px-6 relative ">
            <div className="container mx-auto">
                <p className="text-center">© {year} AI SDK Demo App. All rights reserved.</p>
            </div>
        </div>
    )
}

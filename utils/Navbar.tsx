import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full px-2 py-2 flex justify-between items-center">
            <div className="text-white">
                Logo.
            </div>
            <div className="flex gap-4 items-center">
                <Link href={"/"}>
                    <p className="text-slate-400 hover:text-white transition-all duration-200 hover:font-semibold">Home</p>
                </Link>
                <Link href={"about"}>

                    <p className="text-slate-400 hover:text-white transition-all duration-200 hover:font-semibold">About</p>
                </Link>
                <button className="bg-slate-400 px-2 h-[28px] rounded-md text-black font-semibold flex justify-center items-center hover:bg-black hover:text-white transition-all duration-400">
                    Resume
                </button>
            </div>
        </div>
    )
}

export default Navbar
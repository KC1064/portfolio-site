import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-white font-bold">Logo.</h1>
      <div className="flex gap-10 items-center">
        <Link href={"/"} className="text-slate-400 hover:text-white hover:font-semibold duration-300 transition-all">Home</Link>
        <Link href={"about"} className="text-slate-400 hover:text-white hover:font-semibold duration-300 transition-all">About</Link>
        <button className="px-2 bg-white py-1 rounded-sm hover:bg-black hover:text-white transition-all duration-300">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;

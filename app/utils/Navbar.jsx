"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const navlinks = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projects", link: "/projects" },
    // { name: "blogs", link: "/blogs" },
  ];

  return (
    <div className="w-full h-max flex justify-between items-center p-4">
      <div className="flex gap-4">
        {navlinks.map((item, index) => (
          <Link
            style={{ fontFamily: "gilroy" }}
            key={index}
            href={item.link}
            className="text-md font-extrabold text-slate-400 dark:text-gray-400 hover:text-black hover:dark:text-gray-100 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="relative flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme("dark")}
      />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme("light")}
      />
      <span className="sr-only">Toggle theme</span>
    </>
  );
}

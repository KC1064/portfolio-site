import Link from "next/link"
import { GoLinkExternal } from "react-icons/go";


export default function Footer() {
    const links = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/kiron08/"
        },
        {
            name: "GitHub",
            link: "https://github.com/KC1064"
        },
        {
            name: "Email",
            link: "mailto:kiron08072003@gmail.com"
        }
    ]
    return (
        <div className="w-full h-max flex justify-between items-center p-2 border-t-2 dark:border-slate-500 border-black">
            <div className="flex flex-col gap-1">
                {
                    links.map((item, index) => {
                        return (
                            <Link style={{fontFamily:"heavy"}} target="_blank" key={index} href={item.link} className="text-sm flex gap-1 items-center dark:text-gray-400 dark:hover:text-white text-gray-400 hover:text-black font-extrabold">{item.name} <GoLinkExternal size={12}/></Link>
                        )
                    })
                }
            </div>
            <div style={{fontFamily:"gilroy"}} className="text-xs md:text-sm lg:text-sm">
                © 2024 Kironmay. All Rights Reserved.
            </div>
        </div>
    )
}
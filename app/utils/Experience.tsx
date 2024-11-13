import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";

export default function Experience() {
    const exp = [{
        title: "Rust Developer Intern",
        timeline: "June 2024-July 2024",
        company: "Silicon Univerity",
        description: "Developed robust applications using Rust, implemented efficient error handling and ran multiple unit tests to optimized performance, enhance reliability and resource management.",
        link: "https://github.com/KC1064/Rust-Internship",
        linkname: "Github",
        icon: <FaGithub size={18} />
    }, {
        title: "AWS Trainee",
        timeline: "August 2023-September 2023",
        company: "Ingenious TechWorld",
        description: "Deployed scalable VPC with Route 53, implemented load balancing and auto-scaling, and secured MySQL connections via OpenVPN, enhancing security and resource efficiency.",
        link: "https://drive.google.com/file/d/13jgD569hgbjLTTOswLxtSKsb7glNMuyp/view",
        linkname: "Project File",
        icon: <FaRegFileCode size={18} />

    }]
    return (
        <div className="">
            <h1 style={{ fontFamily: "teodor" }} className="text-4xl mt-4 mb-3">experiences.</h1>

            <ol className="relative border-s border-gray-700 dark:border-gray-400">
                {
                    exp.map((item, index) => (
                        <li key={index} style={{ fontFamily: "gilroy" }} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-100 dark:bg-gray-100"></div>
                            <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-800">{item.timeline}</time>
                            <h3 style={{ fontFamily: "heavy" }} className="text-lg text-black dark:text-white font-semibold">{item.title}</h3>
                            <p className="dark:text-gray-400 text-gray-800 text-sm">{item.company}</p>
                            <p className="mb-4  font-normal text-black dark:text-white">{item.description}</p>
                            <Link href={item.link} target="_blank">
                                <button className="h-max font-bold w-max py-1 px-2 items-center border-black dark:border-white border-2 bg-transparent rounded-md flex gap-2 hover:bg-white hover:text-black active:scale-90 transition-all duration-300">
                                    {item.linkname} <span>{item.icon}</span>
                                </button>
                            </Link>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
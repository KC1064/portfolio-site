"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";


export default function Experience() {
    return (
        <div>
            <h1 className="text-3xl text-white border-b-2 border-b-white mb-2">Experience</h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">June 2024 - July 2024</time>
                    <h3 className="text-lg font-semibold text-white">Rust Developer Intern</h3>
                    <p className="text-gray-400">Silicon University</p>
                    <p className="mb-4 text-base font-normal text-white">Developed robust applications using Rust, implemented efficient error handling and ran multiple unit tests to optimized performance, enhance reliability and resource management.</p>
                    <Link href={"https://github.com/KC1064/Rust-Internship"} target="_blank">
                        <button className="h-max font-bold w-max py-1 px-2 items-center bg-gray-300 rounded-md flex gap-1 hover:bg-black hover:text-white active:scale-90 transition-all duration-300">
                            <FaGithub size={"20px"} />Github
                        </button>
                    </Link>

                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023 - September 2023</time>
                    <h3 className="text-lg font-semibold text-white">AWS Trainee</h3>
                    <p className="text-gray-400">Ingenious TechWorld</p>
                    <p className="mb-4 text-base font-normal text-gray-100 dark:text-gray-400">Deployed scalable VPC with Route 53, implemented load balancing and auto-scaling, and secured MySQL connections via OpenVPN, enhancing security and resource efficiency.</p>
                    <a
                        download={"true"} href={"https://drive.google.com/file/d/13jgD569hgbjLTTOswLxtSKsb7glNMuyp/view?usp=sharing"} target="_blank" className="h-max font-bold w-max py-1 px-2 items-center bg-gray-300 rounded-md flex gap-2 hover:bg-black hover:text-white active:scale-90 transition-all duration-300">
                        Project File<FaDownload />
                    </a>
                </li>

            </ol>


        </div>
    )
}
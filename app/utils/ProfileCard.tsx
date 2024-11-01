import Image from "next/image"
import dp from "@/app/assets/DP.jpg"
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";




const ProfileCard = () => {
    const socials = [
        {
            icon: <FiLinkedin size={24} />,
            link: "www.linkedin.com/in/kiron08"
        },
        {
            icon: <FiGithub size={24} />,
            link: "https://github.com/KC1064"
        },
        {
            icon: <FiMail size={24} />,
            link: "mailto:kiron08072003@gmail.com"
        }
    ]
    return (
        <div className="w-full h-max p-4 flex gap-2 items-center">
            <div className="w-[70%] flex justify-start flex-col gap-2">
                <h1
                    style={{ fontFamily: "teodor" }}
                    className="text-6xl  text-black dark:text-white">hi kiron here!<span className="text-6xl">👋</span></h1>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">21-year-old <span className="font-bold">Fullstack Developer</span> from <span className="font-bold">Odisha,India</span></p>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nostrum.</p>
                <div className="mt-6 flex gap-6 items-center">
                    <button
                        style={{ fontFamily: "gilroy" }}
                        className="w-max px-2 py-1 font-semibold border-2 border-white flex gap-2 items-center rounded-md text-sm">Resume<LiaFileDownloadSolid size={24} /> </button>
                    <div className="flex gap-3">
                        {
                            socials.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}>{item.icon}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[30%] h-full">
                <Image
                    src={dp}
                    alt="my-picture"
                    className="w-full rounded-md aspect-auto" />

            </div>


        </div>

    )
}

export default ProfileCard
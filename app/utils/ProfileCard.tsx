import Image from "next/image";
import dp from "@/app/assets/DP.jpg";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import Link from "next/link";

const ProfileCard = () => {
    const socials = [
        {
            icon: <FiLinkedin size={24} />,
            link: "https://www.linkedin.com/in/kiron08"
        },
        {
            icon: <FiGithub size={24} />,
            link: "https://github.com/KC1064"
        },
        {
            icon: <FiMail size={24} />,
            link: "mailto:kiron08072003@gmail.com"
        }
    ];

    return (
        <div className="w-full h-max p-4 flex flex-col md:flex-row gap-2 items-center">
            {/* Image section */}
            <div className="w-full md:w-[30%] flex items-center h-full order-1 md:order-last">
                <Image
                    src={dp}
                    alt="my-picture"
                    className="w-full rounded-md aspect-auto"
                />
            </div>
            {/* Text section */}
            <div className="w-full md:w-[70%] flex flex-col gap-2 order-2 md:order-first">
                <h1
                    style={{ fontFamily: "teodor" }}
                    className="md:text-5xl lg:text-5xl text-4xl  text-black dark:text-white">
                    hi kiron here!<span className="text-4xl md:text-5xl lg:text-5xl">👋</span>
                </h1>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">
                    21-year-old <span className="font-bold">Fullstack Developer</span> from <span className="font-bold">Odisha, India</span>
                </p>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">
                    Loves to bring ideas into life with coding and a cup of coffee.
                </p>
                <div className="mt-6 flex gap-6 justify-start items-center">
                    <button
                        style={{ fontFamily: "gilroy" }}
                        className="w-max px-2 py-1 font-semibold border-2 dark:border-white border-black flex gap-2 items-center rounded-md text-sm">
                        Resume <LiaFileDownloadSolid size={24} />
                    </button>
                    <div className="flex gap-3">
                        {socials.map((item, index) => (
                            <Link key={index} href={item.link}>{item.icon}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

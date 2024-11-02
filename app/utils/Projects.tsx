import { StaticImageData } from "next/image";
import clang from "@/app/assets/interpreter.jpeg";
import dc1 from "@/app/assets/dc-1.jpeg";
import hang from "@/app/assets/hangman.jpeg";
import keys from "@/app/assets/keysprint.jpeg";
import qsign from "@/app/assets/sign.jpeg";
import todo from "@/app/assets/todo.jpeg";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";




interface Project {
    title: string;
    description: string;
    link: string;
    image: StaticImageData;
    tech: string[];
    live?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Custom Language Interpreter",
            description: "A custom language interpreter built using Rust.",
            link: "https://github.com/KC1064/Custom_Language_Interpreter",
            image: clang,
            tech: ["Rust", "Clap", "PickleDB", "Parse Enums", "Tokio"],
            live: "",
        },
        {
            title: "DigiCipher",
            description: "A numerical logic-based game designed to challenge and enhance your analytical and problem-solving skills through engaging gameplay.",
            link: "https://github.com/KC1064/DigiCipher",
            image: dc1,
            tech: ["ReactJS", "Tailwind", "GSAP", "Framer"],
            live: "https://open-the-vault.vercel.app/",
        },
        {
            title: "Hangman Game",
            description: "An interactive web game where players guess a word within a limited chances before the character is hanged.",
            link: "https://github.com/KC1064/Hangman-Game",
            image: hang,
            tech: ["HTML", "CSS", "Javascript"],
            live: "https://kc1064.github.io/Hangman-Game/",
        },
        {
            title: "CLI Based ToDo App",
            description: "A simple command-line based to-do list application that allows users to manage task using Rust",
            link: "https://github.com/KC1064/To-Do-CLI",
            image: todo,
            tech: ["Rust", "Clap", "PickleDB", "Serial Package"],
            live: "",
        },
        {
            title: "KeySprint",
            description: "A web-based typing game designed to improve your typing speed and accuracy.",
            link: "https://github.com/KC1064/Typing-Speed-Test",
            image: keys,
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://kc1064.github.io/Typing-Speed-Test",
        },
        {
            title: "Quick Sign",
            description: "A web-based application that allows users to quickly sign their name with a custom signature and download it",
            link: "https://github.com/KC1064/Quick-Sign",
            image: qsign,
            tech: ["HTML", "CSS", "Javascript"],
            live: "https://kc1064.github.io/Quick-Sign/",
        },
    ];

    return (
        <div className="w-full md:px-4 lg:px-4 px-2">
            <h1 style={{ fontFamily: "teodor" }} className="text-5xl">
                projects.
            </h1>
            {projects.map((item, projectIndex) => {
                return (
                    <div key={projectIndex} className="w-full md:h-[380px] lg:h-[380px] h-[470px] p-2 border-2 dark:border-white border-black relative rounded-lg mt-3">
                        <div
                            className="overflow-hidden w-full h-[60%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image.src})` }}
                        ></div>
                        <div className="h-[40%] p-1 flex-col flex gap-2">
                            <h1
                                style={{ fontFamily: "teodor" }}
                                className="lg:text-lg md:text-lg">{item.title}</h1>
                            <p style={{ fontFamily: "gilroy" }} className="md:text-sm lg:text-sm text-xs">{item.description}</p>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex lg:gap-2 md:gap-2 gap-1 items-center flex-wrap">
                                    {item.tech.map((tech, techIndex) => (
                                        <div key={`${projectIndex}-${techIndex}`} style={{ fontFamily: "gilroy" }} className="backdrop-blur-2xl border-2 dark:border-white border-black rounded-md px-2 py-1 lg:text-sm md:text-sm text-xs">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex  md:gap-4 lg:gap-4 gap-1">
                                    <Link style={{ fontFamily: "gilroy" }} href={item.link} className="flex gap-2 font-extrabold rounded-md dark:bg-white dark:text-black bg-black text-white lg:text-sm md:text-sm text-xs items-center w-max px-2 py-1 hover:bg-slate-200 active:scale-90">
                                        <FaGithub size={16} />Github
                                    </Link>
                                    {item.live && (
                                        <Link style={{ fontFamily: "gilroy" }} href={item.live} className="flex gap-2 font-extrabold dark:bg-white dark:text-black bg-black  rounded-md text-white lg:text-sm md:text-sm text-xs items-center w-max px-2 py-1 hover:bg-slate-200 active:scale-90">
                                            <TfiWorld size={16} />   Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="lg:text-xs md:text-xs text-[11px] absolute bottom-1 text-gray-400">*Images used here are just thumbnail not related to my projects</p>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

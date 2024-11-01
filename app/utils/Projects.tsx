import { StaticImageData } from "next/image";
import digi from "@/app/assets/digicipher.png";
import hang from "@/app/assets/hangman.png";
import clang from "@/app/assets/custom-lang.png";
import demo from "@/app/assets/demo.webp";

type Tech = {
    [key: number]: string;
};

interface Project {
    title: string;
    description: string;
    link: string;
    image: StaticImageData;
    tech: Tech;
    live?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Custom Language Interpreter",
            description: "A custom language interpreter built using Rust.",
            link: "https://github.com/KC1064/Custom_Language_Interpreter",
            image: clang,
            tech: {
                1: "Rust",
                2: "Clap",
                3: "PickleDB",
                4: "Serial Package",
            },
            live: "",
        },
        {
            title: "DigiCipher",
            description: "A numerical logic-based game designed to challenge and enhance your analytical and problem-solving skills through engaging gameplay.",
            link: "https://github.com/KC1064/DigiCipher",
            image: digi,
            tech: {
                1: "ReactJS",
                2: "Tailwind",
                3: "GSAP",
                4: "Framer Motion",
            },
            live: "https://open-the-vault.vercel.app/",
        },
        {
            title: "Hangman Game",
            description: "An interactive web game where players guess a word within a limited chances before the character is hanged.",
            link: "https://github.com/KC1064/Hangman-Game",
            image: hang,
            tech: {
                1: "HTML",
                2: "CSS",
                3: "Javascript",
            },
            live: "https://kc1064.github.io/Hangman-Game/",
        },
    ];

    return (
        <div className="w-full px-4 flex flex-col gap-3">
            <h1 style={{ fontFamily: "teodor" }} className="text-5xl">projects.</h1>
            <div className="w-full h-[350px] p-1 border border-white rounded-lg">
                <div
                    className="overflow-hidden w-full h-[60%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${demo.src})` }} // Use demo.src for imported images
                >
                </div>
                <div className="h-[40%]">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis eos excepturi sed laudantium repellat in suscipit perspiciatis aliquid quas iste accusamus iusto, maxime esse.</div>
                    <div className="flex justify-between">
                        <div className="ml-3">
                            next js html react
                        </div>
                        <div className="mr-4">
                            live github
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[350px] p-1 border border-white rounded-lg">
                <div
                    className="overflow-hidden w-full h-[60%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${demo.src})` }} // Use demo.src for imported images
                >
                </div>
                <div className="h-[40%]">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis eos excepturi sed laudantium repellat in suscipit perspiciatis aliquid quas iste accusamus iusto, maxime esse.</div>
                    <div className="flex justify-between">
                        <div className="ml-3">
                            next js html react
                        </div>
                        <div className="mr-4">
                            live github
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[350px] p-1 border border-white rounded-lg">
                <div
                    className="overflow-hidden w-full h-[60%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${demo.src})` }} // Use demo.src for imported images
                >
                </div>
                <div className="h-[40%]">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis eos excepturi sed laudantium repellat in suscipit perspiciatis aliquid quas iste accusamus iusto, maxime esse.</div>
                    <div className="flex justify-between">
                        <div className="ml-3">
                            next js html react
                        </div>
                        <div className="mr-4">
                            live github
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

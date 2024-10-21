import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ArrowUpRight } from 'lucide-react';
import digi from "@/app/assets/digicipher.png";
import hang from "@/app/assets/hangman.png";
import clang from "@/app/assets/custom-lang.png";
import { FaGithub } from "react-icons/fa";

type Tech = {
    [key: number]: string; // Allow numeric keys
};

interface Project {
    title: string;
    description: string;
    link: string;
    image: StaticImageData; // Use StaticImageData for Next.js images
    tech: Tech;
    live?: string; // Optional property
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
                4: "Serial Package"
            },
            live: ""
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
                4: "Framer Motion"
            },
            live: "https://open-the-vault.vercel.app/"
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
            live: "https://kc1064.github.io/Hangman-Game/"
        }
    ];

    return (
        <div className="w-full">
            <p className="text-white font-semibold text-3xl border-b-white border-b-2 mb-3">Projects</p>
            <div className="flex flex-col gap-4 justify-center">
                {
                    projects.map((item, index) => {
                        return (
                            <Card key={index} className="bg-transparent text-white relative group">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex gap-1">
                                    {
                                        Object.keys(item.tech).map((key) => {
                                            const techKey = Number(key); // Convert string key to number
                                            return (
                                                <span key={techKey} className="h-max w-max px-2 bg-gray-500 text-black rounded-md italic ">
                                                    {item.tech[techKey]}
                                                </span>
                                            );
                                        })
                                    }
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <p className="h-max w-max px-2 bg-slate-400 rounded-md text-black flex gap-1 items-center py-1 font-bold hover:bg-white transition-all duration-500">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        <FaGithub size={"20px"} />
                                    </p>
                                    {item.live && (
                                        <p className="flex h-max w-max px-2 py-1 gap-1 items-center text-black bg-slate-400 rounded-md font-bold hover:bg-white transition-all duration-500">
                                            <a href={item.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                            <ArrowUpRight size={"18px"} />
                                        </p>
                                    )}
                                </CardFooter>
                                {/* Image to show on hover */}
                                <Image
                                    src={item.image}
                                    alt="Project Preview"
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    );
}

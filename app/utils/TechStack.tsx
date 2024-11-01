import html from "@/app/assets/technologies/HTML5.png"
import css from "@/app/assets/technologies/CSS3.png"
import js from "@/app/assets/technologies/JavaScript.png"
import react from "@/app/assets/technologies/React.png"
import node from "@/app/assets/technologies/Node.js.png"
import mongo from "@/app/assets/technologies/MongoDB.png"
import express from "@/app/assets/technologies/Express.png"
import tailwind from "@/app/assets/technologies/Tailwind CSS.png"
import ts from "@/app/assets/technologies/TypeScript.png"
import next from "@/app/assets/technologies/Next.js.png"
import java from "@/app/assets/technologies/Java.png"
import aws from "@/app/assets/technologies/AWS.png"
import rust from "@/app/assets/technologies/Rust.png"
import python from "@/app/assets/technologies/Python.png"
import Image from "next/image"
export default function TechStack() {
    // const skill = ["Javascript", "ReactJS", "Tailwind", "Node", "Express", "MongoDB", "TypeScript", "NextJS", "Rust", "Java", "Python", "AWS"]
    const skills = [
        {
            name: "HTML5",
            icon: html
        },
        {
            name: "CSS3",
            icon: css
        },
        {
            name: "Javascript",
            icon: js
        },
        {
            name: "ReactJS",
            icon: react
        },
        {
            name: "Tailwind",
            icon: tailwind
        },
        {
            name: "Node",
            icon: node
        },
        {
            name: "Express",
            icon: express
        },
        {
            name: "MongoDB",
            icon: mongo
        },
        {
            name: "TypeScript",
            icon: ts
        },
        {
            name: "NextJS",
            icon: next
        },
        {
            name: "Rust",
            icon: rust
        },
        {
            name: "Java",
            icon: java
        },
        {
            name: "Python",
            icon: python
        },
        {
            name: "AWS",
            icon: aws
        }
    ]
    return (
        <div className="w-full flex flex-wrap p-3">
            <h1 style={{ fontFamily: "teodor" }} className="text-5xl">
                technologies.
            </h1>

            <div className="w-full mt-4 flex flex-wrap items-center gap-2">
                {
                    skills.map((item, index) => {
                        return (
                            <p key={index} style={{ fontFamily: "gilroy" }} className="text-black font-extrabold h-max w-max px-2 py-1 bg-slate-100 rounded-md flex items-center text-sm gap-2"><span><Image src={item.icon} alt={item.name} className="h-6 w-6" /></span>{item.name}</p>
                        )
                    })
                }

            </div>

        </div>
    )
}
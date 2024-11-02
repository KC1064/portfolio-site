"use client"
import Image from "next/image";
import NavPage from "../utils/Navpage";
import about from "@/public/aboutpage.jpg";
import Experience from "../utils/Experience";
import { Switch } from "@/components/ui/switch"
import { useState } from "react";


export default function About() {
  const [click, setClicked] = useState(false)

  const education = [{
    course: "B.Tech in Computer Science",
    institute: "Silicon University, BBSR",
    timeline: "2022-2026",
    secured: 8.75
  }, {
    course: "Higher Secondary Examination(12th)",
    institute: "BJEM, BBSR",
    timeline: "2021",
    secured: "90%"
  }, {
    course: "Secondary Examination(10th)",
    institute: "BJEM, BBSR",
    timeline: "2019",
    secured: "95%"

  }]

  return (
    <div className="w-full lg:w-[60%] lg:px-6 lg:py-8 md:px-6 md:py-8 py-4 px-4 overflow-x-hidden">
      <NavPage />
      <h1 style={{ fontFamily: "teodor" }} className="text-6xl">about me.</h1>
      <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-between lg:justify-between mt-4">
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-start lg:justify-start mb-4 md:mb-0">
          <Image src={about} alt="about page" className="aspect-square h-[300px] w-[300px] rounded-md border-2 border-white" />
        </div>
        <div style={{ fontFamily: "gilroy" }} className="w-full md:w-1/2 lg:w-1/2 text-left relative">
          <div className={`mb-8 ${click ? 'text-gray-400' : 'text-white'}`}>
            I&apos;m <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>Kironmay Mishra</span>, a <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>21-year-old</span> developer based in <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>Bhubaneswar, Odisha, India</span>. Currently, I&apos;m a <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>pre-final year B.Tech student</span> in Computer Science from <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>Silicon University</span>.

            My passion for technology drives me to constantly learn by building and breaking things, gaining hands-on experience with new tools and frameworks. I enjoy solving real-world problems and thrive in collaborative environments where I can share ideas and learn from others.

            In my free time, I love to <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>watch anime</span> series. Additionally, I am currently learning <span className={`${click ? 'text-white font-extrabold' : 'text-white'}`}>DevOps</span> to upskill and enhance my capabilities. My goal is to leverage my skills to contribute to impactful software solutions while continuously evolving as a developer in this fast-paced tech landscape.
          </div>

          <Switch onClick={() => { setClicked(!click) }} className="absolute bottom-0 right-2" />

        </div>


      </div>

      <Experience />
      <div className="mt-2 flex flex-col gap-3">
        <h2 style={{ fontFamily: "teodor" }} className="text-4xl">education.</h2>
        {
          education.map((item, index) => {
            return (
              <div key={index} className="w-full border-white border p-2 rounded-md">
                <h3 style={{ fontFamily: "heavy" }} className="flex justify-between font-bold ">{item.course}<span>{item.timeline}</span></h3>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">{item.institute}</p>
                <p style={{ fontFamily: "gilroy" }} className="text-sm">Scored: {item.secured}</p>
              </div>

            )
          })
        }
      </div>
    </div>
  );
}

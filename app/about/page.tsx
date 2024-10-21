import Navbar from "../utils/Navbar";
import AboutMe from "../utils/AboutMe"
import Experience from "../utils/Experience"

export default function About() {
    return (
      <div className="h-screen w-full px-4 py-8 overflow-x-hidden flex justify-center">
      <div className="lg:w-[70%] md:w-full sm:w-full rounded-lg h-max w-full bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 saturate-100 backdrop-contrast-100 py-4 px-4 flex flex-col items-center gap-6">
        <Navbar/>
        <AboutMe/>
        <Experience/>
      </div>
    </div>
    );
  }
  
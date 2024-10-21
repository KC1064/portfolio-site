// "use client"
import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";
import Projects from "./utils/Projects";
import TechStack from "./utils/TechStack";

export default function Home() {
  return (
    <div className="h-screen w-full px-4 py-8 overflow-x-hidden flex justify-center">
      <div className="lg:w-[60%] md:w-full sm:w-full rounded-lg h-max w-full bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 saturate-100 backdrop-contrast-100 py-4 px-4 flex flex-col items-center gap-6">
        <Navbar />
        <ProfileCard/>
        <Projects/>
        <TechStack/>
      </div>
    </div>
  );
}

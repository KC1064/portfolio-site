import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";
import Projects from "./utils/Projects";
import TechStack from "./utils/TechStack";

export default function Home() {
  return (
    <div className="w-full lg:w-[60%] px-6 py-8 overflow-x-hidden flex flex-col justify-between gap-4">
      <Navbar />
      <ProfileCard />
      <Projects />
      <TechStack/>
    </div>
  );
}

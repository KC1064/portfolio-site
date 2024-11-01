import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";
import Projects from "./utils/Projects";

export default function Home() {
  return (
    <div className="w-full lg:w-[60%] px-6 py-8 overflow-x-hidden">
      <Navbar />
      <ProfileCard />
      <Projects />
    </div>
  );
}

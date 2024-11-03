import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";
import Projects from "./utils/Projects";
import TechStack from "./utils/TechStack";

export default function Home() {
  return (
    <div className="w-full lg:w-[60%] lg:px-6 lg:py-8 md:px-6 md:py-8 px-4 py-4  overflow-x-hidden flex flex-col justify-between gap-4">
      <Navbar />
      <ProfileCard />
      <Projects showAll={false} view={true}/>
      <TechStack/>
    </div>
  );
}

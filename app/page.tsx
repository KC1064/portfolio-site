import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";

export default function Home() {
  return (
    <div className="h-screen w-full px-4 py-8 overflow-hidden">
      <div className="lg:w-[70%] md:w-full sm:w-full rounded-lg h-full w-full bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 saturate-100 backdrop-contrast-100 py-4 px-4 flex flex-col gap-6">
        <Navbar />
        <ProfileCard/>
      </div>
    </div>
  );
}

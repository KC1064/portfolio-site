import Navbar from "./utils/Navbar";
import ProfileCard from "./utils/ProfileCard";

export default function Home() {
  return (
    <div className="h-screen w-full lg:w-[60%] px-6 py-8 overflow-x-hidden">
      <Navbar />
      <ProfileCard />
    </div>
  );
}

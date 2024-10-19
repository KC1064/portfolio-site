import Navbar from "./Navbar"
import ProfileCard from "./ProfileCard"

const LandPage = () => {
  return (
    <div className="lg:w-[60%] sm:w-full md:w-full text-white flex flex-col gap-4">
      <Navbar />
      <ProfileCard />
    </div>
  )
}

export default LandPage
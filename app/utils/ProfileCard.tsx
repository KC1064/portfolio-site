import { BorderBeam } from "@/components/ui/border-beam"
import img from "@/app/assets/DP.jpg"
import Image from "next/image"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const ProfileCard = () => {

    return (
        <div className="w-full h-max text-white relative flex  items-center">
            <div className="flex gap-4 h-full w-full p-2 items-center rounded-lg justify-center">
                <BorderBeam duration={12} borderWidth={3} />
                <div className="flex gap-4 w-full items-center border-2 border-white px-3 py-2 rounded-lg">
                    <Image src={img} alt="profile-pic" width={100} height={100} className="rounded-md" />
                    <div className="text-left">
                        <h6 className="text-lg font-bold">Kironmay Mishra</h6>
                        <p className="text-sm leading-4">Curious full stack developer with a passion for crafting seamless user experiences.</p>
                        <div className="flex gap-2 items-center mt-2">
                            <div className="p-1 hover:bg-gray-400 hover:bg-opacity-50 rounded-full flex items-center cursor-pointer transition-all duration-300">
                                <FaGithub size={"18px"} />
                            </div>
                            <div className="p-1 hover:bg-gray-400 hover:bg-opacity-50 rounded-full flex items-center cursor-pointer transition-all duration-300">
                                <FaLinkedin size={"18px"} />
                            </div>
                            <div className="p-1 hover:bg-gray-400 hover:bg-opacity-50 rounded-full flex items-center cursor-pointer transition-all duration-300">
                                <SiGmail size={"18px"} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default ProfileCard
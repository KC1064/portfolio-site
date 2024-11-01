import Image from "next/image"
import dp from "@/app/assets/DP.jpg"

const ProfileCard = () => {
    return (
        <div className="w-full h-max p-4 flex gap-2 items-center">
            <div className="w-[70%] flex justify-start flex-col gap-2">
                <h1
                    style={{ fontFamily: "gilroy" }}
                    className="text-4xl font-semibold text-black dark:text-white">hi kiron here!<span className="text-5xl">👋</span></h1>
                <p className="text-xs">21-year-old <span className="font-bold">Fullstack Developer</span> from <span className="font-bold">Odisha,India</span></p>
                <p className="text-xs">Loves the thrill of bringing ideas to life with code.</p>
            </div>
            <div className="w-[30%] h-full">
                <Image
                    src={dp}
                    alt="my-picture"
                    className="w-full rounded-md aspect-auto" />

            </div>


        </div>

    )
}

export default ProfileCard
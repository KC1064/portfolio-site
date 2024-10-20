import { BorderBeam } from "@/components/ui/border-beam"

const ProfileCard = () => {

    return (
        <div className="w-full h-28 text-white bg-slate-400 relative flex justify-start px-3 items-center gap-2">
            <BorderBeam duration={10} borderWidth={2.5}/>
            <div className="h-20 w-20 bg-pink-200 rounded-md"></div>
            <div className="text-left">
                <h6 className="text-lg">Kironmay Mishra</h6>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, explicabo?</p>
                <div className="flex gap-4">
                    <p>G</p>
                    <p>L</p>
                    <p>M</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileCard
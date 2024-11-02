import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function NavPage() {
    return (
        <div className="p-3 w-full flex justify-end">
            <Link href={"/"}> <GoHome size={28}/></Link>
        </div>
    )
}
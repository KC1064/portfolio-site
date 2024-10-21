import Link from "next/link";
import Image from "next/image"
import { ExternalLink } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import logo from "@/app/assets/logo.png"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-white font-bold h-16 w-16"><Image src={logo} className="h-amx w-max"></Image></h1>
      <div className="flex gap-6 items-center">
        <Link
          href={"/"}
          className="text-slate-400 hover:text-white hover:font-semibold duration-300 transition-all"
        >
          Home
        </Link>
        <Link
          href={"about"}
          className="text-slate-400 hover:text-white hover:font-semibold duration-300 transition-all"
        >
          About
        </Link>
        <a
          href="https://drive.google.com/file/d/1xDctoGXSREiu75YzgpwEY51QFA0uQlg7/view?usp=sharing"
          download={"true"}
        >
          <AnimatedSubscribeButton
            buttonColor="#000000"
            buttonTextColor="#ffffff"
            subscribeStatus={false} // Make sure this is handled in the component
            initialText={
              <span className="group inline-flex items-center">
                Resume{" "}
                <ExternalLink className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 size-4" />
                Downloaded{" "}
              </span>
            }
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

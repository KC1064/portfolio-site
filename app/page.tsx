import LandPage from "@/app/components/LandPage";
import bg from "@/app/assets/bg.svg";

export default function Home() {
  return (
    <center
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',   
        backgroundPosition: 'center' 
      }}
      className="main h-screen w-full py-8 px-4 overflow-hidden"
    >
      <LandPage />
    </center>
  );
}

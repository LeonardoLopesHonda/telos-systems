import Canvas from "@/components/ui/background/canvas";
import Navbar from "../components/Navbar";
import HeroPage from "@/components/HeroPage";

export default function Home() {
  return (
    <div className="relative flex flex-col min-w-screen min-h-full items-center bg-zinc-300 font-sans dark:bg-black">
      <Navbar />
      <HeroPage />
      <Canvas className="bg-inherit" />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const logo_scale: number = 1.25;

  return (
    <nav className="w-full flex justify-between my-2">
      {/* LEFT */}
      <div className="flex items-center mx-8 gap-2">
        <Image
          className="self-center dark:invert"
          src="/telos.svg"
          alt="Telos logo"
          width={logo_scale * 50}
          height={logo_scale * 10}
          priority
        />
        <span>
          <p className="leading-5 text-xl font-semibold tracking-widest">
            Telos
          </p>
          <p className="leading-5 text-lg tracking-tight">Systems</p>
        </span>
      </div>
      {/* RIGHT */}
      <div className="flex items-center mx-8 gap-2 ">
        <Button size={"lg"} variant={"ghost"}>
          Sobre nós
        </Button>
        <Button size={"lg"}>Testar Telos</Button>
      </div>
    </nav>
  );
}

import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button"

export default function Home() {

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex min-h-full w-full flex-col items-center justify-center py-32 px-16 my-auto dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-16 mx-auto text-center sm:items-start sm:text-left">
          <section className="w-full flex flex-col gap-4 text-center font-sans text-black dark:text-zinc-50">
            <h1 className="text-6xl max-w-3xl">
              Clareza no propósito. Precisão na execução.
            </h1>
            <p className="text-gray-900/60 text-2xl">Construído em volta do que realmente importa</p>
          </section>
          <section className="w-full flex gap-8 items-center justify-center font-sans text-black dark:text-zinc-50">
            <Button size={"lg"}>Testar Telos</Button>
            <Button size={"lg"} variant={"ghost"}>Sobre nós</Button>
          </section>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (

    <>
      <main className="flex flex-col items-center justify-center pt-60">

        <div className="items-center justify-between font-mono text-sm lg:flex">
          <p className="flex justify-center border-b p-4 border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border lg:bg-gray-200 :p-4 lg:dark:bg-zinc-800/30">
            ¡En construcción! &nbsp;
          </p>
        </div>

        {/* Public assets can be referenced directly without using the prefix "public"   */}
        <Image
          src="/img/Logo.png"
          alt="Vercel Logo"
          width={256}
          height={256}
        />
      </main>
    </>
  );
}
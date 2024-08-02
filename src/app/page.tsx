import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none"> */}
          <a
            className="fixed bottom-0 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            By{" His Brothers"}
            
          </a>
        {/* </div> */}
        <a className="align-middle text-cyan-500 text-3xl "><strong> Ezaan Ki Shaadi Jaldi Karo </strong></a>

      <div className="flex fixed top-1/3 place-items-center">
        <Image
          className="relative"
          src="/pleading.png"
          alt="Next.js Logo"
          width={180}
          height={50}
          priority
        />
      </div>

    </main>
  );
}

import Image from "next/image";
function Hero() {
  return (
    <div className="md:flex items-center justify-between gap-8  mt-36 md:h-auto md:mt-32 xl:mt-40 2xl:mt-44">
      <div className="poppins md:w-8/12  text-violet-50">
        <h1 className="semibold text-4xl">Îmbrățișează Viitorul Digital</h1>
        <Image
          src="/heroAnimation.svg"
          className="md:hidden block mx-auto w-full my-8"
          width={0}
          height={0}
        />
        <p className="mt-8 mb-12 md:w-10/12">
          Suntem Codevs - pasiunea noastră este să transformăm viziunile tale în
          experiențe online memorabile.
        </p>
        <a
          href="/servicii"
          className="block md:inline-block transition text-center duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500"
        >
          <svg
            className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
            />
          </svg>
          Serviciile Noastre
        </a>
        <a
          href="/oferta"
          className="block mt-4 md:mt-0 md:ml-3 md:inline-block transition text-center text-violet-50 duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500/20"
        >
          <svg
            className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          Website Gratuit
        </a>
      </div>
      <div className="w-1/2">
        <Image
          src="/heroAnimation.svg"
          className="hidden md:block p-4 w-full"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default Hero;

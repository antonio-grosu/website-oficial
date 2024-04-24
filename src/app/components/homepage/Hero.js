import Image from "next/image";
function Hero() {
  return (
    <div className="md:flex items-center justify-between gap-8  mt-36 md:h-auto md:mt-32 xl:mt-40 2xl:mt-44">
      <div className="poppins md:w-8/12  text-violet-50">
        <h1 className="slide-in semibold text-4xl">
          Îmbrățișează Viitorul Digital
        </h1>
        <Image
          src="/heroAnimation.svg"
          className="slide-right md:hidden block mx-auto w-full my-8"
          width={0}
          height={0}
        />
        <p className="slide-in mt-8 mb-12 md:w-10/12">
          Pasiunea noastră este să transformăm viziunile tale în experiențe
          online memorabile.
        </p>
        <a
          href="/servicii"
          className="block slide-in md:inline-block transition text-center duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500"
        >
          <svg
            className="w-4 h-4 inline-block mr-2  text-white"
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
      </div>
      <div className="w-1/2">
        <Image
          src="/heroAnimation.svg"
          className="hidden slide-right md:block p-4 w-full"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default Hero;

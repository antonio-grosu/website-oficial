import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col mt-36 md:h-auto md:mt-32 xl:mt-40 2xl:mt-44 md:flex-row">
      <div>
        <Image
          src="/ofertaAnimation.svg"
          className="hidden md:block p-4 w-full
        animated "
          width={0}
          height={0}
        />
      </div>
      <div className="poppins md:w-8/12  text-violet-50">
        <h1 className="semibold text-4xl">
          Website Gratuit pentru firmele nou înființate
        </h1>
        <Image
          src="/ofertaAnimation.svg"
          className="md:hidden block mx-auto w-full my-8"
          width={0}
          height={0}
        />
        <p className="mt-8 mb-12 md:w-10/12">
          In perioada 12 septembrie - 12 decembrie, firmele nou înființate
          beneficiază de gratuitate în vederea dezvoltării unui website.
        </p>
        <a
          href="mailto:contact.codevs@gmail.com?subject=Colaborare Proiect Oferta Website Grauit"
          className="block md:inline-block transition text-center duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500"
        >
          <svg
            className="w-4 h-4 mr-2 text-gray-800 dark:text-violet-50 inline-block"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
            <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
          </svg>
          Aplică pentru ofertă
        </a>
      </div>
    </div>
  );
}

export default Hero;

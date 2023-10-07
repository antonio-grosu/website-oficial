import Image from "next/image";
function Termeni() {
  return (
    <div className="mt-20 md:mt-8 xl:mt-24 2xl:mt-28">
      <div className="flex flex-col md:flex-row  items-center justify-center">
        <div className="md:w-1/2">
          <h1 className="semibold text-4xl underline underline-offset-4 w-full">
            Termeni și condiții
          </h1>
          <Image
            src="/termsAnimation.svg"
            width={0}
            height={0}
            className="md:hidden block mx-auto w-full my-8"
          />
          <p className="mt-8 mb-3 poppins w-full text-violet-50">
            Pentru a aplica, reprezentantul legal{" "}
            <svg
              className="w-4 h-4 inline-block mr-1 text-gray-800 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>{" "}
            al fiecărei firme poate contacta echipa Codevs pe email.
          </p>
          <p className="mt-3 poppins text-violet-50">
            Documentele doveditoare înființării în anul 2023 trebuie atașate în
            email.
          </p>
          <p className="mt-3  poppins text-violet-50">
            Mai mult, trebuie descris scopul firmei și disponibilitatea pentru
            un meeting de 30 de minute.
          </p>
          <p className="mt-3  poppins text-violet-50 ">
            Ultima conditie este accea de a opta pentru planul{" "}
            <span
              href="#gold"
              className="sora text-yellow-300 hover:underline transition-all cursor-pointer"
            >
              Codevs Gold
            </span>{" "}
            .
          </p>
        </div>
        <Image
          src="/termsAnimation.svg"
          width={0}
          height={0}
          className="hidden md:block mx-auto md:w-5/12 2xl:w-3/12"
        />
      </div>
    </div>
  );
}

export default Termeni;

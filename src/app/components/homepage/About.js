import Image from "next/image";
function About() {
  return (
    <div className="flex items-center justify-between mt-20 gap-12 md:mt-24 xl:mt-36 2xl:mt-40">
      <div className="hidden md:block w-2/3">
        <Image
          src="/aboutSection.svg"
          className="w-full"
          width={0}
          height={0}
        />{" "}
      </div>
      <div className="poppins text-violet-50 md:w-9/12 md:ml-4">
        <h1 className="semibold text-4xl">
          La <span className="sora text-violet-500">codevs</span> facem totul{" "}
          <br />
          Într-un mod unic
        </h1>
        <div className="md:hidden block  w-full my-8  ">
          <Image
            src="/aboutSection.svg"
            className="w-full"
            width={0}
            height={0}
          ></Image>
        </div>

        <p className="mt-8 mb-12 md:w-10/12">
          Suntem o echipă dedicată pasionată de inovație și creativitate. Cu o
          abordare atentă la detalii, ne străduim să transformăm fiecare proiect
          într-o experiență digitală excepțională.
        </p>
        <p className="mt-8 mb-12 md:w-10/12">
          Împărtășim o viziune comună: aceea de a crea{" "}
          <span className="font-bold text-violet-500">
            soluții care nu doar satisfac nevoile, ci și depășesc așteptările
          </span>
          .
        </p>
      </div>
    </div>
  );
}
export default About;

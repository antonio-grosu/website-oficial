import Serviciu from "../components/serviciiPage/Serviciu";

export const metadata = {
  title: "Codevs.ro | Aplicatie Sass",
  description:
    "Cu pasiunea noastră pentru inovație, suntem aici pentru a vă ajuta să dați viață ideilor dumneavoastră unice într-o aplicație web comercială (SaaS) care să exceleze. Cu o echipă de 7 experți în software, suntem gata să transformăm conceptele dumneavoastră într-o experiență digitală personalizată. Ne axăm pe designul autentic, funcționalitatea fără cusur și soluții tehnice ingenioase pentru a vă oferi o aplicație ce va lăsa o amprentă digitală memorabilă.",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Website",
    description:
      "Cu pasiunea noastră pentru inovație, suntem aici pentru a vă ajuta să dați viață ideilor dumneavoastră unice într-o aplicație web comercială (SaaS) care să exceleze. Cu o echipă de 7 experți în software, suntem gata să transformăm conceptele dumneavoastră într-o experiență digitală personalizată. Ne axăm pe designul autentic, funcționalitatea fără cusur și soluții tehnice ingenioase pentru a vă oferi o aplicație ce va lăsa o amprentă digitală memorabilă.",
    siteId: "1467726470533754880",
    creator: "@codevs.ro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

function Application() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/application.svg"
        serviciu="Aplicatie Comerciala"
        facts={["Procesor Plata", "Functionaliati Complexe"]}
        services={[
          {
            img: (
              <svg
                className="w-5 h-5 text-gray-800 text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
              </svg>
            ),
            p: "Marketing",
          },
          {
            img: (
              <svg
                className="w-5 h-5 text-gray-800 text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
              </svg>
            ),
            p: "Management Aplicatie",
          },
          {
            img: (
              <svg
                className="w-5 h-5 text-gray-800 text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
              </svg>
            ),
            p: "Suport Tehnic",
          },
        ]}
        description="Cu pasiunea noastră pentru inovație, suntem aici pentru a vă ajuta să dați viață ideilor dumneavoastră unice într-o aplicație web comercială (SaaS) care să exceleze. Cu o echipă de 7 experți în software, suntem gata să transformăm conceptele dumneavoastră într-o experiență digitală personalizată. Ne axăm pe designul autentic, funcționalitatea fără cusur și soluții tehnice ingenioase pentru a vă oferi o aplicație ce va lăsa o amprentă digitală memorabilă."
        nickname="Aplicatia Ta"
        time="28"
      />
    </div>
  );
}
export default Application;

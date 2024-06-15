import Serviciu from "../components/serviciiPage/Serviciu";

export const metadata = {
  title: "Codevs.ro | Unealta de Management",
  description:
    "La baza fiecărei afaceri prospere stă relația cu clienții. Cu serviciul nostru, punem la dispoziție instrumentele necesare pentru a construi și gestiona aceste relații într-un mod unic. Echipa noastră de experți în software dezvoltă soluții adaptate perfect nevoilor dumneavoastră. Cu accentul pe design-ul distinct, funcționalitatea avansată și strategiile personalizate, veți dispune de o unealtă  care vă va ajuta să vă diferențiați pe piață și să vă fidelizați clienții.",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Unealta Management",
    description:
      "La baza fiecărei afaceri prospere stă relația cu clienții. Cu serviciul nostru, punem la dispoziție instrumentele necesare pentru a construi și gestiona aceste relații într-un mod unic. Echipa noastră de experți în software dezvoltă soluții adaptate perfect nevoilor dumneavoastră. Cu accentul pe design-ul distinct, funcționalitatea avansată și strategiile personalizate, veți dispune de o unealtă  care vă va ajuta să vă diferențiați pe piață și să vă fidelizați clienții.",
    siteId: "1467726470533754880",
    creator: "@codevs.ro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

function Business() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/business.svg"
        serviciu="Unealta Business"
        facts={["CRM", "CMS", "Alte unelte"]}
        services={[
          {
            img: (
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
              </svg>
            ),
            p: "Autentifcare",
          },
          {
            img: (
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white inline-block mr-2"
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
        description="La baza fiecărei afaceri prospere stă relația cu clienții. Cu serviciul nostru, punem la dispoziție instrumentele necesare pentru a construi și gestiona aceste relații într-un mod unic. Echipa noastră de experți în software dezvoltă soluții adaptate perfect nevoilor tale. Cu accentul pe design-ul distinct, funcționalitatea avansată și strategiile personalizate, vei dispune de o unealtă  care te va ajuta să te diferențiezi pe piață."
        nickname="Software Management Business"
        time="14"
      />
    </div>
  );
}
export default Business;

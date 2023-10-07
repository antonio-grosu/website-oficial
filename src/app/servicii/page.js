import ServiceCard from "../components/homepage/ServiceCard";

export const metadata = {
  title: "Codevs.ro | Servicii",
  description: "Website | Aplicatie Personalizata | Unealta de Management",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Servicii",
    description:
      "Suntem Codevs - Pasiunea Noastră Este Să Transformăm Viziunile Tale în Experiențe Online Memorabile",
    siteId: "1467726470533754880",
    creator: "@codevs.ro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

function Servicii() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <div className="poppins mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
        <h1 className="semibold text-4xl md:text-center text-violet-50">
          Oferim <span className="text-violet-500">plus valoare</span> tuturor
          prin serviciile noastre{" "}
        </h1>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            service="Wesbite Personal"
            src={"/website.svg"}
            benefit={["Design Unic", "Optimizare"]}
            link="website"
          />
          <ServiceCard
            service="Aplicatie Comerciala"
            src={"/application.svg"}
            benefit={["Autentificare", "Procesor Plati", "BD Dedicata"]}
            link="aplicatie-comerciala"
          />
          <ServiceCard
            service="Software Business"
            src={"/business.svg"}
            benefit={[
              "Tool-uri Specifice",
              "Management Eficient",
              "Securitate Inalta",
            ]}
            link="unealta-business"
          />
        </div>
      </div>
    </div>
  );
}
export default Servicii;

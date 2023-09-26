import Serviciu from "../components/serviciiPage/Serviciu";

function Business() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/business.svg"
        serviciu="Unealta Business"
        facts={["CRM", "CMS", "Alte unelte"]}
        services={["Protectie Ridicata", "Intretinere"]}
        description="La baza fiecărei afaceri prospere stă relația cu clienții. Cu serviciul nostru de CRM și CSM, punem la dispoziție instrumentele necesare pentru a construi și gestiona aceste relații într-un mod unic. Echipa noastră de experți în software dezvoltă soluții adaptate perfect nevoilor dumneavoastră. Cu accentul pe design-ul distinct, funcționalitatea avansată și strategiile personalizate, veți dispune de o unealtă  care vă va ajuta să vă diferențiați pe piață și să vă fidelizați clienții."
        nickname="Business-ul Tau Eficientizat"
        time="21"
      />
    </div>
  );
}
export default Business;

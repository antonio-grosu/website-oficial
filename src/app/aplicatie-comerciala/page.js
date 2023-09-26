import Serviciu from "../components/serviciiPage/Serviciu";

function Application() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/application.svg"
        serviciu="Aplicatie Comerciala"
        facts={["Procesor Plata", "Functionaliati Complexe"]}
        services={[
          "Marketing",
          "Intretinere",
          "Hosting",
          "Management-ul Aplicatiei",
        ]}
        description="Cu pasiunea noastră pentru inovație, suntem aici pentru a vă ajuta să dați viață ideilor dumneavoastră unice într-o aplicație web comercială (SaaS) care să exceleze. Cu o echipă de 7 experți în software, suntem gata să transformăm conceptele dumneavoastră într-o experiență digitală personalizată. Ne axăm pe designul autentic, funcționalitatea fără cusur și soluții tehnice ingenioase pentru a vă oferi o aplicație ce va lăsa o amprentă digitală memorabilă."
        nickname="Aplicatia Ta"
        time="28"
      />
    </div>
  );
}
export default Application;

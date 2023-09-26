import Serviciu from "../components/serviciiPage/Serviciu";

function Website() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/website.svg"
        serviciu="Website Personal"
        facts={["UX Design", "SEO"]}
        services={[
          "Hosting",
          "Ilustratii Personalizate",
          "Administrare Continut",
        ]}
        description="Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă."
        nickname="Brand-ul Tau"
        time="7"
      />
    </div>
  );
}
export default Website;

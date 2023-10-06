import Hero from "../components/ofertaPage/Hero";
import Termeni from "../components/ofertaPage/Termeni";
function Oferta() {
  return (
    <div className="  gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Hero />
      <Termeni />
    </div>
  );
}

export default Oferta;

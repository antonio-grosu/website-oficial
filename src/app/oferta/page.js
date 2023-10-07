import Hero from "../components/ofertaPage/Hero";
import Termeni from "../components/ofertaPage/Termeni";

export const metadata = {
  title: "Codevs.ro | Website Gratuit",
  description:
    "Firmele nou infiinatate pot beneficia de gratuitate in vederea dezvoltarii unui website in perioada 12.09 - 12.12",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Website Gratuit",
    description:
      "Firmele nou infiinatate pot beneficia de gratuitate in vederea dezvoltarii unui website in perioada 12.09 - 12.12",
    creator: "@codevs.ro",
    images: ["https://nextjs.org/og.png"],
  },
};

function Oferta() {
  return (
    <div className="gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Hero />
      <Termeni />
    </div>
  );
}

export default Oferta;

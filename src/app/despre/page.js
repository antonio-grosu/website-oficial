import Hero from "../components/aboutPage/Hero";
import Principles from "../components/aboutPage/Principles";
import Contact from "../components/homepage/Contact";

export const metadata = {
  title: "Codevs.ro | Despre Noi",
  description:
    "Cu fiecare proiect pe care-l Dezvoltam, creăm o conexiune durabilă între tehnologie și umanitate.",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Despre",
    description:
      "Suntemaici pentru că împărtășim aceeași pasiune pentru inovație și succes.",
    creator: "@codevs.ro",
    images: ["https://nextjs.org/og.png"],
  },
};

function AboutPage() {
  return (
    <>
      <Hero />
      <Principles />
      <Contact />
    </>
  );
}

export default AboutPage;

import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Testimonials from "./components/homepage/Testimonials";
import Contact from "./components/homepage/Contact";
import Script from "next/script";

export const metadata = {
  title: "Codevs.ro | Home",
  description:
    "Suntem Codevs - Pasiunea Noastră Este Să Transformăm Viziunile Tale în Experiențe Online Memorabile.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Codevs.ro | Home",
  //   description: "Suntem Codevs - Pasiunea Noastră Este Să Transformăm Viziunile Tale în Experiențe Online Memorabile",
  //   siteId: "1467726470533754880",
  //   creator: "@codevs.ro",
  //   creatorId: "1467726470533754880",
  //   images: ["https://nextjs.org/og.png"],
  // },
};

function Homepage() {
  return (
    <>
    <Script>
    {'
      

  gtag('event', 'conversion', {'send_to': 'AW-11357127216/pJO5CO2clucYELCEwKcq'});
'}
  </Script>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Homepage;

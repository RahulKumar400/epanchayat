import AboutUs from "./home/AboutUs";
import Footer from "./home/Footer";
import Header from "./home/Header";
import HeroSection from "./home/Hero";
import Marquee from "./home/Marquee";
import SchemesSection from "./home/Schemes";
import ServicesSection from "./home/Services";


export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-14">
        <Marquee />
        <HeroSection />
        <AboutUs/>
        <SchemesSection/>
        <ServicesSection />
        <Footer />
      </div>
    </>
  );
}

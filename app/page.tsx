import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoIHelp from "@/components/WhoIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import AboutMaya from "@/components/AboutMaya";
import OurOffice from "@/components/OurOffice";
import Specialties from "@/components/Specialties";
import FAQ from "@/components/FAQ";
import ScheduleCTA from "@/components/ScheduleCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoIHelp />
        <Expertise />
        <HowIWork />
        <AboutMaya />
        <OurOffice />
        <Specialties />
        <FAQ />
        <ScheduleCTA />
      </main>
      <Footer />
    </>
  );
}
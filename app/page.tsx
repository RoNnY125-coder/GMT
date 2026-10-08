import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoIHelp from "@/components/WhoIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Specialties from "@/components/Specialties";
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
        <Specialties />
        <ScheduleCTA />
      </main>
      <Footer />
    </>
  );
}
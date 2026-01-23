import type { JSX } from "react";
import Hero from "./LandingPage/Components/Hero";
import Navbar from "./LandingPage/Components/NavBar";
// import Features from "./LandingPage/Components/Features";
// import WhyUs from "./LandingPage/Components/WhyUs";
// import Process from "./LandingPage/Components/Process";
import Built from "./LandingPage/Components/Built";
import Informational from "./LandingPage/Components/Informational";
import ContactUs from "./LandingPage/Components/ContactUs";
import Footer from "./LandingPage/Components/Footer";
import GrowthSection from "./LandingPage/Components/GrowthSection";



export default function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO + GROWTH overlap wrapper */}
      <div className="relative">
        <Hero />

        {/* Pull GrowthSection up into the Hero */}
        <div className="relative z-20 -mt-20 sm:-mt-28 lg:-mt-36">
          {/* Neon bridge glow behind the cards */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/20 via-sky-500/10 to-transparent blur-2xl" />
          <GrowthSection />
        </div>
      </div>
      <Informational />
      <Built />
      <ContactUs />
      <Footer />
    </div>
  );
}

import type { JSX } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./LandingPage/Components/NavBar";
import ScrollToTop from "./ScrollToTop";

// Home sections
import Hero from "./LandingPage/Components/Hero";
import GrowthSection from "./LandingPage/Components/GrowthSection";
import Informational from "./LandingPage/Components/Informational";
import Built from "./LandingPage/Components/Built";
import ContactUs from "./LandingPage/Components/ContactUs";
import Footer from "./LandingPage/Components/Footer";

// Pages
import About from "./About Page/Components/About";
import Services from "./Services/Components/Services";
import Finance from "./Finance/Components/Finance";
import Contact from "./Contact Page/Components/Contact";

function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen">
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

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ✅ ALWAYS go to top when route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

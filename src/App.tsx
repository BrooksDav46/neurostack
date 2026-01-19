import type { JSX } from "react";
import Hero from "./LandingPage/Components/Hero";
import Navbar from "./LandingPage/Components/NavBar";
import Features from "./LandingPage/Components/Features";
import WhyUs from "./LandingPage/Components/WhyUs";
import Process from "./LandingPage/Components/Process";
import Built from "./LandingPage/Components/Built";
import Informational from "./LandingPage/Components/Informational";
import ContactUs from "./LandingPage/Components/ContactUs";
import Footer from "./LandingPage/Components/Footer";




export default function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Process />
      <Built />
      <Informational />
      <ContactUs />
      <Footer />
    </div>
  );
}

// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import { MarketingMarquee } from "@/components/ui/marketing-marquee";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyChoose from "@/components/site/WhyChoose";
import Stats from "@/components/site/Stats";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import CTA from "@/components/site/CTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { ScrollProgress, BackToTop } from "@/components/site/Utilities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS MATRIX — Recruitment, HR Consulting & IT Services in Chennai" },
      { name: "description", content: "SS MATRIX Consultancy & Development Services: trusted recruitment, staffing, HR consulting and IT solutions in Chennai. 5000+ placements, 250+ clients, pan-India reach." },
      { property: "og:title", content: "SS MATRIX — Recruitment, HR & IT Solutions" },
      { property: "og:description", content: "Connecting talent, technology and business growth. Premium recruitment, staffing and IT consultancy from Chennai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MarketingMarquee />
        <About />
        <Services />
        <WhyChoose />
        <Stats />
        <Process />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
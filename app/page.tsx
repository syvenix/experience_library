import Navigation from "@/components/shared/Navigation";
import Hero from "@/components/hero/Hero";
import ExperienceSystems from "@/components/experience/ExperienceSystems";
import DesignSignatures from "@/components/signatures/DesignSignatures";
import ProcessTimeline from "@/components/timeline/ProcessTimeline";
import Roadmap from "@/components/roadmap/Roadmap";

import Consultation from "@/components/shared/Consultation";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import FloatingWhatsapp from "@/components/shared/FloatingWhatsapp";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden pt-20">

        {/* Hero */}
        <Hero />

        {/* Experience Library */}
        <ExperienceSystems />

        {/* Design Signatures */}
        <DesignSignatures />

        {/* Development Process */}
        <ProcessTimeline />

        {/* Product Roadmap */}
        <Roadmap />

        {/* Consultation CTA */}
        <Consultation />

        {/* Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsapp />
    </>
  );
}
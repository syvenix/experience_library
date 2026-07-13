import { AboutSection } from "@healthcare/components/about/about-section";
import { ContactSection } from "@healthcare/components/contact/contact-section";
import { DoctorsSection } from "@healthcare/components/doctors/doctors-section";
import { FAQSection } from "@healthcare/components/faq/faq-section";
import { Footer } from "@healthcare/components/footer/footer";
import { Hero } from "@healthcare/components/hero/hero";
import { Navbar } from "@healthcare/components/layout/navbar";
import { Specializations } from "@healthcare/components/services/specializations";
import { TestimonialsSection } from "@healthcare/components/testimonials/testimonials-section";
import { TrustBar } from "@healthcare/components/trust/trust-bar";
import "@healthcare/styles/globals.css";

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Syvenix Clinic Solution",
  description:
    "A premium healthcare clinic experience for appointments, doctors, specializations, and patient support.",
  telephone: "+91 98765 43210",
  medicalSpecialty: [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dental Care",
    "Dermatology"
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00"
    }
  ]
};

export default function HealthcareExperience() {
  return (
    <div className="healthcare-experience">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Specializations />
        <AboutSection />
        <DoctorsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

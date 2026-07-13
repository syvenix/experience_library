import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import Navigation from "@interior/components/Navigation";
import Hero from "@interior/components/Hero";
import Philosophy from "@interior/components/Philosophy";
import FeaturedProjects from "@interior/components/FeaturedProjects";
import MaterialShowcase from "@interior/components/MaterialShowcase";
import DesignProcess from "@interior/components/DesignProcess";
import BeforeAfter from "@interior/components/BeforeAfter";
import Testimonials from "@interior/components/Testimonials";
import Consultation from "@interior/components/Consultation";
import Footer from "@interior/components/Footer";
import "@interior/styles/globals.css";

// Body copy font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

// Structural Headings fallback for General Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-general-sans",
  weight: ["400", "500"],
  display: "swap",
});

// Large Editorial Display fallback for Canela
const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-canela",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function InteriorDesignExperience() {
  return (
    <div className={`interior-experience ${inter.variable} ${dmSans.variable} ${displayFont.variable} scroll-smooth bg-spatial-warmWhite text-spatial-charcoal font-body antialiased`}>
      <Navigation />
      <main className="relative z-10 w-full min-h-screen">
        <Hero />
        <Philosophy />
        <FeaturedProjects />
        <MaterialShowcase />
        <DesignProcess />
        <BeforeAfter />
        <Testimonials />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}

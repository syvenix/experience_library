import { Playfair_Display, Inter } from "next/font/google";
import Header from "@lawfirm/components/layout/Header";
import Footer from "@lawfirm/components/layout/Footer";
import Hero from "@lawfirm/components/hero/Hero";
import TrustLogos from "@lawfirm/components/practice/TrustLogos";
import PracticeAreas from "@lawfirm/components/practice/PracticeAreas";
import About from "@lawfirm/components/about/About";
import Attorneys from "@lawfirm/components/attorneys/Attorneys";
import Process from "@lawfirm/components/process/Process";
import Testimonials from "@lawfirm/components/testimonials/Testimonials";
import Faq from "@lawfirm/components/faq/Faq";
import Contact from "@lawfirm/components/contact/Contact";
import "@lawfirm/styles/globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function LawFirmExperience() {
  return (
    <div className={`lawfirm-experience ${playfair.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustLogos />
        <PracticeAreas />
        <About />
        <Attorneys />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";

import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import DesignSignatures from "@/components/signatures/DesignSignatures";

export const metadata: Metadata = {
  title: "Design Signatures | Syvenix Experience Library",
  description:
    "Explore the proprietary design languages behind the Syvenix Experience Library.",
};

export default function SignaturesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-x-hidden pt-20">
        <DesignSignatures showViewAll={false} />
      </main>

      <Footer />
    </>
  );
}
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import Roadmap from "@/components/roadmap/Roadmap";

export const metadata = {
  title: "Roadmap | Syvenix Experience Library",
  description: "View the full product roadmap for the Syvenix Experience Library.",
};

export default function RoadmapPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden pt-20 min-h-screen">
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}

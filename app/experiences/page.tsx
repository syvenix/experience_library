import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import AllExperiences from "@/components/experience/AllExperiences";

export const metadata = {
  title: "Experiences | Syvenix Experience Library",
  description: "Explore all our premium industry-specific digital experience systems.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AllExperiences />
        </div>
      </main>
      <Footer />
    </>
  );
}

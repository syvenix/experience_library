import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

import SignatureDetail from "@/components/signatures/SignatureDetail";
import {
  getSignatureBySlug,
  signatures,
} from "@/components/signatures/data";

interface SignaturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/*
 * Pre-generate only the Signature pages that are currently available.
 */

export function generateStaticParams() {
  return signatures
    .filter((signature) => signature.available)
    .map((signature) => ({
      slug: signature.slug,
    }));
}

/*
 * Generate metadata for each Signature page.
 */

export async function generateMetadata({
  params,
}: SignaturePageProps): Promise<Metadata> {
  const { slug } = await params;

  const signature = getSignatureBySlug(slug);

  if (!signature || !signature.available) {
    return {
      title: "Design Signature Not Found | Syvenix",
    };
  }

  return {
    title: `${signature.name} | Syvenix Design Signatures`,

    description: signature.overview,
  };
}

/*
 * Dynamic Signature Detail Page
 */

export default async function SignaturePage({
  params,
}: SignaturePageProps) {
  const { slug } = await params;

  const signature = getSignatureBySlug(slug);

  /*
   * Unknown Signatures and Coming Soon Signatures
   * must not expose incomplete detail pages.
   */

  if (!signature || !signature.available) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden pt-20">
        <SignatureDetail signature={signature} />
      </main>

      <Footer />
    </>
  );
}
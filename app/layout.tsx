import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://experience.syvenix.com"),

  title: {
    default: "Syvenix Experience Library",
    template: "%s | Syvenix Experience Library",
  },

  description:
    "Explore premium industry-specific digital experience systems designed and engineered by Syvenix.",

  keywords: [
    "Syvenix",
    "Experience Library",
    "Healthcare Website",
    "Law Firm Website",
    "Interior Design Website",
    "Digital Experience",
    "UI Design",
    "Website Inspiration",
    "Premium Websites",
  ],

  authors: [
    {
      name: "Syvenix",
      url: "https://yathiraj.co.in",
    },
  ],

  creator: "Syvenix",

  publisher: "Syvenix",

  applicationName: "Syvenix Experience Library",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Syvenix Experience Library",

    description:
      "Discover premium industry-focused experience systems engineered by Syvenix.",

    siteName: "Syvenix",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Syvenix Experience Library",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Syvenix Experience Library",

    description:
      "Premium digital experience systems by Syvenix.",

    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
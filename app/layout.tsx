import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { SITE } from "@/components/actions/seo";
import { Roboto } from "next/font/google";

export const metadataBase = new URL(SITE.url);

const inter = Roboto({  subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: SITE.title,
    template: "%s | " + SITE.title,
  },
  description: SITE.description,
  keywords: [
    "senior designers",
    "designer community",
    "freelance designers",
    "ux community",
    "product design",
  ],
  authors: [{ name: "Lunar Guild" }],
  creator: "Lunar Guild",
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.title,
    images: [
      {
        url: new URL(SITE.ogImage, metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitter,
    images: [new URL(SITE.ogImage, metadataBase).toString()],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.title,
  url: SITE.url,
  logo: new URL(SITE.logo, metadataBase).toString(),
  sameAs: [
    "https://twitter.com/your-handle",
    // add other social links
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"antialiased bg-black text-white min-h-screen" + inter.className}>
        {/* Decorative background glow (adjust classes/colors to match your design) */}
          <main>
            {children}
          </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

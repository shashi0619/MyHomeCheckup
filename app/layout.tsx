import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import WhatsAppButton from "./whatsapp";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ─── META TITLE (57 chars) ───────────────────────────────────────────────
  // Targets: "home inspection Hyderabad", "plumbing repair Hyderabad",
  // "electrical repair Hyderabad", "woodwork Hyderabad"
  title: "HitQuality | Best Home Inspection Services in Hyderabad",

  // ─── META DESCRIPTION (158 chars) ────────────────────────────────────────
  // High-CTR copy: number hook + service list + location + urgency CTA
  description:
    "Hyderabad's #1 certified home inspectors. Expert plumbing repair checks, electrical safety inspections & woodwork assessments. 100+ point checklist. Book your free consultation today!",

  // ─── KEYWORDS ─────────────────────────────────────────────────────────────
  // PRIMARY — exact-match buyer-intent searches
  // SECONDARY — service + location combos
  // LONG-TAIL — high-conversion near-me & best-in queries
  keywords: [
    // Primary — Home Inspection
    "home inspection Hyderabad",
    "best home inspection services in Hyderabad",
    "certified home inspector Hyderabad",
    "property inspection Hyderabad",
    "home inspection near me Hyderabad",

    // Primary — Plumbing
    "best plumbing repair in Hyderabad",
    "plumbing repair Hyderabad",
    "plumbing inspection Hyderabad",
    "plumbing services near me Hyderabad",
    "water leakage repair Hyderabad",
    "seepage repair Hyderabad",
    "pipe leak repair Hyderabad",

    // Primary — Electrical
    "best electrical repair in Hyderabad",
    "electrical repair Hyderabad",
    "electrical inspection Hyderabad",
    "electrical safety check Hyderabad",
    "electrical services near me Hyderabad",
    "home wiring inspection Hyderabad",
    "electrical fault detection Hyderabad",

    // Primary — Woodwork
    "best woodwork in Hyderabad",
    "woodwork services Hyderabad",
    "woodwork inspection Hyderabad",
    "wood repair Hyderabad",
    "carpenter services Hyderabad",
    "cabinet inspection Hyderabad",
    "woodwork near me Hyderabad",

    // Secondary — Inspection types
    "new home inspection Hyderabad",
    "resale home inspection Hyderabad",
    "pre-handover inspection Hyderabad",
    "rental property inspection Hyderabad",
    "snagging inspection Hyderabad",
    "building defect inspection Hyderabad",
    "RERA area verification Hyderabad",

    // Secondary — Area-specific (Hyderabad localities)
    "home inspection Gachibowli",
    "home inspection Kondapur",
    "home inspection Banjara Hills",
    "home inspection Jubilee Hills",
    "home inspection Madhapur",
    "home inspection Kukatpally",
    "home inspection Hitech City",
    "home inspection Miyapur",
    "home inspection Manikonda",
    "home inspection Bachupally",
    "home inspection Kompally",
    "home inspection Nallagandla",
    "home inspection Secunderabad",

    // Long-tail — High buyer intent
    "best home inspection company in Hyderabad",
    "certified plumbing inspection near me",
    "electrical safety inspection before possession",
    "woodwork quality check before buying flat",
    "home inspection before property purchase Hyderabad",
    "pre-possession flat inspection Hyderabad",
    "new flat inspection checklist Hyderabad",
    "thermographic seepage detection Hyderabad",
    "moisture meter dampness check Hyderabad",
    "structural crack inspection Hyderabad",
    "floor hollow tile check Hyderabad",
    "pest termite inspection Hyderabad",
    "home inspection with digital report",
    "hitquality home inspection",
  ],

  authors: [{ name: "HitQuality" }],
  creator: "HitQuality",
  publisher: "HitQuality",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── OPEN GRAPH (Facebook / LinkedIn / WhatsApp previews) ─────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hitquality.in",
    siteName: "HitQuality",
    title: "HitQuality | Best Home Inspection in Hyderabad",
    description:
      "Expert plumbing repair checks, electrical inspections & woodwork assessments by certified inspectors in Hyderabad. 100+ point checklist. Book free consultation!",
    images: [
      {
        url: "https://hitquality.in/images/Hero2.png",
        width: 1200,
        height: 630,
        alt: "HitQuality - Best Home Inspection, Plumbing & Electrical Services in Hyderabad",
      },
    ],
  },

  // ─── TWITTER CARD ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Best Home Inspection in Hyderabad | HitQuality",
    description:
      "Certified plumbing checks, electrical inspections & woodwork assessments. 100+ point checklist. Serving Hyderabad & nearby areas.",
    images: ["https://hitquality.in/images/Hero2.png"],
  },

  alternates: {
    canonical: "https://hitquality.in",
  },
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children} <WhatsAppButton />
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}

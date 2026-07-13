import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT, BANK } from "@/lib/data";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCond = Barlow_Condensed({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-cond",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://red.filmwithbigstory.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RED Komodo X Camera Rental Dubai | BIG STORY Film Production",
  description:
    "Rent the RED Komodo X 6K in Dubai. Below-market rates, certified RED specialist on set, free delivery. Full production kit from AED 900/day. Netflix-approved. Book now.",
  keywords: [
    "RED Komodo X rental Dubai",
    "cinema camera rental Dubai",
    "RED camera rental UAE",
    "film equipment rental Dubai",
    "DOP camera hire Dubai",
    "production camera rental",
    "professional camera rental Dubai",
    "RED Komodo rental",
    "6K camera Dubai",
    "Netflix approved camera rental Dubai",
  ],
  alternates: { canonical: "https://www.filmwithbigstory.com/" },
  openGraph: {
    title: "RED Komodo X Camera Rental Dubai | BIG STORY Film Production",
    description:
      "Rent the RED Komodo X 6K in Dubai. Below-market rates, certified RED specialist on set, free delivery. Full production kit from AED 900/day. Netflix-approved.",
    url: SITE_URL,
    siteName: "BIG STORY Film Production",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RED Komodo X Camera Rental Dubai | BIG STORY Film Production",
    description:
      "Rent the RED Komodo X 6K in Dubai. Below-market rates, certified RED specialist on set, free delivery. From AED 900/day.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BIG STORY Film Production — RED Komodo X Rental",
  description:
    "RED Komodo X 6K cinema camera rental in Dubai with certified on-set specialist and free delivery.",
  image: `${SITE_URL}/og.jpg`,
  url: SITE_URL,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "AED 900–1,800",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
  sameAs: [CONTACT.instagramMainUrl, CONTACT.instagramUrl],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "RED Komodo X 6K Camera Rental",
    },
    priceCurrency: "AED",
    price: "900",
  },
  paymentAccepted: "Bank Transfer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${barlow.variable} ${barlowCond.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

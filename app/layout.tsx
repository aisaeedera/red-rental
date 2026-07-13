import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT, PACKAGES } from "@/lib/data";

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
const TITLE = "RED Komodo X 6K Rental Dubai | AED 900/day | BIG STORY";
const DESCRIPTION =
  "RED Komodo X 6K cinema camera rental in Dubai from AED 900/day. Below-market rates, certified RED specialist on set, free delivery within Dubai. Netflix-approved cinema camera rental across the UAE — full film equipment kits with cine lenses, lighting & audio. Book now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "RED Komodo X rental Dubai",
    "cinema camera rental Dubai",
    "RED Komodo X 6K",
    "RED camera rental UAE",
    "film equipment rental Dubai",
    "Netflix approved camera Dubai",
    "RED Komodo rental",
    "DOP camera hire Dubai",
    "6K camera Dubai",
    "cinema camera rental UAE",
  ],
  authors: [{ name: "BIG STORY · RED RENTAL" }],
  creator: "BIG STORY · RED RENTAL",
  publisher: "BIG STORY · RED RENTAL",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "BIG STORY · RED RENTAL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "RED Komodo X 6K cinema camera rental in Dubai — BIG STORY · RED RENTAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "RED Komodo X 6K cinema camera rental in Dubai from AED 900/day. Certified RED specialist on set, free delivery, Netflix-approved. Book now.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ---------- Schema.org structured data (JSON-LD @graph) ----------
const BIZ_ID = `${SITE_URL}/#business`;

const localBusiness = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": BIZ_ID,
  name: "BIG STORY · RED RENTAL",
  description:
    "RED Komodo X 6K cinema camera rental in Dubai with a certified on-set RED specialist and free delivery within Dubai. Full film production kits from AED 900/day.",
  image: `${SITE_URL}/og.jpg`,
  url: SITE_URL,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "AED 900–1800",
  currenciesAccepted: "AED",
  paymentAccepted: "Bank Transfer",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ras Al Khaimah",
    "Ajman",
    "Al Ain",
    "Fujairah",
  ].map((name) => ({ "@type": "City", name })),
  sameAs: [CONTACT.instagramMainUrl, CONTACT.instagramUrl],
  openingHours: "Mo-Su 08:00-22:00",
};

const contactPoint = {
  "@type": "ContactPoint",
  "@id": `${SITE_URL}/#contact`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  contactType: "sales",
  areaServed: "AE",
  availableLanguage: ["en", "ar"],
};

const services = {
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  serviceType: "Cinema Camera Rental",
  name: "RED Komodo X 6K Cinema Camera Rental Dubai",
  provider: { "@id": BIZ_ID },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "RED Komodo X Rental Packages",
    itemListElement: PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.name,
      priceCurrency: "AED",
      price: String(p.price),
      description: p.desc,
    })),
  },
};

const products = PACKAGES.map((p) => ({
  "@type": "Product",
  "@id": `${SITE_URL}/#product-${p.id}`,
  name: `${p.name} — RED Komodo X Rental Dubai`,
  description: p.desc,
  brand: { "@type": "Brand", name: "RED Digital Cinema" },
  category: "Cinema Camera Rental",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    price: String(p.price),
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#packages`,
    seller: { "@id": BIZ_ID },
  },
}));

const videoObject = {
  "@type": "VideoObject",
  "@id": `${SITE_URL}/#showreel`,
  name: "BIG STORY · RED RENTAL — RED Komodo X 6K Showreel",
  description:
    "Cinema showreel shot on the RED Komodo X 6K, the flagship camera in the BIG STORY · RED RENTAL Dubai kit.",
  thumbnailUrl: [`${SITE_URL}/og.jpg`],
  uploadDate: "2026-07-13",
  contentUrl: "https://vimeo.com/1131424506",
  embedUrl: "https://player.vimeo.com/video/1131424506",
  publisher: { "@id": BIZ_ID },
};

const FAQS = [
  {
    q: "How much does it cost to rent a RED Komodo X in Dubai?",
    a: "RED Komodo X rental in Dubai starts at AED 900/day for the camera body-only package. The RED Cinema Master Kit is AED 1,400/day and the RED Flagship Full Bundle — camera, cine lenses, lighting and audio — is AED 1,800/day. All rates are launch pricing, below the Dubai market rate.",
  },
  {
    q: "Do you deliver the cinema camera rental?",
    a: "Yes. Delivery and pickup are free anywhere within Dubai, with the equipment set up on arrival by our team. Delivery to other UAE emirates — Abu Dhabi, Sharjah, RAK, Ajman, Al Ain and Fujairah — is available from AED 200.",
  },
  {
    q: "Is the RED Komodo X Netflix approved?",
    a: "Yes. The RED Komodo X 6K is a Netflix-approved cinema camera with a Super35 global shutter sensor, 16+ stops of dynamic range and REDCODE RAW recording — broadcast and streaming compliant.",
  },
  {
    q: "Does the rental include a camera operator or specialist?",
    a: "A certified RED camera specialist is included automatically with the Flagship Full Bundle and available as an add-on for any package. They handle setup, rigging, focus pulling, on-set technical support and end-of-day teardown.",
  },
  {
    q: "What is included in the RED Komodo X flagship bundle?",
    a: "The AED 1,800/day flagship bundle is a complete film set: RED Komodo X 6K body, DZOFILM Arles T1.4 cine prime lens set, Aputure and Nanlite lighting, a Zoom F8n Pro audio recording rig, wireless monitoring and follow focus, grip and a certified RED specialist on set — delivered in a dedicated van.",
  },
  {
    q: "Do you rent cinema cameras outside Dubai in the UAE?",
    a: "Yes. BIG STORY · RED RENTAL serves the whole UAE. We deliver RED Komodo X rental kits to Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Al Ain and Fujairah with transport added to the rental invoice.",
  },
  {
    q: "How do I book a RED Komodo X rental in Dubai?",
    a: "Pick your dates and package in the online booking form, send the order via WhatsApp for confirmation, then secure the booking with a bank transfer. Our specialist arrives on the shoot day with the full kit loaded, assembled and calibrated.",
  },
];

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const howTo = {
  "@type": "HowTo",
  "@id": `${SITE_URL}/#howtobook`,
  name: "How to book a RED Komodo X rental in Dubai",
  description:
    "Book a RED Komodo X 6K cinema camera rental in Dubai in three steps with BIG STORY · RED RENTAL.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Pick your dates & package", text: "Use the online booking form to add each shoot day, select a package and choose a transport zone." },
    { "@type": "HowToStep", position: 2, name: "Send via WhatsApp", text: "Send your order via WhatsApp — we confirm availability within a few hours." },
    { "@type": "HowToStep", position: 3, name: "Bank transfer to confirm", text: "Transfer the rental amount by bank transfer to lock in your booking. Our specialist then arrives ready to shoot." },
  ],
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "RED Komodo X Packages", item: `${SITE_URL}/#packages` },
    { "@type": "ListItem", position: 3, name: "Rental Agreements", item: `${SITE_URL}/#agreements` },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    localBusiness,
    contactPoint,
    services,
    ...products,
    videoObject,
    faqPage,
    howTo,
    breadcrumb,
  ],
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

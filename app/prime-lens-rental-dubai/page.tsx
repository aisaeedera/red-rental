import type { Metadata } from "next";
import LensHeader from "@/components/LensHeader";
import { Footer } from "@/components/Sections";

// VERIFIED lens facts sourced from:
//   https://www.dzofilm.com/en/products/arles-prime
//   https://www.cined.com/dzofilm-arles-t-1-4-prime-cine-5-lens-set-announced/
// (Arles T1.4 5-lens core 25/35/50/75/100mm; full line 14-180mm with 14mm T1.9,
//  135mm T1.8, 180mm T2.4; 46.5mm image circle; PL/EF/LPL mounts; 95mm front;
//  0.8 MOD gears; 16 iris blades; large-format cinema coverage.)

const SITE_URL = "https://red.filmwithbigstory.com";
const CANONICAL = `${SITE_URL}/prime-lens-rental-dubai`;
const WA = "https://wa.me/971528418108";
const TITLE = "Prime Lens Rental Dubai | DZOFILM Arles T1.4 Cine Set | BIG STORY";
const DESCRIPTION =
  "Prime lens rental in Dubai from BIG STORY. The DZOFILM Arles T1.4 cine prime set, 25 to 100mm, PL, EF and LPL mounts, for RED Komodo X and large-format bodies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, ar: CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "website",
    siteName: "BIG STORY · RED RENTAL",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Prime Lens Rental",
      name: "Prime Lens Rental Dubai",
      provider: {
        "@type": "ProfessionalService",
        name: "BIG STORY / RED RENTAL",
        areaServed: "Dubai, UAE",
      },
      areaServed: "Dubai, United Arab Emirates",
      url: CANONICAL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Prime Lens Rental Dubai", item: CANONICAL },
      ],
    },
  ],
};

const SPECS = [
  { dt: "Core prime set", dd: "25mm, 35mm, 50mm, 75mm and 100mm, every focal length at T1.4." },
  { dt: "Full Arles range", dd: "14mm to 180mm on request. 14mm is T1.9, 135mm is T1.8, 180mm is T2.4." },
  { dt: "Sensor coverage", dd: "46.5mm image circle covering Vista Vision and full-frame sensors." },
  { dt: "Mount options", dd: "User-swappable PL, EF and LPL, no service visit needed to change." },
  { dt: "Handling", dd: "Shared 95mm front, 0.8 MOD focus and iris gears, 16 blade iris." },
  { dt: "Bodies", dd: "ARRI Alexa Mini LF, Sony VENICE 2, RED V-Raptor and the Super35 RED Komodo X." },
];

export default function PrimeLensRentalDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LensHeader />
      <main>
        <section className="lens-hero">
          <div className="wrap">
            <div className="section-eyebrow">Dubai Kit Room · Cine Primes</div>
            <h1>
              Prime <span className="gold">Lens Rental</span> in <span className="red">Dubai</span>
            </h1>
            <p className="lens-lede">
              The DZOFILM Arles T1.4 cine prime set, matched across focal lengths and built for
              large-format work. Available in our rental inventory for the RED Komodo X and other
              cinema bodies.
            </p>
            <div className="lens-cta">
              <a className="btn btn-red" href="/#packages">
                View Rental Packages
              </a>
              <a className="btn btn-wa" href={WA} target="_blank" rel="noopener noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-eyebrow">The Set</div>
            <h2 className="section-title">
              A Matched <span className="gold">Prime Lens Rental</span> Package
            </h2>
            <div className="lens-prose">
              <p>
                A prime set earns its place through consistency, and the DZOFILM Arles T1.4 range
                delivers it. Our prime lens rental in Dubai is built around the five-lens core,
                25mm, 35mm, 50mm, 75mm and 100mm, with every focal length opening to T1.4. Colour,
                contrast and focus feel stay matched across the set, so a scene cut together from
                four focal lengths holds together on screen.
              </p>
              <p>
                Behind that fast aperture sits a 46.5mm image circle covering Vista Vision and
                full-frame sensors, which puts the Arles primes on large-format bodies such as the
                ARRI Alexa Mini LF, Sony VENICE 2 and RED V-Raptor, then downscales happily onto a
                Super35 body like the RED Komodo X. When coverage past the core five is called for,
                the wider Arles line runs 14mm to 180mm, with the 14mm at T1.9, the 135mm at T1.8
                and the 180mm at T2.4.
              </p>
              <p>
                Handling was clearly a design priority. Each lens carries a shared 95mm front, 0.8
                MOD focus and iris gears, and a 16 blade iris that keeps highlights round. Mounts
                move between PL, EF and LPL without a service visit, so the same glass follows the
                camera you pick.
              </p>
              <p>
                We stock these primes in our Dubai kit room, lens-coated and matte-box ready. Pair
                them with a RED Komodo X body and a certified specialist, and the package reaches
                your location built and calibrated.
              </p>
            </div>

            <dl className="lens-spec-grid">
              {SPECS.map((s) => (
                <div className="lens-spec-item" key={s.dt}>
                  <dt>{s.dt}</dt>
                  <dd>{s.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" style={{ background: "var(--black-2)" }}>
          <div className="wrap">
            <div className="section-eyebrow">Pair It Up</div>
            <h2 className="section-title">
              Build The <span className="red">Full Kit</span>
            </h2>
            <p className="section-intro">
              These primes were chosen to sit behind a RED body. Add a camera package, or browse
              the wider lens lineup.
            </p>
            <div className="lens-crosslinks">
              <a className="lens-crosslink-card" href="/">
                <h3>RED Komodo X Rental</h3>
                <p>
                  The Super35 RED Komodo X body, media, monitoring and grip, delivered ready to
                  shoot with the Arles primes fitted.
                </p>
                <span className="arrow">See the camera packages →</span>
              </a>
              <a className="lens-crosslink-card" href="/lens-rental-dubai">
                <h3>Cinema Lens Rental Dubai</h3>
                <p>
                  The wider view of our kit room, from cine zooms to hybrid photo primes for Sony
                  E and Canon RF shooters.
                </p>
                <span className="arrow">Browse all lenses →</span>
              </a>
            </div>
            <div className="lens-cta">
              <a className="btn btn-gold" href="/#packages">
                Book RED Komodo X
              </a>
              <a className="btn btn-ghost" href="/lowa-probe-lens-rental-dubai">
                Laowa Probe Lens
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

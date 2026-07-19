import type { Metadata } from "next";
import LensHeader from "@/components/LensHeader";
import { Footer } from "@/components/Sections";

// VERIFIED lens facts sourced from:
//   https://www.dzofilm.com/en/products/arles-prime
//   https://www.cined.com/dzofilm-arles-t-1-4-prime-cine-5-lens-set-announced/
// (DZOFILM Arles T1.4 cine prime set: 25/35/50/75/100mm, 46.5mm image circle,
//  PL/EF/LPL mounts, 95mm front, 0.8 MOD, 16 iris blades.)

const SITE_URL = "https://red.filmwithbigstory.com";
const CANONICAL = `${SITE_URL}/lens-rental-dubai`;
const WA = "https://wa.me/971528418108";
const TITLE = "Cinema Lens Rental Dubai | DZOFILM Arles Cine Primes | BIG STORY";
const DESCRIPTION =
  "Cinema lens rental in Dubai from BIG STORY. DZOFILM Arles T1.4 cine primes, PL, EF and LPL mounts, matte-box ready glass and free Dubai delivery. Book a lens kit.";

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
      serviceType: "Cinema Lens Rental",
      name: "Cinema Lens Rental Dubai",
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
        { "@type": "ListItem", position: 2, name: "Cinema Lens Rental Dubai", item: CANONICAL },
      ],
    },
  ],
};

const SPECS = [
  { dt: "Focal lengths", dd: "25mm, 35mm, 50mm, 75mm, 100mm at T1.4. Wider Arles line reaches 14mm to 180mm." },
  { dt: "Mount options", dd: "User-swappable PL, EF and LPL, so the set runs on ARRI, Sony and RED bodies." },
  { dt: "Front diameter", dd: "95mm across the set with standard 0.8 MOD gears, matte-box friendly." },
  { dt: "Sensor coverage", dd: "46.5mm image circle, covering Vista Vision and full-frame sensors." },
  { dt: "Iris", dd: "16 blade iris for rounded, filmic out-of-focus highlights." },
  { dt: "Ready to shoot", dd: "Every lens ships lens-coated and matte-box ready from our Dubai kit room." },
];

export default function LensRentalDubaiPage() {
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
            <div className="section-eyebrow">Dubai Kit Room · Cinema Glass</div>
            <h1>
              Cinema <span className="gold">Lens Rental</span> in <span className="red">Dubai</span>
            </h1>
            <p className="lens-lede">
              A working cine lens lineup, built around the DZOFILM Arles T1.4 prime set and
              matched to the RED Komodo X. Booked on its own or added to a full RED body and
              grip package, delivered across Dubai.
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
            <div className="section-eyebrow">Inventory</div>
            <h2 className="section-title">
              What Our Dubai <span className="gold">Lens Rental</span> Kit Room Stocks
            </h2>
            <div className="lens-prose">
              <p>
                BIG STORY runs a working camera department, so the glass you book already ships
                with real shoots behind it. Our cinema lens rental in Dubai centres on the
                DZOFILM Arles T1.4 prime set, a large-format cine range that covers Vista Vision
                and full-frame sensors and pairs cleanly with the RED Komodo X. Focal lengths run
                25mm, 35mm, 50mm, 75mm and 100mm, each at a fast T1.4, while the wider Arles line
                reaches 14mm through 180mm when a job needs it.
              </p>
              <p>
                Every lens leaves the kit room lens-coated and matte-box ready. The Arles set
                shares a 95mm front diameter and standard 0.8 MOD gears, so follow focus units,
                matte boxes and filter trays swap across the whole range without shims. Mounts
                stay user-swappable between PL, EF and LPL, which keeps the set usable on ARRI,
                Sony and RED bodies alike.
              </p>
              <p>
                Beyond the prime set, we carry cine zooms plus photo and cine hybrid options.
                Sony E-mount and Canon RF photo primes for hybrid shooters are available in our
                kit room on request. Tell us the sensor, the mount and the look you are after,
                and we build the lens package around it.
              </p>
              <p>
                Rates sit below the Dubai market and delivery inside the city is free. A certified
                specialist can ride along to handle mount changes, back-focus and lens hygiene on
                set. Book a lens package on its own, or add it to a RED Komodo X body and grip for
                a complete film set at your location.
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
            <div className="section-eyebrow">Go Deeper</div>
            <h2 className="section-title">
              Specialist <span className="red">Lens Options</span>
            </h2>
            <p className="section-intro">
              Two focused pages cover the requests we field most. Pick the set that fits the
              shot, or ask us to combine them.
            </p>
            <div className="lens-crosslinks">
              <a className="lens-crosslink-card" href="/prime-lens-rental-dubai">
                <h3>Prime Lens Rental Dubai</h3>
                <p>
                  The DZOFILM Arles T1.4 cine prime set in detail, focal by focal, for controlled
                  large-format work.
                </p>
                <span className="arrow">Explore prime lenses →</span>
              </a>
              <a className="lens-crosslink-card" href="/lowa-probe-lens-rental-dubai">
                <h3>Laowa Probe Lens Rental Dubai</h3>
                <p>
                  The Laowa 24mm f/14 2x macro probe for tight, tabletop and bug-eye macro moves
                  a normal lens cannot reach.
                </p>
                <span className="arrow">Explore the probe lens →</span>
              </a>
            </div>
            <div className="lens-cta">
              <a className="btn btn-gold" href="/#packages">
                Book RED Komodo X
              </a>
              <a className="btn btn-ghost" href="/">
                RED Komodo X Rental
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

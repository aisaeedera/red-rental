import type { Metadata } from "next";
import LensHeader from "@/components/LensHeader";
import { Footer } from "@/components/Sections";

// VERIFIED lens facts sourced from:
//   https://www.bhphotovideo.com/c/product/1430596-REG
//   https://laowa.com.au/product/probe/
// (Laowa 24mm f/14 2X Macro Probe by Venus Optics: f/14 constant to f/40,
//  2:1 macro, 47cm min focus, 20mm working distance, 85 deg AOV, built-in LED
//  ring at tip, waterproof front barrel, covers full-frame 35mm and Super35,
//  cine version in Arri PL and Canon EF with geared rings.)

const SITE_URL = "https://red.filmwithbigstory.com";
const CANONICAL = `${SITE_URL}/lowa-probe-lens-rental-dubai`;
const WA = "https://wa.me/971528418108";
const TITLE = "Laowa Probe Lens Rental Dubai | 24mm f/14 2x Macro | BIG STORY";
const DESCRIPTION =
  "Laowa probe lens rental in Dubai from BIG STORY. The Laowa 24mm f/14 2x macro probe, bug-eye macro with LED tip light, for RED Komodo X and full-frame bodies.";

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
      serviceType: "Macro Probe Lens Rental",
      name: "Laowa Probe Lens Rental Dubai",
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
        { "@type": "ListItem", position: 2, name: "Laowa Probe Lens Rental Dubai", item: CANONICAL },
      ],
    },
  ],
};

const SPECS = [
  { dt: "Magnification", dd: "24mm focal length with a 2:1 macro reproduction ratio, twice life size." },
  { dt: "Aperture", dd: "Constant f/14, stopping down to f/40 for deep macro depth of field." },
  { dt: "Angle of view", dd: "85 degrees, the wide bug-eye perspective the probe is known for." },
  { dt: "Focusing", dd: "47cm minimum focus with a 20mm working distance at the lens tip." },
  { dt: "Light and sealing", dd: "Built-in LED ring light at the tip and a waterproof front barrel." },
  { dt: "Coverage and mounts", dd: "Full-frame 35mm and Super35. Cine version in Arri PL or Canon EF, geared." },
];

export default function LowaProbeLensRentalDubaiPage() {
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
            <div className="section-eyebrow">Dubai Kit Room · Macro Probe</div>
            <h1>
              Laowa <span className="gold">Probe Lens Rental</span> in <span className="red">Dubai</span>
            </h1>
            <p className="lens-lede">
              The Laowa 24mm f/14 2x macro probe, a long, thin, LED-lit lens for tight, tabletop
              and bug-eye macro. Available in our rental inventory for the RED Komodo X and
              full-frame bodies.
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
            <div className="section-eyebrow">The Tool</div>
            <h2 className="section-title">
              Why Book The <span className="gold">Laowa Probe Lens</span>
            </h2>
            <div className="lens-prose">
              <p>
                Some shots need a lens shaped like nothing else, and the Laowa 24mm f/14 2X Macro
                Probe is that tool. Venus Optics built a long, pencil-thin barrel that reaches into
                spaces a normal macro lens cannot enter, then added a 2:1 reproduction ratio so a
                subject fills the frame at twice life size. Our Laowa probe lens rental in Dubai
                puts that reach on your RED Komodo X or full-frame body for product, food,
                automotive and tabletop work.
              </p>
              <p>
                The optical design fixes aperture at f/14 and stops down to f/40, trading light for
                the deep depth of field macro needs most. An 85 degree angle of view delivers the
                wide bug-eye perspective the probe is known for, holding foreground detail and
                background context in a single shot. Minimum focus sits at 47cm with a 20mm working
                distance at the tip, and a built-in LED ring light around the front lights a subject
                from inches away.
              </p>
              <p>
                Because the front barrel is waterproof, the lens can dip just below a water surface
                for splash and pour shots. Coverage spans full-frame 35mm and Super35 sensors, and
                the cine version ships in Arri PL or Canon EF with geared focus and iris rings for
                follow focus.
              </p>
              <p>
                Book the probe on its own, or pair it with a RED Komodo X body and a certified
                operator who knows how to light and rig it. Delivery inside Dubai is free, and a
                specialist can join the shoot to run the move.
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
            <div className="section-eyebrow">Round Out The Kit</div>
            <h2 className="section-title">
              Add A Body And <span className="red">More Glass</span>
            </h2>
            <p className="section-intro">
              The probe shines next to a matched prime set and a RED body. Combine it into one
              delivery.
            </p>
            <div className="lens-crosslinks">
              <a className="lens-crosslink-card" href="/lens-rental-dubai">
                <h3>Cinema Lens Rental Dubai</h3>
                <p>
                  The full kit room, including the DZOFILM Arles cine primes that pair with the
                  probe on a macro day.
                </p>
                <span className="arrow">Browse all lenses →</span>
              </a>
              <a className="lens-crosslink-card" href="/">
                <h3>RED Komodo X Rental</h3>
                <p>
                  The Super35 RED Komodo X body, media and monitoring, delivered ready to run the
                  probe on set.
                </p>
                <span className="arrow">See the camera packages →</span>
              </a>
            </div>
            <div className="lens-cta">
              <a className="btn btn-gold" href="/#packages">
                Book RED Komodo X
              </a>
              <a className="btn btn-ghost" href="/prime-lens-rental-dubai">
                Prime Lens Rental
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

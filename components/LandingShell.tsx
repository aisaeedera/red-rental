import type { ReactNode } from "react";
import { Footer } from "@/components/Sections";
import { CONTACT } from "@/lib/data";

const WA_URL = `https://wa.me/${CONTACT.phoneE164}`;

/* Shared shell for the SEO landing pages. Renders a hero (eyebrow + H1 +
   intro + CTAs), the page body sections, and the site-wide Footer. Reuses
   the existing design-system classes only, no new tokens. */
export function LandingShell({
  eyebrow,
  h1,
  intro,
  children,
}: {
  eyebrow: string;
  h1: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <section className="section" style={{ paddingTop: 132 }}>
          <div className="wrap">
            <div className="section-eyebrow">{eyebrow}</div>
            <h1 className="section-title">{h1}</h1>
            <p className="section-intro">{intro}</p>
            <div className="hero-cta">
              <a className="btn btn-red" href="/#packages">
                View Packages
              </a>
              <a
                className="btn btn-wa"
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}

/* A body section with an H2 heading styled from the display font. */
export function LandingSection({
  heading,
  alt,
  children,
}: {
  heading: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className="section"
      style={alt ? { background: "var(--black-2)" } : undefined}
    >
      <div className="wrap">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 4vw, 46px)",
            lineHeight: 1,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}

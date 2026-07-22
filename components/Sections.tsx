import {
  TICKER,
  AUDIENCES,
  KIT_CATEGORIES,
  FIRE_SALE_QUOTE,
  DELIVERY,
  LAUNCH_TCS,
  STEPS,
  SPECIALIST_POINTS,
  SPECIALIST_FEE,
  BANK,
  CONTACT,
  CONTACT_CARDS,
  AGREEMENTS,
} from "@/lib/data";
import { ContactForm } from "./Forms";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-video" aria-hidden>
        <iframe
          src="https://player.vimeo.com/video/1131424506?autoplay=1&muted=1&loop=1&background=1&autopause=0"
          title="Big Story RED reel"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
      </div>
      <div className="hero-video-overlay" aria-hidden />
      <div className="wrap">
        <div className="hero-eyebrow">Dubai&apos;s Cinema Camera Rental Specialists</div>
        <h1 className="hero-title">
          RENT <span className="red">RED</span>
          <br />
          SHOOT
          <br />
          <span className="gold">CINEMA-GRADE</span>
        </h1>
        <div className="hero-subtitle">
          Netflix-Approved · On-Set Specialist · Delivered To You
        </div>
        <div className="hero-features">
          <span className="hero-feature">
            <b>Delivered</b> Ready-To-Shoot
          </span>
          <span className="hero-feature">
            <b>On-Set</b> RED Specialist Included
          </span>
          <span className="hero-feature">
            <b>Lower</b> Than Market Rate
          </span>
          <span className="hero-feature">
            <b>Book</b> In 60 Seconds
          </span>
        </div>
        <div className="hero-cta">
          <a className="btn btn-red" href="#packages">
            View Packages
          </a>
          <a className="btn btn-gold" href="#book">
            Book Now 🎬
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TICKER ---------------- */
export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PERFECT FOR ---------------- */
export function Perfect() {
  return (
    <section className="section" id="perfect">
      <div className="wrap">
        <div className="section-eyebrow">Who This Is For</div>
        <h2 className="section-title">
          Perfect For Your <span className="red">Production</span>
        </h2>
        <p className="section-intro">
          BIG STORY · RED RENTAL is Dubai&apos;s specialist for RED Komodo X 6K
          cinema camera rental - a Netflix-approved camera delivered ready-to-shoot with a
          certified RED specialist on set. Whether you need cinema camera rental in Dubai for a
          TVC, a RED camera rental across the UAE for a short film, or full film equipment rental
          in Dubai for a branded campaign, every kit ships from AED 900/day.
        </p>
        <div className="grid grid-5" style={{ marginTop: 40 }}>
          {AUDIENCES.map((a) => (
            <div className="card audience-card" key={a.title}>
              <div className="icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- KIT MANIFEST ---------------- */
export function KitManifest() {
  return (
    <section className="section" id="kit" style={{ background: "var(--black-2)" }}>
      <div className="wrap">
        <div className="section-eyebrow">Flagship Bundle Breakdown</div>
        <h2 className="section-title">
          Everything In The <span className="red">Fire Sale Kit</span>
        </h2>
        <p className="section-intro">
          People often assume the flagship is just a camera with a lens. Here&apos;s the full
          manifest - this is an entire film set delivered to your location.
        </p>

        <div className="grid grid-2">
          {KIT_CATEGORIES.map((cat) => (
            <div className="kit-category" key={cat.label}>
              <div className="kit-category-label">{cat.label}</div>
              <ul className="kit-list">
                {cat.items.map((it) => (
                  <li className="kit-item" key={it.name}>
                    <span className="kit-item-name">{it.name}</span>
                    {it.note && <span className="kit-item-note">{it.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="fire-sale-callout">
          <p>&ldquo;{FIRE_SALE_QUOTE}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DELIVERY ---------------- */
export function Delivery() {
  return (
    <section className="section" id="delivery">
      <div className="wrap">
        <div className="section-eyebrow">Logistics</div>
        <h2 className="section-title">
          Delivery &amp; <span className="gold">Transport</span>
        </h2>
        <p className="section-intro">
          Free RED Komodo X rental delivery within Dubai, with cinema camera rental delivery
          available across the UAE - Abu Dhabi, Sharjah, RAK, Ajman, Al Ain and Fujairah. All RED
          equipment is transported in a dedicated van by our team. There is no client pickup - we
          come to you, and the kit is set up ready-to-shoot on arrival.
        </p>
        <div className="grid grid-4">
          {DELIVERY.map((d) => (
            <div className="delivery-card" key={d.title}>
              <div className="delivery-icon">{d.icon}</div>
              <div className="delivery-title">{d.title}</div>
              <div className={`delivery-rate ${d.free ? "free" : ""}`}>{d.rate}</div>
              <div className="delivery-desc">{d.desc}</div>
              <div className="delivery-note">{d.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LAUNCH PRICING + T&Cs ---------------- */
export function Launch() {
  return (
    <section className="section launch" id="launch">
      <div className="wrap">
        <div className="section-eyebrow">Limited Availability</div>
        <h2 className="section-title">
          Launch Pricing - <span className="red">Limited Productions</span>
        </h2>
        <p className="section-intro">
          These rates are launch pricing available to a limited number of productions. We are
          selectively onboarding productions that align with the BIG STORY portfolio - once
          our calendar fills, rates will move to standard market pricing.
        </p>
        <p className="section-intro" style={{ marginTop: -28 }}>
          In return for launch pricing, we ask something simple: give us the access to
          document your production. You get Netflix-grade cinema equipment at rates Dubai
          hasn&apos;t seen before. We get the portfolio content to build our presence on{" "}
          <a className="hl-gold" href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
            @{CONTACT.instagram}
          </a>
          .
        </p>

        <div className="launch-box">
          <h3>⏳ Limited Slots Remaining</h3>
          <p className="muted">
            We only take a limited number of productions per month at launch rates. Book early
            to lock in your rate before availability closes.
          </p>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-cond)",
            fontSize: 24,
            textTransform: "uppercase",
            marginTop: 40,
            marginBottom: 6,
          }}
        >
          Rental T&amp;Cs - What We Ask In Return
        </h3>
        <div className="tcs">
          {LAUNCH_TCS.map((t) => (
            <div className="tc" key={t.num}>
              <div className="tc-num">{t.num}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mono" style={{ fontSize: 12, color: "var(--gray-4)", marginTop: 18 }}>
          ℹ All content used exclusively within our business channels - @{CONTACT.instagram} and
          BIG STORY Film Production platforms only.
        </p>
      </div>
    </section>
  );
}

/* ---------------- HOW TO BOOK ---------------- */
export function HowToBook() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-eyebrow">Simple Process</div>
        <h2 className="section-title">
          How To <span className="red">Book</span>
        </h2>
        <div className="steps" style={{ marginTop: 40 }}>
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="launch-box" style={{ marginTop: 34 }}>
          <h3>✉ Prefer Email?</h3>
          <p className="muted">
            Reach us directly at {CONTACT.email} - we respond within 24 hours.
          </p>
          <a className="btn btn-ghost" href={`mailto:${CONTACT.email}`} style={{ marginTop: 14 }}>
            Email Us →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SPECIALIST ---------------- */
export function Specialist() {
  return (
    <section className="section" id="specialist" style={{ background: "var(--black-2)" }}>
      <div className="wrap">
        <div className="section-eyebrow">On-Set Human</div>
        <h2 className="section-title">
          RED Certified <span className="red">Camera Specialist</span>
        </h2>
        <p className="section-intro">
          Your on-set RED operator handles everything from van unloading to final pack-down -
          so your crew can focus entirely on the shot. Full logistics, rigging, operation
          support, focus pulling, camera technical issues, and end-of-day disassembly and
          repacking into the van. Included automatically with the Flagship Bundle. Available as
          a standalone add-on for any other package.
        </p>

        <div className="spec-grid">
          <div className="spec-price-card ours">
            <div className="badge badge-gold" style={{ marginBottom: 14 }}>
              BIG STORY Rate · Limited Time
            </div>
            <div className="spec-rate">{SPECIALIST_FEE} AED</div>
            <div className="mono" style={{ color: "var(--white-dim)", fontSize: 13, marginTop: 6 }}>
              ⏳ Limited-time launch rate · subject to change · per day · 9 hours
            </div>
            <ul className="spec-list">
              {SPECIALIST_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="badge badge-red" style={{ marginTop: 18 }}>
              🔒 Mandatory - auto-included with all RED packages
            </div>
          </div>

          <div className="spec-price-card">
            <div className="badge" style={{ marginBottom: 14 }}>
              Market Rate (Elsewhere)
            </div>
            <div className="spec-rate market">1,500 AED</div>
            <div className="mono" style={{ color: "var(--white-dim)", fontSize: 13, marginTop: 6 }}>
              per day · Dubai market rate
            </div>
            <p className="muted" style={{ marginTop: 18, fontSize: 14 }}>
              RED-certified camera assistants in Dubai typically charge AED 900–1,500/day. BIG
              STORY provides the same expertise at launch pricing - lock in your rate before it
              moves to market.
            </p>
            <p className="muted" style={{ marginTop: 14, fontSize: 13 }}>
              ✓ Included automatically in the RED Flagship Full Bundle · Add separately to any
              other package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAYMENT ---------------- */
export function Payment() {
  return (
    <section className="section" id="payment">
      <div className="wrap">
        <div className="section-eyebrow">Payment</div>
        <h2 className="section-title">
          Bank <span className="gold">Transfer</span>
        </h2>
        <p className="section-intro">
          We accept payment by bank transfer only - zero commission fees. Once your booking is
          confirmed, transfer the amount and send us your receipt.
        </p>
        <div className="bank-card">
          <div className="bank-name">RAK Bank</div>
          <div className="bank-row">
            <span className="bank-label">Account Name</span>
            <span className="bank-value">{BANK.accountName}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">IBAN</span>
            <span className="bank-value">{BANK.iban}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">Swift Code</span>
            <span className="bank-value">{BANK.swift}</span>
          </div>
          <div className="bank-row" style={{ borderBottom: "none" }}>
            <span className="bank-label">Bank</span>
            <span className="bank-value">{BANK.bank}</span>
          </div>
          <p className="muted" style={{ marginTop: 18, fontSize: 14 }}>
            After booking confirmation, transfer the rental amount and send your receipt on
            WhatsApp. We will confirm within a few hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHOT IN RED ---------------- */
export function ShotInRed() {
  return (
    <section className="section" id="portfolio" style={{ background: "var(--black-2)" }}>
      <div className="wrap center">
        <div className="section-eyebrow">From Our Instagram</div>
        <h2 className="section-title">
          Shot In <span className="red">RED</span>
        </h2>
        <p className="section-intro">
          Behind-the-scenes and on-set content from productions shot on our RED Komodo X kit.
        </p>
        <a className="btn btn-gold" href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
          → Follow @{CONTACT.instagram}
        </a>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">
          Contact <span className="red">Us</span>
        </h2>
        <div className="contact-grid" style={{ marginTop: 30, marginBottom: 40 }}>
          {CONTACT_CARDS.map((c) => (
            <div className="contact-card card" key={c.kind}>
              <div className="icon">{c.icon}</div>
              <div className="kind">{c.kind}</div>
              <div className="value">{c.value}</div>
              <div className="sub">{c.sub}</div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ---------------- AGREEMENTS ---------------- */
export function Agreements() {
  return (
    <section className="section" id="agreements" style={{ background: "var(--black-2)" }}>
      <div className="wrap">
        <div className="section-eyebrow">Before You Shoot</div>
        <h2 className="section-title">
          Rental <span className="gold">Agreements</span>
        </h2>
        <p className="section-intro">
          The documents below are our current working versions. They are subject to ongoing
          updates and improvements - the final signed version will always be sent to you
          directly before your shoot date.
        </p>
        <div className="grid grid-2">
          {AGREEMENTS.map((a) => (
            <div className="agreement" key={a.title}>
              <div className="doc-icon">{a.icon}</div>
              <div>
                <h4>{a.title}</h4>
                <div className="fname">{a.fname}</div>
                <p>{a.desc}</p>
                <a
                  className="btn btn-ghost"
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 14, marginBottom: 14 }}
                >
                  📄 View / Download →
                </a>
                <span className="warn">⚠ Subject to updates - final version sent directly to you</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mono" style={{ fontSize: 13, color: "var(--white-dim)", marginTop: 24 }}>
          💬 Questions about the agreement? Email us at {CONTACT.email} or WhatsApp{" "}
          {CONTACT.phoneDisplay}
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              BIG STORY <span className="red">Film Production</span>
            </div>
            <div className="footer-brand-tagline">Dubai, UAE</div>
            <div className="footer-brand-tagline">📞 {CONTACT.phoneDisplay}</div>
            <div className="footer-brand-tagline">✉ {CONTACT.email}</div>
            <div className="footer-brand-tagline">📸 @{CONTACT.instagram}</div>
          </div>
          <div className="footer-col">
            <h5>Packages</h5>
            <ul>
              <li><a href="#kit">RED Camera Brain Only - AED 900</a></li>
              <li><a href="#kit">RED Cinema Master Kit - AED 1,400</a></li>
              <li><a href="#kit">🔥 RED Flagship Full Bundle - AED 1,800</a></li>
              <li><a href="#specialist">RED Camera Specialist - AED 900 (Launch)</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Links</h5>
            <ul>
              <li>
                <a href="https://red.filmwithbigstory.com/">Home</a>
              </li>
              <li>
                <a href="/lens-rental-dubai">Lens Rental Dubai</a>
              </li>
              <li>
                <a href="/prime-lens-rental-dubai">Prime Lens Rental</a>
              </li>
              <li>
                <a href="/lowa-probe-lens-rental-dubai">Laowa Probe Lens Rental</a>
              </li>
              <li>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
                  📸 Follow @{CONTACT.instagram}
                </a>
              </li>
              <li>
                <a href="#agreements">Rental Agreement</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 BIG STORY FILM PRODUCTION · DUBAI, UAE · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}

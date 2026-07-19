"use client";

import { PACKAGES, PKG_FOOTNOTE } from "@/lib/data";
import { useStore } from "./Store";

export default function Packages() {
  const { addItem } = useStore();
  return (
    <section className="section" id="packages">
      <div className="wrap">
        <div className="center">
          <div className="section-eyebrow">Our Packages</div>
          <h2 className="section-title">
            RED Komodo X <span className="red">Rental Packages</span>
          </h2>
          <p className="section-intro">
            Every package includes free delivery within Dubai and a certified RED camera
            specialist. Choose the kit that matches your production scale.
          </p>
        </div>

        <div className="pkg-callout">
          <div>
            <div className="badge badge-gold" style={{ marginBottom: 10 }}>
              20% OFF
            </div>
            <h3>Early Booking Discount, Equipment Only</h3>
            <p className="muted" style={{ fontSize: 13 }}>
              Book 7+ days in advance and pay in full to get 20% off the equipment package.
              The RED specialist fee is limited-time pricing, fixed for current bookings
              only. Discount is applied per eligible shoot day automatically in the booking
              form.
            </p>
          </div>
          <a className="btn btn-gold" href="#book">
            Book Early →
          </a>
        </div>

        <div className="pkg-grid">
          {PACKAGES.map((p) => (
            <div key={p.id} className={`pkg ${p.featured ? "featured" : ""}`}>
              <div className="pkg-tier">{p.tier}</div>
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-price-row">
                {p.market && <span className="pkg-was">{p.market}</span>}
                {p.save && <span className="pkg-save">{p.save}</span>}
              </div>
              <div>
                <span className="pkg-price">AED {p.price.toLocaleString()}</span>
              </div>
              <div className="pkg-price-unit">{p.unit}</div>
              <p className="pkg-desc">{p.desc}</p>
              <div className="pkg-incl-label">What&apos;s Included</div>
              <ul className="pkg-list">
                {p.included.map((it, i) => (
                  <li key={i} className={it.kind ?? ""}>
                    {it.text}
                  </li>
                ))}
              </ul>
              <div className="pkg-actions">
                <a className="btn btn-red" href="#book">
                  Book Now →
                </a>
                <button
                  className="btn btn-ghost"
                  onClick={() =>
                    addItem({
                      key: p.id,
                      name: p.name,
                      price: p.price,
                      unit: p.unit,
                    })
                  }
                >
                  + Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="pkg-note">{PKG_FOOTNOTE}</p>
      </div>
    </section>
  );
}

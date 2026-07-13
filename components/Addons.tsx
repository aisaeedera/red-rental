"use client";

import { ADDONS } from "@/lib/data";
import { useStore } from "./Store";

export default function Addons() {
  const { addItem } = useStore();
  return (
    <section className="section" id="addons">
      <div className="wrap">
        <div className="section-eyebrow">Add-On Equipment</div>
        <h2 className="section-title">
          Also <span className="gold">Available</span>
        </h2>
        <p className="section-intro">Enhance your production with additional equipment.</p>

        <div className="grid grid-3">
          {ADDONS.map((a) => (
            <div className="card" key={a.name}>
              <div className="pkg-tier">{a.category}</div>
              <div className="pkg-name" style={{ fontSize: 26 }}>
                {a.name}
              </div>
              <div className="delivery-rate">
                {a.price} AED <span style={{ fontSize: 13, color: "var(--white-dim)" }}>{a.unit}</span>
              </div>
              <p className="pkg-desc">{a.desc}</p>
              <button
                className="btn btn-ghost"
                onClick={() =>
                  addItem({ key: `addon-${a.name}`, name: a.name, price: a.price, unit: a.unit })
                }
              >
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

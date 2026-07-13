"use client";

import { useStore, waLink } from "./Store";

export default function CartDrawer() {
  const { items, days, setDays, cartOpen, closeCart, removeItem, total } = useStore();

  const message =
    items.length === 0
      ? ""
      : `Hi BIG STORY — I'd like to book:\n${items
          .map((i) => `• ${i.name} — AED ${i.price} ${i.unit}`)
          .join("\n")}\nDays: ${days}\nEstimated total: AED ${total.toLocaleString()} (excl. delivery & overtime)`;

  return (
    <>
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden
      />
      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`} aria-hidden={!cartOpen}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>
        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">No items yet.</p>
          ) : (
            items.map((i) => (
              <div className="cart-line" key={i.key}>
                <div>
                  <div className="name">{i.name}</div>
                  <div className="meta">{i.unit}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="price">AED {i.price.toLocaleString()}</div>
                  <button className="cart-remove" onClick={() => removeItem(i.key)}>
                    remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-foot">
          <div className="cart-line" style={{ borderBottom: "none" }}>
            <span className="meta" style={{ alignSelf: "center" }}>
              DAYS
            </span>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button className="cart-btn" onClick={() => setDays(days - 1)}>
                −
              </button>
              <span className="mono">{days}</span>
              <button className="cart-btn" onClick={() => setDays(days + 1)}>
                +
              </button>
            </div>
          </div>
          <div className="cart-total">
            <span>Total</span>
            <span className="amt">AED {total.toLocaleString()}</span>
          </div>
          <div className="cart-total-note">Excl. delivery and overtime</div>
          <a
            className="btn btn-wa"
            href={items.length ? waLink(message) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%", justifyContent: "center", opacity: items.length ? 1 : 0.5, pointerEvents: items.length ? "auto" : "none" }}
          >
            Book via WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}

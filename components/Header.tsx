"use client";

import { useStore } from "./Store";

const NAV = [
  { href: "#perfect", label: "Perfect For" },
  { href: "#packages", label: "Packages" },
  { href: "#compare", label: "Compare" },
  { href: "#launch", label: "Launch Pricing" },
  { href: "#delivery", label: "Delivery" },
  { href: "#demo", label: "Free Demo" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { items, openCart } = useStore();
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="#top" className="brand">
          BIG STORY <span className="red">· RED</span>
        </a>
        <nav className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <button className="cart-btn" onClick={openCart}>
          🎬 CART {items.length}
        </button>
      </div>
    </header>
  );
}

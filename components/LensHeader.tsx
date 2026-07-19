// Slim header used only by the lens landing pages. Unlike the homepage Header,
// every anchor is ABSOLUTE ("/#packages") so it resolves back to the homepage
// from a subpage, and it exposes the three lens pages plus a Home link.
const NAV = [
  { href: "/", label: "Home" },
  { href: "/lens-rental-dubai", label: "Lens Rental" },
  { href: "/prime-lens-rental-dubai", label: "Prime Lenses" },
  { href: "/lowa-probe-lens-rental-dubai", label: "Probe Lens" },
  { href: "/#packages", label: "Packages" },
  { href: "/#delivery", label: "Delivery" },
  { href: "/#contact", label: "Contact" },
];

export default function LensHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="/" className="brand">
          BIG STORY <span className="red">· RED RENTAL</span>
        </a>
        <nav className="nav-links" aria-label="Lens rental navigation">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="cart-btn" href="/#packages">
          🎬 RENTAL KITS
        </a>
      </div>
    </header>
  );
}

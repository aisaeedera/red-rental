"use client";

import { useMemo, useState } from "react";
import {
  PACKAGES,
  TRANSPORT,
  SPECIALIST_FEE,
  INTERCOM_FEE,
  CONTACT,
} from "@/lib/data";
import { waLink } from "./Store";

type OrderDay = {
  id: number;
  date: string; // ISO yyyy-mm-dd
  pkgId: string;
  transportId: string;
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function iso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function daysUntil(isoDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(isoDate + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

export default function BookingSystem() {
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<OrderDay[]>([]);
  const [intercom, setIntercom] = useState(false);
  const [nextId, setNextId] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  // ---- calendar grid ----
  const grid = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: (string | null)[] = [];
    for (let i = 0; i < startPad; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(iso(new Date(viewYear, viewMonth, d)));
    }
    return cells;
  }, [viewYear, viewMonth]);

  const todayIso = iso(new Date());

  function toggleDate(d: string) {
    if (d < todayIso) return;
    setSelected((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  }

  function addSelectedToOrder() {
    if (!selected.length) return;
    const existing = new Set(order.map((o) => o.date));
    const toAdd = selected
      .filter((d) => !existing.has(d))
      .sort()
      .map((d, i) => ({
        id: nextId + i,
        date: d,
        pkgId: "flagship",
        transportId: "dxb-single",
      }));
    setNextId((n) => n + toAdd.length);
    setOrder((prev) => [...prev, ...toAdd].sort((a, b) => a.date.localeCompare(b.date)));
    setSelected([]);
  }

  function updateDay(id: number, patch: Partial<OrderDay>) {
    setOrder((prev) => prev.map((o) => (o.id === id ? { ...o, ...patch } : o)));
  }

  function removeDay(id: number) {
    setOrder((prev) => prev.filter((o) => o.id !== id));
  }

  function prevMonth() {
    const m = viewMonth - 1;
    if (m < 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth(m);
  }
  function nextMonth() {
    const m = viewMonth + 1;
    if (m > 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth(m);
  }

  // ---- totals ----
  const totals = useMemo(() => {
    let full = 0;
    let discounted = 0;
    for (const day of order) {
      const pkg = PACKAGES.find((p) => p.id === day.pkgId)!;
      const transport = TRANSPORT.find((t) => t.id === day.transportId)!;
      const equipment = pkg.price;
      const eligible = daysUntil(day.date) >= 7;
      const equipmentDisc = eligible ? equipment * 0.8 : equipment;
      const perDayExtras = SPECIALIST_FEE + transport.cost + (intercom ? INTERCOM_FEE : 0);
      full += equipment + perDayExtras;
      discounted += equipmentDisc + perDayExtras;
    }
    return { full, discounted, savings: full - discounted };
  }, [order, intercom]);

  const bookingMessage = useMemo(() => {
    if (!order.length) return "";
    const lines = order.map((d) => {
      const pkg = PACKAGES.find((p) => p.id === d.pkgId)!;
      const transport = TRANSPORT.find((t) => t.id === d.transportId)!;
      const eligible = daysUntil(d.date) >= 7;
      return `• ${d.date}, ${pkg.name} (AED ${pkg.price}) · ${transport.label}${
        eligible ? " · early-booking eligible" : ""
      }`;
    });
    return (
      `Hi BIG STORY, RED rental booking request:\n\n` +
      lines.join("\n") +
      `\n\nRED Camera Specialist: AED ${SPECIALIST_FEE}/day (mandatory)` +
      (intercom ? `\nHollyland Intercom: +AED ${INTERCOM_FEE}/day` : "") +
      `\n\nFull total: AED ${totals.full.toLocaleString()}` +
      `\nWith early-booking discount: AED ${totals.discounted.toLocaleString()}` +
      `\n\nName: ${name || "-"}\nPhone: ${phone || "-"}\nProject: ${company || "-"}` +
      (notes ? `\nNotes: ${notes}` : "")
    );
  }, [order, intercom, totals, name, phone, company, notes]);

  return (
    <>
      {/* ---------- Availability calendar ---------- */}
      <section className="section" id="availability" style={{ background: "var(--black-2)" }}>
        <div className="wrap">
          <div className="section-eyebrow">Live Availability</div>
          <h2 className="section-title">
            Check &amp; <span className="gold">Select Dates</span>
          </h2>
          <p className="section-intro">
            One RED Komodo X body, one rental at a time. Select one or multiple available
            dates below, then scroll down to pick a package for each day and send your
            booking.
          </p>

          <div className="builder" style={{ maxWidth: 560, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <button className="cart-btn" onClick={prevMonth}>
                ←
              </button>
              <strong className="mono" style={{ letterSpacing: "0.1em" }}>
                {MONTHS[viewMonth]} {viewYear}
              </strong>
              <button className="cart-btn" onClick={nextMonth}>
                →
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                gap: 6,
                textAlign: "center",
              }}
            >
              {WEEKDAYS.map((w, i) => (
                <div key={i} className="mono" style={{ color: "var(--gray-4)", fontSize: 11, padding: 4 }}>
                  {w}
                </div>
              ))}
              {grid.map((d, i) => {
                if (!d) return <div key={i} />;
                const past = d < todayIso;
                const isSel = selected.includes(d);
                const inOrder = order.some((o) => o.date === d);
                const day = Number(d.slice(-2));
                return (
                  <button
                    key={i}
                    onClick={() => toggleDate(d)}
                    disabled={past}
                    className="mono"
                    style={{
                      padding: "10px 0",
                      borderRadius: 4,
                      fontSize: 13,
                      cursor: past ? "not-allowed" : "pointer",
                      border: "1px solid",
                      borderColor: isSel
                        ? "var(--gold)"
                        : inOrder
                        ? "var(--red)"
                        : "var(--gray-1)",
                      background: isSel
                        ? "rgba(201,168,76,0.2)"
                        : inOrder
                        ? "rgba(204,0,0,0.15)"
                        : "var(--black-3)",
                      color: past ? "var(--gray-2)" : "var(--white)",
                      opacity: past ? 0.4 : 1,
                    }}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div
              className="mono"
              style={{ fontSize: 11, color: "var(--gray-4)", marginTop: 16, display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <span><span style={{ color: "var(--gold)" }}>▮</span> Selected</span>
              <span><span style={{ color: "var(--red-bright)" }}>▮</span> In your order</span>
              <span><span style={{ color: "var(--gray-4)" }}>▮</span> Available</span>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <button className="btn btn-ghost" onClick={() => setSelected([])} style={{ flex: 1, justifyContent: "center" }}>
                Clear
              </button>
              <button className="btn btn-gold" onClick={addSelectedToOrder} style={{ flex: 2, justifyContent: "center" }}>
                Add Selected Dates To Order ↓
              </button>
            </div>
            <p className="mono" style={{ fontSize: 12, color: "var(--gold)", marginTop: 12, textAlign: "center" }}>
              ✦ {selected.length} DATE(S) SELECTED
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Booking order builder ---------- */}
      <section className="section" id="book">
        <div className="wrap">
          <div className="section-eyebrow">Reserve Your Kit</div>
          <h2 className="section-title">
            Book Your <span className="red">RED Rental</span>
          </h2>

          <div className="builder">
            <h3>Step 1: Build Your Order</h3>
            {order.length === 0 ? (
              <p className="muted mono" style={{ fontSize: 13 }}>
                No shoot days yet. Select available dates in the calendar above and click
                &ldquo;Add Selected Dates To Order&rdquo;.
              </p>
            ) : (
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Package</th>
                    <th>Transport</th>
                    <th>Rate</th>
                    <th>Early</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((d) => {
                    const pkg = PACKAGES.find((p) => p.id === d.pkgId)!;
                    const transport = TRANSPORT.find((t) => t.id === d.transportId)!;
                    const eligible = daysUntil(d.date) >= 7;
                    const rate = pkg.price + SPECIALIST_FEE + transport.cost;
                    return (
                      <tr key={d.id}>
                        <td>{d.date}</td>
                        <td>
                          <select
                            value={d.pkgId}
                            onChange={(e) => updateDay(d.id, { pkgId: e.target.value })}
                            style={selectStyle}
                          >
                            {PACKAGES.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name}, AED {p.price}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select
                            value={d.transportId}
                            onChange={(e) => updateDay(d.id, { transportId: e.target.value })}
                            style={selectStyle}
                          >
                            {TRANSPORT.map((t) => (
                              <option key={t.id} value={t.id}>
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>AED {rate.toLocaleString()}</td>
                        <td>{eligible ? <span className="hl-gold">−20%</span> : <span className="muted">n/a</span>}</td>
                        <td>
                          <button className="remove" onClick={() => removeDay(d.id)} aria-label="Remove day">
                            ✕
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            <div className="mandatory-box">
              <h4>🔒 RED Camera Specialist, AED {SPECIALIST_FEE}/day (Launch Price) · Mandatory</h4>
              <p>
                Required on every RED rental to protect the equipment. Handles van logistics,
                full rig assembly, operation support, focus pulling, on-set technical issues,
                and end-of-day kit breakdown and repacking. Auto-added per day.
              </p>
            </div>

            <label className="addon-check">
              <input type="checkbox" checked={intercom} onChange={(e) => setIntercom(e.target.checked)} />
              Add Hollyland 6-Person Intercom System · +AED {INTERCOM_FEE}/day
            </label>

            <div className="total-row">
              <span className="label">Total (Full Price)</span>
              <span className="amount">AED {totals.full.toLocaleString()}</span>
            </div>
            <div className="total-row discount">
              <span className="label">💛 With Early Booking Discount</span>
              <span className="amount">AED {totals.discounted.toLocaleString()}</span>
            </div>
            <p className="mono" style={{ fontSize: 11, color: "var(--gray-4)" }}>
              20% off equipment · booked 7+ days ahead · paid in full
            </p>

            <h3 style={{ marginTop: 32 }}>Step 2: Your Details + Send</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Your Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
              </div>
              <div className="form-field">
                <label>Phone / WhatsApp</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+971 …" />
              </div>
            </div>
            <div className="form-field">
              <label>Production Company / Project</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company or project" />
            </div>
            <div className="form-field">
              <label>Additional Notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should know" />
            </div>

            <a
              className="btn btn-wa"
              href={order.length ? waLink(bookingMessage) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: 8,
                opacity: order.length ? 1 : 0.5,
                pointerEvents: order.length ? "auto" : "none",
              }}
            >
              Send Booking via WhatsApp
            </a>
            <p className="mono" style={{ fontSize: 12, color: "var(--gray-4)", marginTop: 12, textAlign: "center" }}>
              or email us directly ✉ {CONTACT.email} · We reply within 1 hour · Payment by
              bank transfer only after confirmation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const selectStyle: React.CSSProperties = {
  background: "var(--black-2)",
  border: "1px solid var(--gray-2)",
  borderRadius: 4,
  color: "var(--white)",
  padding: "6px 8px",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  maxWidth: 200,
};

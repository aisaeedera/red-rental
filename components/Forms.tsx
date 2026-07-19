"use client";

import { useState } from "react";
import { DEMO_FEATURES, CONTACT } from "@/lib/data";
import { waLink } from "./Store";

export function DemoSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [datetime, setDatetime] = useState("");
  const [interest, setInterest] = useState("RED Komodo X Full Rig Bundle");

  const message = `Hi BIG STORY, I'd like to book a FREE DEMO.\n\nName: ${name || "-"}\nPhone: ${phone || "-"}\nCompany/Project: ${company || "-"}\nPreferred date & time: ${datetime || "-"}\nEquipment interest: ${interest}`;

  return (
    <section className="section" id="demo" style={{ background: "var(--black-2)" }}>
      <div className="wrap">
        <div className="section-eyebrow">Try Before You Rent</div>
        <h2 className="section-title">
          Book A <span className="red">Free Demo</span>
        </h2>
        <p className="section-intro">
          Not sure which camera suits your needs? Book a free on-site demo where our team
          brings the equipment to you and walks you through everything hands-on.
        </p>

        <div className="demo-features">
          {DEMO_FEATURES.map((f) => (
            <div className="demo-feature card" key={f.num}>
              <div className="num">{f.num}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="launch-box">
          <h3>★ Demo Discount</h3>
          <p className="muted">
            Book a rental after your demo and get an exclusive discount applied to your first
            booking. 📍 Dubai only · Free for serious renters · Rental agreement applies during
            demo.
          </p>
        </div>

        <div className="builder" style={{ maxWidth: 640, marginTop: 30 }}>
          <h3>Request Your Free Demo</h3>
          <div className="form-grid">
            <div className="form-field">
              <label>Your Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Phone / WhatsApp</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-field">
              <label>Company / Project</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Preferred Date &amp; Time</label>
              <input value={datetime} onChange={(e) => setDatetime(e.target.value)} placeholder="e.g. Sat 2pm" />
            </div>
          </div>
          <div className="form-field">
            <label>Equipment Interest</label>
            <select value={interest} onChange={(e) => setInterest(e.target.value)}>
              <option>RED Komodo X Full Rig Bundle</option>
              <option>RED Camera Brain Only</option>
              <option>Full Production Kit</option>
            </select>
          </div>
          <a className="btn btn-wa" href={waLink(message)} target="_blank" rel="noopener noreferrer" style={{ width: "100%", justifyContent: "center" }}>
            Request Demo via WhatsApp
          </a>
          <p className="mono" style={{ fontSize: 12, color: "var(--gray-4)", marginTop: 12 }}>
            Or email: {CONTACT.email} · Dubai only
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [purpose, setPurpose] = useState("Rental Enquiry");
  const [message, setMessage] = useState("");

  const wa = `Hi BIG STORY, ${purpose}.\n\n${message}`;

  return (
    <div className="builder" style={{ maxWidth: 560 }}>
      <h3>Send a Quick Message</h3>
      <div className="form-field">
        <label>Purpose of enquiry</label>
        <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option>Rental Enquiry</option>
          <option>Book a Demo</option>
          <option>Pricing Question</option>
          <option>Rental Agreement</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div className="form-field">
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
      </div>
      <a className="btn btn-wa" href={waLink(wa)} target="_blank" rel="noopener noreferrer" style={{ width: "100%", justifyContent: "center" }}>
        Send via WhatsApp →
      </a>
      <p className="mono" style={{ fontSize: 12, color: "var(--gray-4)", marginTop: 12 }}>
        ✉ Or email: {CONTACT.email}
      </p>
    </div>
  );
}

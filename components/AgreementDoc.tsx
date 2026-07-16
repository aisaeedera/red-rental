"use client";

import { CONTACT, BANK } from "@/lib/data";

export type AgreementField = { label: string };

const EQUIPMENT = [
  "1× RED Komodo X 6K Camera System (RF Mount)",
  '1× DSMC3 RED Touch 7" LCD Monitor',
  "2× RED PRO CFexpress v4 Type B 1TB + Card Reader",
  "1× RED Pro V-Lock I/O Module + Audio Module",
  "DZOFILM Arles T1.4 Cine Prime Set (25/35/50/75/100mm)",
  "DZOFILM Marlin 1.6× + METABONES 0.71× Adapters",
  "Tilta Mirage Motorised ND Filters",
  'SmallHD Cine 7" Monitor · Feelworld 21.5" Director Monitor',
  "Teradek Bolt 6 Wireless TX · Tilta Nucleus-M Follow Focus",
  "Manfrotto Tripod · Proaim Stabilizer Vest · Production Cart",
  "2× Aputure 600D Pro · Nanlite Pavotube RGB Kit · 3× C-Stand",
  "Zoom F8n Pro · Deity TC-1 · Sennheiser Shotgun · Rode Boompole",
  "V-Mount Batteries (260Wh / 150Wh / 98Wh) + Chargers",
];

export default function AgreementDoc({
  docTitle,
  docCode,
  intro,
  conditionLabel,
}: {
  docTitle: string;
  docCode: string;
  intro: string;
  conditionLabel: string;
}) {
  return (
    <div className="agreement-doc">
      <div className="ad-toolbar no-print">
        <a href="/" className="ad-back">← Back to BIG STORY · RED RENTAL</a>
        <button className="ad-print" onClick={() => window.print()}>
          🖨️ Print / Save as PDF
        </button>
      </div>

      <div className="ad-sheet">
        <header className="ad-head">
          <div className="ad-brand">
            <img
              className="ad-logo"
              src="/bigstory-logo.svg"
              width={264}
              height={64}
              alt="BIG STORY — official company logo (dark badge with serif B and gold dot, wordmark BIG·STORY)"
            />
            <div className="ad-brand-sub">RED RENTAL</div>
          </div>
          <div className="ad-meta">
            <div>{CONTACT.location}</div>
            <div>{CONTACT.phoneDisplay}</div>
            <div>{CONTACT.email}</div>
          </div>
        </header>

        <div className="ad-title-block">
          <div className="ad-code">{docCode}</div>
          <h1>{docTitle}</h1>
          <p className="ad-intro">{intro}</p>
        </div>

        <section className="ad-section">
          <h2>1. Production &amp; Party Details</h2>
          <div className="ad-grid">
            {[
              "Production / Company Name",
              "Client / Producer Name",
              "Contact Phone",
              "Contact Email",
              "Shoot Date(s)",
              "Rental Package",
              "Shoot Location(s)",
              "BIG STORY Specialist On Set",
            ].map((f) => (
              <div className="ad-field" key={f}>
                <label>{f}</label>
                <span className="ad-line" />
              </div>
            ))}
          </div>
        </section>

        <section className="ad-section">
          <h2>2. Equipment Checklist — {conditionLabel}</h2>
          <table className="ad-table">
            <thead>
              <tr>
                <th className="ad-col-item">Item</th>
                <th className="ad-col-check">Present</th>
                <th className="ad-col-check">Working</th>
                <th className="ad-col-note">Condition Notes</th>
              </tr>
            </thead>
            <tbody>
              {EQUIPMENT.map((item) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td className="ad-center">☐</td>
                  <td className="ad-center">☐</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="ad-section">
          <h2>3. Condition Declaration</h2>
          <ul className="ad-checklist">
            <li>☐ All items listed above have been physically inspected at {conditionLabel.toLowerCase()}.</li>
            <li>☐ Equipment is free of visible damage except where noted above.</li>
            <li>☐ Media has been checked / offloaded and confirmed clear as applicable.</li>
            <li>☐ Any discrepancies, damage, or missing items are recorded in Section 2 notes.</li>
            <li>☐ The client accepts liability for loss or damage occurring during the rental period per the signed rental agreement.</li>
          </ul>
        </section>

        <section className="ad-section">
          <h2>4. Additional Notes</h2>
          <div className="ad-notes">
            <span className="ad-line" />
            <span className="ad-line" />
            <span className="ad-line" />
          </div>
        </section>

        <section className="ad-section ad-sign">
          <div className="ad-sign-col">
            <div className="ad-sign-line" />
            <div className="ad-sign-label">Client / Production Representative</div>
            <div className="ad-sign-sub">Name &amp; Signature · Date</div>
          </div>
          <div className="ad-sign-col">
            <div className="ad-sign-line" />
            <div className="ad-sign-label">BIG STORY · RED RENTAL Specialist</div>
            <div className="ad-sign-sub">Name &amp; Signature · Date</div>
          </div>
        </section>

        <footer className="ad-foot">
          <div>
            {docCode} · BIG STORY · RED RENTAL · {CONTACT.location} · {CONTACT.phoneDisplay}
          </div>
          <div className="ad-foot-note">
            Payment by bank transfer only — {BANK.bank}, {BANK.accountName}. This is a
            working document and is subject to updates; the final signed version is sent
            directly before your shoot date.
          </div>
        </footer>
      </div>

      <style>{`
        .agreement-doc {
          min-height: 100vh;
          background: #4a4a4a;
          padding: 32px 16px 64px;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
        }
        .ad-toolbar {
          max-width: 820px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .ad-back {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }
        .ad-print {
          background: #e40613;
          color: #fff;
          border: none;
          padding: 12px 22px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }
        .ad-print:hover { background: #c40510; }
        .ad-sheet {
          max-width: 820px;
          margin: 0 auto;
          background: #fff;
          padding: 56px 60px 44px;
          box-shadow: 0 8px 40px rgba(0,0,0,.4);
          box-sizing: border-box;
        }
        .ad-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          border-bottom: 3px solid #e40613;
          padding-bottom: 16px;
        }
        .ad-brand { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .ad-brand-sub {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #e40613;
        }
        .ad-logo {
          display: block;
          height: 46px;
          width: auto;
          max-width: 100%;
          /* Force exact colors so the dark badge + gold dot survive Print / Save as PDF */
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .ad-meta { text-align: right; font-size: 12px; color: #444; line-height: 1.7; flex-shrink: 0; }
        .ad-title-block { margin: 26px 0 10px; }
        .ad-code {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e40613;
          font-weight: 700;
        }
        .ad-title-block h1 { font-size: 24px; margin: 6px 0 10px; color: #111; }
        .ad-intro { font-size: 13px; color: #333; line-height: 1.6; margin: 0; }
        .ad-section { margin-top: 26px; break-inside: avoid; }
        .ad-section h2 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: .5px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 6px;
          margin: 0 0 14px;
          color: #111;
        }
        .ad-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 30px; }
        .ad-field label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .4px;
          color: #666;
          margin-bottom: 10px;
        }
        .ad-line {
          display: block;
          border-bottom: 1px solid #999;
          height: 18px;
        }
        .ad-notes .ad-line { margin-bottom: 20px; }
        .ad-table { width: 100%; border-collapse: collapse; font-size: 12px; }
        .ad-table th, .ad-table td {
          border: 1px solid #bbb;
          padding: 7px 9px;
          text-align: left;
          vertical-align: top;
        }
        .ad-table th { background: #f2f2f2; font-size: 11px; text-transform: uppercase; }
        .ad-col-check { width: 64px; }
        .ad-col-note { width: 190px; }
        .ad-center { text-align: center; font-size: 15px; }
        .ad-checklist { list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 2; }
        .ad-sign { display: flex; gap: 50px; margin-top: 44px; }
        .ad-sign-col { flex: 1; }
        .ad-sign-line { border-bottom: 1px solid #111; height: 40px; }
        .ad-sign-label { font-size: 12px; font-weight: 700; margin-top: 8px; }
        .ad-sign-sub { font-size: 11px; color: #666; }
        .ad-foot {
          margin-top: 40px;
          border-top: 1px solid #ccc;
          padding-top: 14px;
          font-size: 10px;
          color: #777;
          line-height: 1.6;
        }
        .ad-foot-note { margin-top: 6px; }

        @media print {
          .no-print { display: none !important; }
          .agreement-doc { background: #fff; padding: 0; }
          .ad-sheet { box-shadow: none; max-width: none; padding: 0; margin: 0; }
          /* Logo must keep its exact brand colors (dark badge + gold) in Print / Save as PDF */
          .ad-logo {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page { margin: 16mm; }
        }
        /* Small screens: keep header readable, prevent logo/contact overlap */
        @media (max-width: 560px) {
          .ad-head { flex-direction: column; align-items: flex-start; }
          .ad-meta { text-align: left; }
        }
      `}</style>
    </div>
  );
}

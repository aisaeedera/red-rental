"use client";

import { useState } from "react";
import { COMP_SAME, COMP_DIFF, COMP_NOTE } from "@/lib/data";

function cellClass(text: string) {
  if (text.startsWith("✓")) return "yes";
  if (text.startsWith("✗")) return "no";
  if (text.startsWith("~")) return "mid";
  return "";
}

function CompTable({ data }: { data: typeof COMP_SAME | typeof COMP_DIFF }) {
  return (
    <div className="comp-table-wrap">
      <table className="comp">
        <thead>
          <tr>
            {data.headers.map((h, i) => (
              <th key={i} className={h.includes("★") || i === 1 ? "us" : ""}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => {
            const isVerdict = row.label === "VERDICT";
            return (
              <tr key={ri} className={isVerdict ? "comp-verdict" : ""}>
                <td className="label">{row.label}</td>
                {row.cells.map((c, ci) => (
                  <td key={ci} className={`${ci === 0 ? "us" : ""} ${cellClass(c)}`}>
                    {c}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Compare() {
  const [tab, setTab] = useState<"same" | "diff">("same");
  return (
    <section className="section" id="compare" style={{ background: "var(--black-2)" }}>
      <div className="wrap">
        <div className="section-eyebrow">Market Comparison</div>
        <h2 className="section-title">
          How We Compare <span className="gold">In Dubai</span>
        </h2>
        <p className="section-intro">
          See how BIG STORY&apos;s RED packages stack up, both against competitors renting
          the same RED camera, and against lower-tier cameras being rented at comparable
          prices elsewhere.
        </p>

        <div className="comp-tabs">
          <button
            className={`comp-tab ${tab === "same" ? "active" : ""}`}
            onClick={() => setTab("same")}
          >
            Same Camera (RED Komodo X)
          </button>
          <button
            className={`comp-tab ${tab === "diff" ? "active" : ""}`}
            onClick={() => setTab("diff")}
          >
            Different Cameras · Same Price Range
          </button>
        </div>

        {tab === "same" ? <CompTable data={COMP_SAME} /> : <CompTable data={COMP_DIFF} />}

        <p className="comp-note">{COMP_NOTE}</p>
      </div>
    </section>
  );
}

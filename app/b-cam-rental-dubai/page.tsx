import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell, LandingSection } from "@/components/LandingShell";

const SLUG = "b-cam-rental-dubai";
const URL = `https://red.filmwithbigstory.com/${SLUG}`;
const TITLE = "B-Cam Rental Dubai | Half-Day Kit + AC | BIG STORY";
const DESCRIPTION =
  "B-cam rental in Dubai for second-unit and multi-camera shoots. A half-day RED Komodo X kit with a 1st AC included, so your day rate stays close to half your main kit. Free delivery within Dubai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `/${SLUG}`,
    languages: {
      en: URL,
      "x-default": URL,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
};

const linkStyle = { color: "var(--gold)", textDecoration: "underline" };

export default function BCamRentalDubaiPage() {
  return (
    <LandingShell
      eyebrow="Half-Day Kit + AC"
      h1="B-Cam Rental Dubai"
      intro="B-cam rental in Dubai for second-unit and multi-camera shoots. This is the B-Cam Partner page, built around the RED Komodo X so your second body matches your main camera and your day stays on schedule."
    >
      <LandingSection heading="B-Cam Rental Dubai, Built on the Komodo X">
        <p className="section-intro">
          B-cam rental in Dubai, built on the RED Komodo X so your second body
          matches your main camera in the grade. This is the B-Cam Partner page:
          a dedicated second-unit setup for multi-camera shoots that need
          coverage without a second full kit budget.
        </p>
      </LandingSection>

      <LandingSection heading="The B-Cam Partner Setup" alt>
        <p className="section-intro">
          Half-day kit + AC. Day rate is half your main kit. The setup is
          simple: a RED Komodo X configured as a B-cam, paired with your
          A-camera for second-unit and multi-cam coverage, with a 1st AC
          included to run it. The Komodo X is compact enough to rig anywhere on
          set, and its 6K Super35 global shutter and REDCODE RAW match cleanly to
          a larger RED or cinema A-camera in the grade. You get coverage without
          doubling your camera budget.
        </p>
      </LandingSection>

      <LandingSection heading="Why a Dedicated B-Cam Page">
        <p className="section-intro">
          This is the page the B-Cam Partner ad variation drives traffic to, so
          second-unit producers land exactly where they need to be. If you want
          the full flagship spec, see our{" "}
          <Link href="/red-komodo-x-rental" style={linkStyle}>
            RED Komodo X rental
          </Link>{" "}
          page, and if you are assembling a broader package, start from our{" "}
          <Link href="/camera-rental-dubai" style={linkStyle}>
            camera rental Dubai
          </Link>{" "}
          umbrella. For a dedicated second body with an AC who knows the kit,
          book the B-cam rental Dubai setup and keep your production moving.
        </p>
      </LandingSection>
    </LandingShell>
  );
}

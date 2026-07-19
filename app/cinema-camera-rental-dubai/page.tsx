import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell, LandingSection } from "@/components/LandingShell";

const SLUG = "cinema-camera-rental-dubai";
const URL = `https://red.filmwithbigstory.com/${SLUG}`;
const TITLE = "Cinema Camera Rental Dubai | Netflix-Approved 6K | BIG STORY";
const DESCRIPTION =
  "Cinema camera rental in Dubai built around the RED Komodo X 6K, a Netflix-approved Super35 cinema camera with REDCODE RAW. Full cine kits with a certified specialist, delivered free within Dubai.";

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

export default function CinemaCameraRentalDubaiPage() {
  return (
    <LandingShell
      eyebrow="Netflix-Approved 6K"
      h1="Cinema Camera Rental Dubai"
      intro="Cinema camera rental in Dubai built around the RED Komodo X 6K, a Netflix-approved Super35 cinema camera. This is the kit narrative and second-unit teams reach for when the image has to hold up on the big screen and on streaming."
    >
      <LandingSection heading="Cinema Camera Rental Dubai for Second-Unit and Narrative">
        <p className="section-intro">
          The RED Komodo X is our cinema camera rental Dubai default for
          second-unit and multi-camera days. Its compact body matches cleanly
          to a larger A-camera, and its 6K Super35 global shutter sensor
          captures fast motion with no skew. With 16+ stops of dynamic range and
          REDCODE RAW, you get the latitude and the post flexibility that
          narrative and commercial work demand. It pairs naturally as a{" "}
          <Link href="/b-cam-rental-dubai" style={linkStyle}>
            B-cam rental Dubai
          </Link>{" "}
          option on bigger productions.
        </p>
      </LandingSection>

      <LandingSection heading="From the Kit to the Crew" alt>
        <p className="section-intro">
          Every cinema kit can ship with a full cine prime lens set, the DZOFILM
          Arles T1.4 primes, plus monitoring, wireless follow focus and power. A
          certified specialist can join your crew to handle setup, focus pulling
          and on-set support. We deliver free within Dubai, set up on arrival,
          and stay on standby so your shoot never stalls on a technical issue.
          For a straight cinema body on any shoot, this is the cinema camera
          rental Dubai page to book from.
        </p>
      </LandingSection>
    </LandingShell>
  );
}

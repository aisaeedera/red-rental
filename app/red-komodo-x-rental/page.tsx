import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell, LandingSection } from "@/components/LandingShell";

const SLUG = "red-komodo-x-rental";
const URL = `https://red.filmwithbigstory.com/${SLUG}`;
const TITLE = "RED Komodo X Rental Dubai | 6K Cinema Camera | BIG STORY";
const DESCRIPTION =
  "RED Komodo X rental in Dubai. The flagship 6K Super35 global-shutter cinema camera with REDCODE RAW, available with a certified RED specialist on set and same-night delivery within Dubai.";

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

export default function RedKomodoXRentalPage() {
  return (
    <LandingShell
      eyebrow="6K Cinema Camera"
      h1="RED Komodo X Rental"
      intro="RED Komodo X rental in Dubai, the flagship 6K Super35 cinema camera in the BIG STORY kit. This is the body we build every cinema package around, available with a certified RED specialist and same-night delivery within Dubai."
    >
      <LandingSection heading="RED Komodo X Rental in Dubai">
        <p className="section-intro">
          RED Komodo X rental is the flagship of our cinema lineup and the body
          we build every package around. It is the natural upgrade when a
          smaller body is not enough and you need true cinema capture. It sits at
          the heart of our wider{" "}
          <Link href="/camera-rental-dubai" style={linkStyle}>
            camera rental Dubai
          </Link>{" "}
          service, ready for TVCs, narrative, music videos and branded content
          across the UAE.
        </p>
      </LandingSection>

      <LandingSection heading="RED Komodo X Specs" alt>
        <p className="section-intro">
          The RED Komodo X is a 6K Super35 global shutter cinema camera with 16+
          stops of dynamic range and REDCODE RAW recording, and it is
          Netflix-approved for broadcast and streaming delivery. The global
          shutter captures fast action with no rolling-shutter skew, and RAW
          capture in RED IPP2 color gives your colorist full latitude in post.
          You can run it with the DZOFILM Arles T1.4 cine prime set and an
          AC-friendly wireless focus and monitoring package.
        </p>
      </LandingSection>

      <LandingSection heading="Specialist Add-On and Dubai Delivery">
        <p className="section-intro">
          Add a certified RED camera specialist to your rental and get a 1st AC
          on set for the full day, covering setup, rigging, focus pulling and
          technical support. Pickup is available from our Dubai Studio City base,
          and we offer same-night delivery within Dubai, with the kit set up
          ready to roll on arrival. This flagship body is the natural choice for
          a{" "}
          <Link href="/b-cam-rental-dubai" style={linkStyle}>
            b-cam rental Dubai
          </Link>{" "}
          pairing on multi-camera shoots.
        </p>
      </LandingSection>
    </LandingShell>
  );
}

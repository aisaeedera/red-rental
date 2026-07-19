import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell, LandingSection } from "@/components/LandingShell";

const SLUG = "camera-rental-dubai";
const URL = `https://red.filmwithbigstory.com/${SLUG}`;
const TITLE = "Camera Rental Dubai | Cinema & Production Kits | BIG STORY";
const DESCRIPTION =
  "Camera rental in Dubai with free delivery within the city and a certified camera specialist on set. RED Komodo X, Sony FX3 and Sony FX6 kits for film, TVC and branded content shoots across the UAE.";

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

export default function CameraRentalDubaiPage() {
  return (
    <LandingShell
      eyebrow="Cinema & Production Kits"
      h1="Camera Rental Dubai"
      intro="Camera rental in Dubai, built for productions that need cinema-grade image quality without assembling a kit piece by piece. BIG STORY is a camera rental service in Dubai centered on the RED Komodo X, with Sony FX3 and Sony FX6 options for teams that want a lighter run-and-gun body. Every rental ships ready to roll."
    >
      <LandingSection heading="Camera Rental Dubai Kits">
        <p className="section-intro">
          Our camera rental Dubai lineup starts with the RED Komodo X, a 6K
          Super35 cinema camera, and extends to the Sony FX3 and Sony FX6 for
          documentary, corporate and fast-turnaround work. Whether you are
          shooting a TVC, a branded film, a music video or a short, you get a
          matched package of body, media, monitoring and power so your crew can
          arrive and shoot. For the flagship cinema body, see our dedicated{" "}
          <Link href="/red-komodo-x-rental" style={linkStyle}>
            RED Komodo X rental
          </Link>{" "}
          page.
        </p>
      </LandingSection>

      <LandingSection heading="Delivery and On-Set Support" alt>
        <p className="section-intro">
          We deliver free within Dubai. Our team brings the kit to your
          location, sets it up on arrival, and there is no client pickup. You
          can also add a certified camera specialist, a 1st AC who handles
          rigging, setup, focus pulling and on-set technical support for the
          full day. That combination, a complete kit plus a hands-on
          specialist, is what makes this the umbrella camera rental Dubai page
          for every production we serve across the UAE.
        </p>
      </LandingSection>
    </LandingShell>
  );
}

import type { Metadata } from "next";
import AgreementDoc from "@/components/AgreementDoc";

export const metadata: Metadata = {
  title: "Daily Post-Rental Return Report | BIG STORY · RED RENTAL Dubai",
  description:
    "Printable RED Komodo X rental return report, end-of-day equipment checklist, return condition declaration and signature lines for cinema camera rental in Dubai.",
  alternates: { canonical: "/rental-agreements/post-rental-return" },
};

export default function PostRentalReturnPage() {
  return (
    <AgreementDoc
      docTitle="Daily Post-Rental Return Report"
      docCode="BIG_STORY_Daily_Post_Rental_Return_Report"
      conditionLabel="Return / End of Day"
      intro="Completed at the end of the shoot day. This report documents the return condition of the RED Komodo X rental kit, confirms all items are accounted for, and records any issues before the equipment is packed into the van by the BIG STORY · RED RENTAL specialist."
    />
  );
}

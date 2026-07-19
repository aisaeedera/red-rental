import type { Metadata } from "next";
import AgreementDoc from "@/components/AgreementDoc";

export const metadata: Metadata = {
  title: "Daily Delivery & Handover Report | BIG STORY · RED RENTAL Dubai",
  description:
    "Printable RED Komodo X rental delivery & handover report, equipment checklist, condition declaration and signature lines for cinema camera rental in Dubai.",
  alternates: { canonical: "/rental-agreements/delivery-handover" },
};

export default function DeliveryHandoverPage() {
  return (
    <AgreementDoc
      docTitle="Daily Delivery & Handover Report"
      docCode="BIG_STORY_Daily_Delivery_Handover_Report"
      conditionLabel="Delivery / Handover"
      intro="Completed on arrival at the shoot location. This report documents the equipment delivered, its condition at handover, and confirms transfer of the RED Komodo X rental kit between the BIG STORY · RED RENTAL specialist and the client's production team."
    />
  );
}

import type { Metadata } from "next";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import GridContainer from "@/ui-kit/GridContainer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dashboard | KISS",
};

export default function Page() {
  return (
    <GridContainer header={<Header />}>
      <GridRow>
        <GridCol lg={[5, 8]} md={[2, 5]} className="h-full"></GridCol>
      </GridRow>
    </GridContainer>
  );
}

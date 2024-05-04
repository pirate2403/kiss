import { ReactNode } from "react";
import UserHeader from "@/containers/UserHeader";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import NavBar from "@/components/NavBar";
import GridContainer from "@/ui-kit/GridContainer";
import BreadCrumbs from "@/ui-kit/BreadCrumbs";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <GridContainer header={<UserHeader />}>
      <GridRow full>
        <GridCol lg={[1, 3]} md={[1, 2]} className="h-full sm-hidden">
          <NavBar />
        </GridCol>
        <GridCol lg={[4, 12]} md={[3, 6]}>
          <BreadCrumbs />
          <div className="py-4">{children}</div>
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}

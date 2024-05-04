import type { Metadata } from "next";
import Link from "next/link";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import Typography from "@/ui-kit/Typography";
import { ROUTES } from "@/logic/constants/routes";
import UserLogin from "../../../containers/UserLogin";
import GridContainer from "@/ui-kit/GridContainer";

export const metadata: Metadata = {
  title: "Login | KISS",
};

export default function Page() {
  return (
    <GridContainer>
      <GridRow>
        <GridCol lg={[5, 8]} md={[2, 5]} className="h-full">
          <div className="w-full flex flex-col items-center gap-8 min-h-dvh relative">
            <div className="w-full absolute top-16">
              <Typography>Don&apos;t you have an account?</Typography>
              &nbsp;
              <Typography variant="bold" color="primary">
                <Link href={ROUTES.register}>Create an account</Link>
              </Typography>
            </div>
            <UserLogin />
          </div>
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}

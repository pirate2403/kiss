import type { Metadata } from "next";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import Box from "@/ui-kit/Box";
import Typography from "@/ui-kit/Typography";
import Link from "next/link";
import { ROUTES } from "@/businessLogic/constants/routes";
import RegisterUser from "@/containers/RegisterUser";
import GridContainer from "@/ui-kit/GridContainer";

export const metadata: Metadata = {
  title: "Register | KISS",
};
export default function Page() {
  return (
    <GridContainer>
      <GridRow>
        <GridCol lg={[5, 8]} md={[2, 5]} className="h-full">
          <Box className="w-full flex flex-col items-center gap-8 min-h-dvh relative">
            <Box className="w-full absolute top-16">
              <Typography>You have an account?</Typography>
              &nbsp;
              <Typography variant="bold" color="primary">
                <Link href={ROUTES.login}>Login</Link>
              </Typography>
            </Box>
            <RegisterUser />
          </Box>
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}

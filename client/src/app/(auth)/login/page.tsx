import type { Metadata } from "next";
import Link from "next/link";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import Box from "@/ui-kit/Box";
import Typography from "@/ui-kit/Typography";
import { ROUTES } from "@/businessLogic/constants/routes";
import LoginUser from "@/containers/LoginUser";
import GridContainer from "@/ui-kit/GridContainer";

export const metadata: Metadata = {
  title: "Login | KISS",
};

export default function Page() {
  return (
    <GridContainer>
      <GridRow>
        <GridCol lg={[5, 8]} md={[2, 5]} className="h-full">
          <Box className="w-full flex flex-col items-center gap-8 min-h-dvh relative">
            <Box className="w-full absolute top-16">
              <Typography>Don&apos;t you have an account?</Typography>
              &nbsp;
              <Typography variant="bold" color="primary">
                <Link href={ROUTES.register}>Create an account</Link>
              </Typography>
            </Box>
            <LoginUser />
          </Box>
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}

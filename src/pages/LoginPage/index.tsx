import { memo } from "react";
import Link from "next/link";
import LoginForm from "@/containers/LoginForm";
import GridBlock from "@/ui-kit/GridBlock";
import Box from "@/ui-kit/Box";
import GridContainer from "@/ui-kit/GridContainer";
import Typography from "@/ui-kit/Typography";
import MainLogo from "@/ui-kit/MainLogo";
import { ROUTES } from "@/constants/routes";

function LoginPage() {
  return (
    <GridContainer>
      <GridBlock lg={[5, 8]} md={[2, 5]} className="h-full">
        <Box className="w-full flex flex-col items-center gap-8 min-h-dvh py-24 relative">
          <Box className="w-full absolute top-16">
            <Typography>Don&apos;t you have an account?</Typography>
            &nbsp;
            <Typography variant="bold" color="primary">
              <Link href={ROUTES.register}>Create an account</Link>
            </Typography>
          </Box>
          <Box className="w-full my-auto flex flex-col items-center gap-8">
            <MainLogo />
            <LoginForm />
          </Box>
        </Box>
      </GridBlock>
    </GridContainer>
  );
}

export default memo(LoginPage);

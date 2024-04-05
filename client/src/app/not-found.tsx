import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import GridRow from "@/ui-kit/GridRow";
import GridCol from "@/ui-kit/GridCol";
import Box from "@/ui-kit/Box";
import notFound from "@/assets/images/not-found.png";
import Typography from "@/ui-kit/Typography";
import Button from "@/ui-kit/Button";
import NavLink from "@/ui-kit/NavLink";
import GridContainer from "@/ui-kit/GridContainer";
import { ROUTES } from "@/businessLogic/constants/routes";

export const metadata: Metadata = {
  title: "Not found | KISS",
};
export default function NotFound() {
  return (
    <GridContainer header={<Header backButtonHref={ROUTES.dashboard} />}>
      <GridRow full>
        <GridCol>
          <Box className="h-full flex flex-col gap-4 justify-center items-center">
            <Image src={notFound} alt={"Not found"} />
            <Typography className="text-center" variant="bold">
              We didn&apos;t find what we needed, please make
              <br />
              sure your input information is correct!
            </Typography>
            <Button className="w-full max-w-[438px]">
              <NavLink className="w-full h-full" href={ROUTES.dashboard}>
                Go Back
              </NavLink>
            </Button>
          </Box>
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}

import GridBlock from "../ui-kit/GridBlock";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KISS",
  icons: "kiss.svg",
};
export default function NotFound() {
  return (
    <div>
      <GridBlock>
        <Header />
      </GridBlock>
      <GridBlock>asd</GridBlock>
    </div>
  );
}

import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";
import type { Metadata } from "next";

const nunito = Nunito({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "KISS",
  icons: "kiss.svg",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="bg-white h-dvh">{children}</main>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

const nunito = Nunito({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "KISS",
  icons: "kiss.svg",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="bg-white min-h-dvh">
         {children}
        </main>
      </body>
    </html>
  );
}

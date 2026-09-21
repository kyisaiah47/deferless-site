import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "deferless",
  description:
    "Fail-closed gates for work an AI agent did on your behalf: a plan it can’t quietly deviate from, and findings it can’t defer. No --force, no allowlist, no known-issues file.",
  metadataBase: new URL("https://deferless.thecompound.tech"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Masthead />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

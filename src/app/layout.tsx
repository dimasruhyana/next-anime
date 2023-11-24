import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utilities/Navbar";
import Providers from "./providers";
import ButtonBackTop from "@/components/utilities/ButtonBackTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minki Anime",
  description: "Website Anime Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mb-12 ${inter.className}`}
        suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
          <ButtonBackTop />
        </Providers>
      </body>
    </html>
  );
}

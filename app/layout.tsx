import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBubbles from "@/components/BackgroundBubbles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arkhas - Expert Services",
  description: "Multipurpose consultation agency offering marketing, programming, and car rental services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundBubbles />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

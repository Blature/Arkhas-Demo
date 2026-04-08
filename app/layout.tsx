import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsapp from "@/components/StickyWhatsapp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Arkhas | Luxury Car Rental",
  description: "Drive with Ease, Return with Peace... Because Your Choice is Right!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen bg-background text-textDefault selection:bg-brand-gold selection:text-black`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <StickyWhatsapp />
      </body>
    </html>
  );
}

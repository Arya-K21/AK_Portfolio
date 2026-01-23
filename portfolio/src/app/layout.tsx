import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arya Kulkarni",
  description: "A product-driven portfolio showcasing thoughtful UI/UX design and frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body>
        <LayoutWrapper>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
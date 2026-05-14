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
  title: "Arya Kulkarni | UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Arya Kulkarni — CS student from Pune building intuitive, premium digital products. Specializing in UI/UX design, React, Next.js, and full-stack development.",
  keywords: [
    "Arya Kulkarni",
    "UI UX Designer",
    "Frontend Developer",
    "Next.js Portfolio",
    "React Developer",
    "Pune",
    "CS Student",
  ],
  authors: [{ name: "Arya Kulkarni", url: "https://github.com/Arya-K21" }],
  openGraph: {
    title: "Arya Kulkarni | UI/UX Designer & Frontend Developer",
    description:
      "CS student from Pune building intuitive, premium digital products. Check out my design and development work.",
    url: "https://arya-kulkarni-portfolio.vercel.app/", // 🔧 Update with your actual Vercel URL after deployment
    siteName: "Arya Kulkarni Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Kulkarni | UI/UX Designer & Frontend Developer",
    description:
      "CS student from Pune building intuitive, premium digital products.",
    creator: "@Arya_K216",
  },
  robots: {
    index: true,
    follow: true,
  },
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
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/ui/Navbar";
import Header from "@/components/ui/header";
import { LanguageProvider } from "@/contexts/LanguageContext";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Erives  Landing Page",
  description: "Landing page made by Alan Erives ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <LanguageProvider>
          <Navbar />
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterWrapper from "@/components/FooterWrapper";
import { defaultMetadata, defaultViewport } from './metadata';
import LenisScroll from "@/components/LenisScroll";
import ReserveSidebar from "@/components/ReserveSidebar";

const aimemx = localFont({
  src: "../public/fonts/AimeMX.woff2",
  variable: "--font-aimemx",
  display: "swap",
});

const HelveticaNowText = localFont({
  src: "../public/fonts/HelveticaNowText-Regular.woff2",
  variable: "--font-HelveticaNowText-Regular",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${aimemx.variable} ${HelveticaNowText.variable} antialiased font-sans text-base`}
      >
        <HeaderWrapper />
        <ReserveSidebar />
        <LenisScroll />
        <main>
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}

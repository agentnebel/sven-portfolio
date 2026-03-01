import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sven Belz | Portfolio",
  description: "I turn caffeine and code into digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}

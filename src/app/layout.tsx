import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interstate Connections | Class A & B CDL Training & Logistics",
  description:
    "Interstate Connections — professional Class A & B CDL training backed by 13+ years of experience. Bilingual instruction, flexible scheduling, and financial aid for those who qualify. Call (845) 663-5613 or email Info@interstateconnections.org.",
  keywords: [
    "CDL training",
    "Class A CDL",
    "Class B CDL",
    "truck driving school",
    "commercial driver license",
    "bilingual CDL training",
  ],
  openGraph: {
    title: "Interstate Connections | CDL Training & Logistics",
    description:
      "Professional CDL training backed by 13+ years of experience. Get your career in high gear — call (845) 663-5613.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

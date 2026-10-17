import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const title = "Interstate Connections | Class A & B CDL Training";
const description = `Build your next career with hands-on CDL training, bilingual instruction, and day, evening, and weekend classes. Call ${SITE.phone} to explore your options.`;
const publicUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImages = publicUrl
  ? [
      {
        url: new URL("/social-preview.png", publicUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Interstate Connections — put your career in high gear.",
      },
    ]
  : undefined;
export const metadata: Metadata = {
  ...(publicUrl ? { metadataBase: new URL(publicUrl) } : {}),
  title: { default: title, template: "%s | Interstate Connections" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: socialImages,
  },
  twitter: {
    card: socialImages ? "summary_large_image" : "summary",
    title,
    description,
    images: socialImages,
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
export const viewport: Viewport = { themeColor: "#172d35" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}

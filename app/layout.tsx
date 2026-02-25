import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../assets/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../assets/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
  ],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HOOT Initiative - Empowering Children, Youths and Communities",
    template: "%s | HOOT Initiative",
  },
  description:
    "HOOT Initiative is a youth-led NGO committed to empowering young people and communities through innovative programs and sustainable development initiatives.",
  keywords: [
    "HOOT Initiative",
    "NGO",
    "youth empowerment",
    "community development",
    "Nigeria",
    "Africa",
    "children",
    "sustainable development",
  ],
  authors: [{ name: "HOOT Initiative" }],
  creator: "HOOT Initiative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "HOOT Initiative",
    title: "HOOT Initiative - Empowering Children, Youths and Communities",
    description:
      "HOOT Initiative is a youth-led NGO committed to empowering young people and communities through innovative programs and sustainable development initiatives.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HOOT Initiative - Empowering Children, Youths and Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOOT Initiative - Empowering Children, Youths and Communities",
    description:
      "HOOT Initiative is a youth-led NGO committed to empowering young people and communities through innovative programs and sustainable development initiatives.",
    images: ["/opengraph-image"],
    creator: "@hootafrica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

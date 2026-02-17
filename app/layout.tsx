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

export const metadata: Metadata = {
  title: "HOOT Initiative - Empowering Children, Youths and Communities",
  description:
    "HOOT Initiative is a youth-led NGO committed to empowering young people and communities through innovative programs and sustainable development initiatives.",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the HOOT Initiative. Donate to support our programs or volunteer your skills to empower children, youths, and communities across Africa.",
  openGraph: {
    title: "Get Involved | HOOT Initiative",
    description:
      "Join the HOOT Initiative. Donate to support our programs or volunteer your skills to empower children, youths, and communities across Africa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | HOOT Initiative",
    description:
      "Join the HOOT Initiative. Donate to support our programs or volunteer your skills to empower children, youths, and communities across Africa.",
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Mulish, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-mulish",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Warm, collaborative therapy for adults in Santa Monica and across California. Anxiety, trauma, burnout and perfectionism. In-person and telehealth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mulish.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
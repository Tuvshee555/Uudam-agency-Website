import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Uudam Travel — Premium International Tours from Mongolia",
  description:
    "Experience world-class international travel packages from Mongolia. Fly to China, Japan, Thailand, Turkey, and beyond with Uudam Travel — your premium tour operator.",
  keywords: ["Mongolia travel", "international tours", "China tours", "Japan tours", "Thailand tours", "Turkey tours", "Uudam Travel"],
  openGraph: {
    title: "Uudam Travel — Premium International Tours",
    description: "World-class travel experiences curated from Mongolia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${display.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased bg-[#FAFAF8] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}

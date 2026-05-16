import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const headingFont = Merriweather({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Уудам Аялал Жуулчлал",
  description:
    "Уудам Аялал Жуулчлал - гадаад аяллын найдвартай, цэгцтэй, дээд зэрэглэлийн үйлчилгээ.",
  keywords: [
    "Уудам аялал",
    "аялал жуулчлал",
    "гадаад аялал",
    "Хятад аялал",
    "Япон аялал",
    "Тайланд аялал",
    "Турк аялал",
  ],
  openGraph: {
    title: "Уудам Аялал Жуулчлал",
    description:
      "Улаанбаатараас дэлхийн шилдэг чиглэл рүү төлөвлөгөөтэй, тав тухтай аяллын багц.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

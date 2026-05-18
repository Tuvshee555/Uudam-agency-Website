import type { Metadata, Viewport } from "next";
import { Manrope, Rubik } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const metadataBase = new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Rubik({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: "Уудам Аялал | Улаанбаатараас дээд зэрэглэлийн аялал",
  description:
    "Уудам Аялал нь Улаанбаатараас гарах дээд зэрэглэлийн аяллыг тайван хэмнэл, баталгаатай түншлэл, анхааралтай төлөвлөлтөөр бүтээнэ.",
  keywords: [
    "Уудам Аялал",
    "тансаг аялал",
    "Улаанбаатар аяллын агентлаг",
    "гадаад аяллын багц",
    "хувийн аялал төлөвлөлт",
    "Япон аялал",
    "Хятад аялал",
  ],
  applicationName: "Уудам Аялал",
  category: "аялал",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Уудам Аялал | Улаанбаатараас дээд зэрэглэлийн аялал",
    description:
      "Кино мэт чиглэлүүд, сонгомол багцууд, хувийн анхааралтай аяллын төлөвлөлт.",
    siteName: "Уудам Аялал",
    locale: "mn_MN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#113e67",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

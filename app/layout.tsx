import type { Metadata } from "next";
import { Heebo } from "next/font/google"; // ייבוא הגופן מגוגל
import "./globals.css";

// הגדרת הגופן Heebo עם המשקלים והשפות הרלוונטיות
const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo", // הגדרת משתנה CSS לשימוש ב-Tailwind
});

export const metadata: Metadata = {
  title: "V.S.A Security Solutions",
  description: "Advanced security systems by Victor Tahar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ines & Filip - Save the Date",
  description: "You're invited to celebrate our wedding on August 29th, 2026 in Prod, Romania",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
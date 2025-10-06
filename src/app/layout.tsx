import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stan & [Partner] - Save the Date",
  description: "You're invited to celebrate our wedding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

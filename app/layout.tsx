import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buffx Landing Page",
  description: "Buffx landing page migrated to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body>{children}</body>
    </html>
  );
}
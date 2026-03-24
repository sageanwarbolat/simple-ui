import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple UI Library",
  description: "A minimal React component library with Button, Text, and Card components",
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

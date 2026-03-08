import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Howard AI | Second Brain Consulting for Executives",
  description: "Transform your workflow with a custom AI second brain. Consulting and implementation services for executives, founders, and high-performance teams.",
  keywords: ["AI consulting", "second brain", "AI automation", "executive coaching", "productivity"],
  openGraph: {
    title: "Howard AI | Second Brain Consulting",
    description: "Transform your workflow with a custom AI second brain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

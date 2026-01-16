import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ruibarbosa.dev";
const siteName = "Rui Barbosa";
const title = "Rui Barbosa — Desenvolvedor Web";
const description =
  "Desenvolvedor especializado em React, TypeScript e Node.js. Em transição da área administrativa para tecnologia, aplicando organização e visão de negócio no desenvolvimento web.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "desenvolvedor web júnior",
    "react",
    "typescript",
    "next.js",
    "node.js",
    "desenvolvedor frontend",
    "desenvolvedor fullstack",
    "portfolio desenvolvedor",
    "imperatriz maranhão",
  ],
  authors: [{ name: "Rui Barbosa", url: siteUrl }],
  creator: "Rui Barbosa",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zunize.com"),
  
  icons: {
    icon: "/favicon.ico",
  },

  title: {
    default: "Zunize | El Yapımı Seçkin Çikolata",
    template: "%s | Zunize",
  },
  description:
    "Zunize, özenle hazırlanmış el yapımı seçkin çikolata koleksiyonları sunar. Artisan, kuruyemiş ve meyve koleksiyonlarını keşfedin.",
  keywords: [
    "zunize",
    "el yapımı çikolata",
    "premium çikolata",
    "artisan chocolate",
    "çikolata kutusu",
    "butik çikolata",
  ],
  openGraph: {
    title: "Zunize | El Yapımı Seçkin Çikolata",
    description: "Zunize çikolata koleksiyonlarını keşfedin.",
    url: "https://zunize.com",
    siteName: "Zunize",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/zunize-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zunize | El Yapımı Seçkin Çikolata",
    description: "Zunize çikolata koleksiyonlarını keşfedin.",
    images: ["/images/zunize-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="PGoLgX1YG8B0dHZ9PGwBu-1xpqTMfqWNZH4uzvrAkNc" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
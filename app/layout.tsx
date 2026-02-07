import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { restaurantConfig } from "@/config/restaurant.config";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: restaurantConfig.seo.title,
  description: restaurantConfig.seo.description,
  keywords: restaurantConfig.seo.keywords,
  authors: [{ name: restaurantConfig.name }],
  openGraph: {
    title: restaurantConfig.seo.title,
    description: restaurantConfig.seo.description,
    type: "website",
    locale: "es_ES",
    siteName: restaurantConfig.name,
    images: [restaurantConfig.seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurantConfig.seo.title,
    description: restaurantConfig.seo.description,
    images: [restaurantConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

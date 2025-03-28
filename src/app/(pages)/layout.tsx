import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MERT ULAS - Home | Software Developer",
  description: "Mert Ulas's personal portfolio website. Projects built with React, Next.js, TypeScript and many other technologies.",
  keywords: "mert ulas, software developer, web design, front-end developer, react, next.js, typescript, portfolio",
  authors: [{ name: "Mert Ulaş", url: "https://github.com/MERTULAS" }],
  creator: "Mert Ulaş",
  publisher: "Mert Ulaş",
  metadataBase: new URL('https://mertulas.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: "Mert Ulaş - Home | Software Developer",
    description: "Mert Ulas's personal portfolio website. Projects built with React, Next.js, TypeScript and many other technologies.",
    url: 'https://mertulas.dev',
    siteName: 'Mert Ulaş Portfolio',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Ulaş - Home | Software Developer',
    description: 'Mert Ulas\'s personal portfolio website',
    creator: '@mertulaas',
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
    other: [
      { url: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/icons/site.webmanifest',
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mert Ulaş - Software Developer Portfolio",
  "url": "https://mertulas.dev",
  "description": "Mert Ulas's personal portfolio website. Projects built with React, Next.js, TypeScript and many other technologies.",
  "author": {
    "@type": "Person",
    "name": "Mert Ulaş",
    "url": "https://github.com/MERTULAS"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Navbar />
        <div className="app-content">
          {children}
        </div>
      </body>
    </html>
  );
};

import type { Metadata } from "next";
import "./globals.css";
import { seminarData } from "@/data/seminarData";

export const metadata: Metadata = {
  title: seminarData.siteTitle,
  description: seminarData.siteDescription,
  metadataBase: new URL(seminarData.canonicalUrl),
  alternates: {
    canonical: seminarData.canonicalUrl,
  },
  openGraph: {
    title: seminarData.siteTitle,
    description: seminarData.siteDescription,
    url: seminarData.canonicalUrl,
    siteName: seminarData.seminarTitle,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: seminarData.ogpImageUrl,
        width: 1200,
        height: 630,
        alt: seminarData.siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seminarData.siteTitle,
    description: seminarData.siteDescription,
    images: [seminarData.ogpImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}

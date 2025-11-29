import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Jinyylee's Portfolio",
  description: "Jinyylee's Portfolio",
  openGraph: {
    title: "Jinyylee's Portfolio",
    description: "Jinyylee's Portfolio",
    images: [
      {
        url: `${basePath}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Jinyylee's Portfolio Image",
      },
    ],
    type: "website",
    url: `${basePath}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

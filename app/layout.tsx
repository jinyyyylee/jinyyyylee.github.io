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

export const metadata: Metadata = {
  metadataBase: new URL("https://jinyyyylee.github.io/"),
  title: "Jinyylee's Portfolio",
  description: "모바일·프론트엔드·백엔드를 넘나드는 풀스택 개발자 이진영의 포트폴리오입니다.",
  openGraph: {
    title: "Jinyylee's Portfolio",
    description: "모바일·프론트엔드·백엔드를 넘나드는 풀스택 개발자 이진영의 포트폴리오입니다.",
    images: [
      {
        url: `/portfolio_thumb.png`,
        width: 1200,
        height: 630,
        alt: "Jinyylee's Portfolio Image",
      },
    ],
    type: "website",
    url: `https://jinyyyylee.github.io/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

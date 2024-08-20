import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "연차쓰기 좋은 날",
  description:
    "연차 사용을 고민하는 직장인들에게 최적의 날짜를 추천해주는 사이트!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

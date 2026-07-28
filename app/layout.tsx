import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
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
  title: "FunLegacy",
  description: "Die offizielle Webseite von FunLegacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate min-h-full overflow-x-hidden bg-[#070b11] text-white">
        <AnimatedBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
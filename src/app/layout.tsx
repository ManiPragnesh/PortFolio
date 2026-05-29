import type { Metadata } from "next";
import { Barlow_Condensed, Lora } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const bahnschriftFallback = Barlow_Condensed({
  variable: "--font-bahnschrift",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const palatinoFallback = Lora({
  variable: "--font-palatino",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MP | AI & ML Engineer",
  description: "Building secure, scalable, and intelligent systems. Portfolio of MP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bahnschriftFallback.variable} ${palatinoFallback.variable} antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#00f0ff] selection:text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

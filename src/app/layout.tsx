import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

const interTight = Inter({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ['700']
});

export const metadata: Metadata = {
  title: "Telles Vitrine",
  description: "Aqui você pode ver as empresas, serviços e produtos mais relevantes da região.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, interTight.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

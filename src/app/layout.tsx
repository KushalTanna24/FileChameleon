import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const websiteUrl = "https://filechameleon.com";

export const metadata: Metadata = {
  title:
    "FileChameleon - Free Online File Converter | Convert Documents, Images, Audio & More",
  description:
    "Convert your files effortlessly with FileChameleon - a free online file converter supporting various formats like MP3, JPG, AVI, MP4 and more.",
  creator: "KUSHAL TANNA",
  keywords:
    "file conversion, file converter, online converter, image conversion, audio conversion, video conversion",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "FileChameleon: Effortless File Conversion",
    description:
      "Convert your files between various formats with ease. FileChameleon offers a user-friendly interface and supports a wide range of file types.",
    url: websiteUrl,
    siteName: "FileChameleon",
  },
  twitter: {
    card: "summary_large_image",
    title: "FileChameleon: Effortless File Conversion",
    description:
      "Convert your files between various formats with ease. FileChameleon offers a user-friendly interface and supports a wide range of file types.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <Navbar />
          <Toaster />
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl ">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

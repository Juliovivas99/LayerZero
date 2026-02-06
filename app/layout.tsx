import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Layer Zero Studio | Design-led Engineering",
  description: "We are a digital product studio for ambitious brands. We fuse bold design with surgical engineering to build software that screams quality.",
  keywords: ["web development", "design", "engineering", "AI services", "software development"],
  authors: [{ name: "Layer Zero Studio" }],
  openGraph: {
    title: "Layer Zero Studio | Design-led Engineering",
    description: "Digital product studio for ambitious brands. Bold design meets surgical engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" async></script>
      </head>
      <body className={`${inter.className} overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunal Saha - Android & Full Stack Developer",
  description: "I build Android and Full-Stack solutions that actually work. Expertise in Kotlin, Jetpack Compose, Spring Boot, and modern web technologies.",
  keywords: "Android Developer, Full Stack Developer, Kotlin, Jetpack Compose, Spring Boot, React",
  authors: [{ name: "Kunal Saha" }],
  openGraph: {
    title: "Kunal Saha - Android & Full Stack Developer",
    description: "I build Android and Full-Stack solutions that actually work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} relative min-h-full flex flex-col bg-white`}>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WAI Soft - Your Way to Digital Innovation",
    template: "%s | WAI Soft",
  },
  description:
    "WAI Soft is an Egyptian company specializing in software development and design services. We live on the cutting-edge of technology focusing on quality and service.",
  keywords: [
    "WAI Soft",
    "Web Development",
    "Mobile Apps",
    "AI",
    "UX/UI Design",
    "Software Development",
    "Egypt",
    "Design Services",
  ],
  authors: [{ name: "WAI Soft" }],
  creator: "WAI Soft",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "https://wai-soft.com",
    siteName: "WAI Soft",
    title: "WAI Soft - Your Way to Digital Innovation",
    description: "WAI Soft is an Egyptian company specializing in software development and design services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WAI Soft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAI Soft - Your Way to Digital Innovation",
    description: "WAI Soft specializes in software development using AI",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

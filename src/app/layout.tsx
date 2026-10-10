import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SkipLink } from "@/components/layout/SkipLink";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: `${profile.name} | Risk Technology, Data and Transformation Delivery`,
  description: siteConfig.description,
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-AU",
    },
    {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.headline,
      email: profile.email,
      telephone: profile.phone,
      url: siteConfig.url,
      sameAs: [profile.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

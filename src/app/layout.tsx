import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
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
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

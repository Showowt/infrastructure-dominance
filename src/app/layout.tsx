import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infrastructure Dominance Engine | MachineMind Consulting",
  description:
    "AI-Powered Infrastructure Intelligence System. Compress 4-month studies into 72 hours. Transform Colombian infrastructure with real-time optimization and predictive analytics.",
  keywords: [
    "infrastructure",
    "AI",
    "Colombia",
    "construction",
    "BIM",
    "digital twin",
    "Cartagena",
    "MachineMind",
  ],
  authors: [{ name: "MachineMind Consulting" }],
  openGraph: {
    title: "Infrastructure Dominance Engine | MachineMind",
    description:
      "They take 4 months to study. We take 72 hours to deliver. Then we build while they are still reading reports.",
    url: "https://infrastructure.machinemind.io",
    siteName: "MachineMind Infrastructure",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infrastructure Dominance Engine",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructure Dominance Engine",
    description:
      "72 hours vs 4 months. AI-powered infrastructure intelligence for Colombia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a1628" />
      </head>
      <body className="bg-primary-950 text-white antialiased">{children}</body>
    </html>
  );
}

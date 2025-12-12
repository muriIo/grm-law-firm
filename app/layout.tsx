import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  process.exit(1);

export const metadata: Metadata = {
  title: "Gutierrez, Ribeiro & Mazzetto - Sociedade de Advogados",
  description: "Com atuação técnica e visão estratégica, assessoramos empresas e organizações que inovam, crescem e constroem o amanhã com responsabilidade.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

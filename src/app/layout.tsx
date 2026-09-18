import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteContent } from "@/lib/content";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fvelloso.com.br"),
  title: {
    default:
      "FVelloso Consultoria em SMS | Segurança do Trabalho, PGR, PCMSO e Treinamentos NR",
    template: "%s | FVelloso Consultoria em SMS",
  },
  description:
    "Há mais de 25 anos entregando consultoria em SMS, treinamentos NR 06, NR 08 e NR 18, elaboração de PGR e PCMSO e fiscalização de segurança em canteiros de obra e indústrias.",
  keywords: [
    "consultoria SMS",
    "segurança do trabalho",
    "PGR",
    "PCMSO",
    "NR 18",
    "NR 06",
    "NR 12",
    "treinamento de segurança",
    "fiscalização SMS",
    "saúde ocupacional",
  ],
  authors: [{ name: "FVelloso Consultoria em SMS" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "FVelloso Consultoria em SMS",
    title: "FVelloso Consultoria em SMS | 25+ anos em Segurança do Trabalho",
    description:
      "Consultoria, treinamentos normativos, PGR/PCMSO e fiscalização SMS para construtoras e indústrias.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1565C0",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const content = await getSiteContent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "FVelloso Consultoria em SMS",
    description: content.company.description,
    telephone: content.contact.phone,
    email: content.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.contact.addressLine1,
      addressLocality: content.contact.addressLine2,
      addressCountry: "BR",
    },
    areaServed: "Brasil",
    knowsAbout: content.services.map((service) => service.title),
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap"
        />
        <noscript>
          {/* Garante conteúdo visível mesmo sem JavaScript */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="bg-surface text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Header contact={content.contact} />
        <main id="conteudo" className="pt-[72px] lg:pt-[108px]">
          {children}
        </main>
        <Footer content={content} />
        <WhatsAppButton contact={content.contact} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

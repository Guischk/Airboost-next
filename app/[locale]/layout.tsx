import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import { Analytics } from "@vercel/analytics/next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import "../globals.css";

const notoSans = Noto_Sans({ variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Airboost — High-Performance SQLite Cache for Airtable",
  description:
    "240x faster queries, zero-downtime updates, and real-time webhooks. Open-source SQLite cache that turns your Airtable into a blazing-fast, always-available API.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`dark ${notoSans.variable}`}>
      <body className="antialiased scroll-smooth">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

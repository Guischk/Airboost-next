import type { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HiwBenchmarks } from "@/components/hiw-benchmarks";
import { HiwArchitecture } from "@/components/hiw-architecture";
import { HiwSyncModes } from "@/components/hiw-sync-modes";
import { HiwUseCases } from "@/components/hiw-use-cases";
import { HiwCta } from "@/components/hiw-cta";
import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { BlurFade } from "@/components/ui/blur-fade";

const SITE_URL = "https://airboost.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HowItWorks.metadata" });

  const url =
    locale === "en"
      ? `${SITE_URL}/how-it-works`
      : `${SITE_URL}/fr/how-it-works`;

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "Airboost",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/how-it-works`,
        fr: `${SITE_URL}/fr/how-it-works`,
      },
    },
  };
}

export default async function HowItWorksPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HowItWorks.hero");

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <Section className="pt-28 pb-8 md:pt-40 md:pb-12">
          <Container className="flex flex-col items-center text-center">
            <BlurFade delay={0}>
              <Title header="h1" size="display" className="max-w-3xl">
                {t("title")}
              </Title>
            </BlurFade>
            <BlurFade delay={0.1}>
              <Paragraph
                variant="muted"
                size="lg"
                className="mx-auto mt-6 max-w-2xl"
              >
                {t("subtitle")}
              </Paragraph>
            </BlurFade>
          </Container>
        </Section>

        <HiwBenchmarks />
        <HiwArchitecture />
        <HiwSyncModes />
        <HiwUseCases />
        <HiwCta />
      </main>
      <Footer />
    </>
  );
}

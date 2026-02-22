import { getTranslations } from "next-intl/server";
import { GithubIcon, RocketIcon, StarIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";

async function getGitHubStars(): Promise<number | null> {
  try {
    const res = await fetch("https://api.github.com/repos/Guischk/AirBoost", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count: number };
    return data.stargazers_count;
  } catch {
    return null;
  }
}

export async function Hero() {
  const t = await getTranslations();
  const stars = await getGitHubStars();

  return (
    <Section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <Badge
          variant="outline"
          className="mb-8 gap-2 border-border/60 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
        >
          {t("Hero.badge")}
        </Badge>

        {/* Main Title */}
        <Title header="h1" size="xl" className="max-w-4xl">
          {t("Hero.titleBefore")}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent">
            {t("Hero.titleHighlight")}
          </span>
        </Title>

        {/* Description */}
        <Paragraph size="lg" variant="muted" className="mt-6 max-w-2xl">
          {t("Hero.description")}
        </Paragraph>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://railway.com/template/airboost?referralCode=3Ri9K9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShimmerButton className="h-11 px-6 shadow-2xl">
              <RocketIcon className="mr-2 size-4" />
              <span className="text-sm font-medium tracking-tight text-white lg:text-base">
                {t("Hero.ctaDeploy")}
              </span>
            </ShimmerButton>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="h-11 gap-2 px-6"
            asChild
          >
            <a
              href="https://github.com/Guischk/AirBoost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              {t("Hero.ctaGithub")}
              {stars !== null && (
                <span className="ml-1 inline-flex items-center gap-1 text-muted-foreground">
                  <StarIcon className="size-3 fill-yellow-500 text-yellow-500" />
                  {stars}
                </span>
              )}
            </a>
          </Button>
        </div>

        {/* Inline Performance Comparison */}
        <div className="mt-16 grid w-full max-w-xl grid-cols-2 gap-4">
          {/* Airtable Card */}
          <div
            data-slot="perf-card"
            className="flex flex-col items-center rounded-2xl border border-border/50 bg-card/50 p-6 text-center"
          >
            <p className="text-xs font-medium text-muted-foreground">
              {t("Hero.airtableLabel")}
            </p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-foreground md:text-4xl">
              ~270ms
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("Hero.responseTime")}
            </p>
          </div>

          {/* Airboost Card */}
          <div
            data-slot="perf-card"
            className="relative flex flex-col items-center rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center"
          >
            <p className="text-xs font-medium text-primary">Airboost</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-foreground md:text-4xl">
              ~1ms
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("Hero.responseTime")}
            </p>
          </div>
        </div>

        {/* 240x Badge */}
        <Badge className="mt-4 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
          {t("Hero.fasterBadge")}
        </Badge>
      </Container>
    </Section>
  );
}

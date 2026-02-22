import { getTranslations } from "next-intl/server";
import { GithubIcon, RocketIcon, StarIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroPerfCards } from "@/components/hero-perf-cards";

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
    <Section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Enhanced multi-layer gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[600px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <BlurFade delay={0}>
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-sm font-medium text-foreground backdrop-blur-sm"
          >
            {t("Hero.badge")}
          </Badge>
        </BlurFade>

        {/* Main Title */}
        <BlurFade delay={0.1} className="mt-8">
          <Title header="h1" size="display" className="max-w-5xl text-balance">
            {t("Hero.titleBefore")}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                {t("Hero.titleHighlight")}
              </span>
            </span>
          </Title>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.2} className="mt-6">
          <Paragraph size="lg" variant="muted" className="max-w-3xl text-pretty leading-relaxed">
            {t("Hero.description")}
          </Paragraph>
        </BlurFade>

        {/* CTA Buttons */}
        <BlurFade delay={0.3} className="mt-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
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
        </BlurFade>

        {/* Performance Comparison */}
        <div className="mt-16 flex flex-col items-center">
          <HeroPerfCards />
        </div>
      </Container>
    </Section>
  );
}

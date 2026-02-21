import { useTranslations } from "next-intl";
import {
  ArrowRightIcon,
  DatabaseIcon,
  GithubIcon,
  RocketIcon,
  ServerIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { Badge } from "@/components/ui/badge";

const featurePills = [
  { key: "subMs", icon: ZapIcon },
  { key: "zeroDowntime", icon: DatabaseIcon },
  { key: "selfHosted", icon: ServerIcon },
  { key: "openSource", icon: ShieldCheckIcon },
] as const;

export function Hero() {
  const t = useTranslations();

  return (
    <Section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={60}
        ease={80}
        color="#6366f1"
        refresh
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="group rounded-full border border-white/10 bg-white/5 text-base transition-all ease-in hover:cursor-pointer hover:bg-white/10">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm transition ease-out hover:duration-300">
              <span>{t("Hero.badge")}</span>
              <ArrowRightIcon className="ml-1.5 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        {/* Main Title */}
        <Title header="h1" size="xl" className="max-w-4xl">
          {t("Hero.titleBefore")}
          <br className="sm:hidden" />
          {" "}
          <AuroraText colors={["#38bdf8", "#818cf8", "#c084fc"]}>
            {t("Hero.titleHighlight")}
          </AuroraText>
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
          <Button variant="outline" size="lg" className="h-11 gap-2 px-6" asChild>
            <a
              href="https://github.com/Guischk/AirBoost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              {t("Hero.ctaGithub")}
            </a>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {featurePills.map(({ key, icon: Icon }) => (
            <Badge
              key={key}
              variant="outline"
              className="gap-1.5 border-border/60 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
            >
              <Icon className="size-3 text-primary" />
              {t(`Project.features.${key}`)}
            </Badge>
          ))}
        </div>
      </Container>
    </Section>
  );
}

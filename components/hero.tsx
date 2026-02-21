import { useTranslations } from "next-intl";
import { ArrowRightIcon, DatabaseIcon, ZapIcon, ServerIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function Hero() {
  const t = useTranslations("Project");

  return (
    <Section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color="#eeeeee"
        refresh
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing {t("name")} 1.0</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        {/* Main Title */}
        <Title header="h1" size="xl" className="max-w-4xl tracking-tight">
          {t("tagline").split("Airtable")[0]}
          <AuroraText>Airtable</AuroraText>
          {t("tagline").split("Airtable")[1]}
        </Title>

        {/* Description */}
        <Paragraph size="lg" variant="muted" className="mt-6 max-w-2xl">
          {t("description")}
        </Paragraph>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get Started
            </span>
          </ShimmerButton>
          <Button variant="outline" size="lg" className="h-12 px-8">
            View Documentation
          </Button>
        </div>

        {/* Features List */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ZapIcon className="size-4 text-primary" />
            <span>{t("features.subMs")}</span>
          </div>
          <div className="flex items-center gap-2">
            <DatabaseIcon className="size-4 text-primary" />
            <span>{t("features.zeroDowntime")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ServerIcon className="size-4 text-primary" />
            <span>{t("features.selfHosted")}</span>
          </div>
        </div>

        {/* Video Dialog */}
        <div className="relative mt-20 w-full max-w-5xl rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-sm">
          <BorderBeam size={250} duration={12} delay={9} />
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4ymcqFtbiMlcjzOv"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4ymcqFtbiMlcjzOv"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </Container>
    </Section>
  );
}

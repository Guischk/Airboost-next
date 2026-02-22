"use client";

import React, { forwardRef, useRef } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { TerminalIcon, TrainTrackIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedBeam } from "@/components/ui/animated-beam";

/* ------------------------------------------------------------------ */
/*  Circle node                                                        */
/* ------------------------------------------------------------------ */

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border/50 bg-card/80 z-10 flex size-12 items-center justify-center rounded-full border p-2.5 shadow-[0_0_20px_-12px_rgba(255,255,255,0.15)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Output framework nodes                                             */
/* ------------------------------------------------------------------ */

const outputFrameworks = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Nuxt", logo: "/logos/nuxt.svg" },
  { name: "Astro", logo: "/logos/astro.svg" },
  { name: "WeWeb", logo: "/logos/weweb.svg" },
  { name: "Bubble", logo: "/logos/bubble.svg" },
] as const;

/* ------------------------------------------------------------------ */
/*  Code blocks (terminal samples)                                     */
/* ------------------------------------------------------------------ */

const codeBlocks = {
  local: `# Clone and run locally
git clone https://github.com/Guischk/AirBoost.git
cd AirBoost

# Set your environment variables
cp .env.example .env
# Edit .env with your Airtable token & base ID

# Start with Bun
bun install && bun run start`,

  railway: `# One-click deploy on Railway
# 1. Click "Deploy on Railway" button
# 2. Set environment variables:
#    AIRTABLE_PERSONAL_TOKEN=your_token
#    AIRTABLE_BASE_ID=your_base_id
#    BEARER_TOKEN=your_api_token
# 3. Done! Your instance is live.

# Railway auto-configures HTTPS,
# custom domains, and scaling.`,
} as const;

/* ------------------------------------------------------------------ */
/*  QuickStart component                                               */
/* ------------------------------------------------------------------ */

export function QuickStart() {
  const t = useTranslations("QuickStart");

  /* Refs for AnimatedBeam wiring */
  const containerRef = useRef<HTMLDivElement>(null);
  const airtableRef = useRef<HTMLDivElement>(null);
  const airboostRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const nuxtRef = useRef<HTMLDivElement>(null);
  const astroRef = useRef<HTMLDivElement>(null);
  const wewebRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const outputRefs = [nextRef, nuxtRef, astroRef, wewebRef, bubbleRef];

  return (
    <Section id="quick-start">
      <Container>
        {/* Section Header */}
        <BlurFade inView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Title header="h2" size="lg">
              {t("title")}
            </Title>
            <Paragraph variant="muted" size="lg" className="mt-4">
              {t("subtitle")}
            </Paragraph>
          </div>
        </BlurFade>

        {/* ── Architecture Diagram ── */}
        <BlurFade delay={0.1} inView>
          <div
            ref={containerRef}
            className="relative mx-auto flex h-fit w-full max-w-3xl items-center justify-center overflow-hidden"
          >
            <div className="flex size-full flex-row items-stretch justify-between gap-6 sm:gap-10">
              {/* Left column — Airtable */}
              <div className="flex flex-col items-center justify-center gap-2">
                <Circle ref={airtableRef} className="size-12 md:size-14">
                  <Image
                    src="/logos/airtable.svg"
                    alt="Airtable"
                    width={32}
                    height={32}
                    className="size-6 md:size-7"
                  />
                </Circle>
                <span className="text-muted-foreground text-xs md:text-sm">
                  Airtable
                </span>
              </div>

              {/* Center column — Airboost */}
              <div className="flex flex-col items-center justify-center gap-2">
                <Circle
                  ref={airboostRef}
                  className="border-primary/30 bg-primary/10 size-14 md:size-16"
                >
                  <Image
                    src="/airboost_favicon.svg"
                    alt="Airboost"
                    width={36}
                    height={36}
                    className="size-7 md:size-8"
                  />
                </Circle>
                <span className="text-primary text-xs font-medium md:text-sm">
                  Airboost
                </span>
              </div>

              {/* Right column — Output frameworks */}
              <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                {outputFrameworks.map(({ name, logo }, i) => (
                  <div key={name} className="flex flex-col items-center gap-1">
                    <Circle ref={outputRefs[i]}>
                      <Image
                        src={logo}
                        alt={name}
                        width={28}
                        height={28}
                        className="size-5 md:size-6"
                      />
                    </Circle>
                    <span className="text-muted-foreground hidden text-xs sm:block">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Animated Beams ── */}

            {/* Airtable → Airboost */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={airtableRef}
              toRef={airboostRef}
              gradientStartColor="oklch(0.62 0.22 265)"
              gradientStopColor="oklch(0.72 0.17 230)"
              pathColor="oklch(1 0 0 / 8%)"
              duration={3}
            />
            
            {/* Airboost → each output framework */}
            {outputRefs.map((ref, i) => (
              <AnimatedBeam
                key={i}
                containerRef={containerRef}
                fromRef={airboostRef}
                toRef={ref}
                gradientStartColor="oklch(0.72 0.17 230)"
                gradientStopColor="oklch(0.62 0.22 265)"
                pathColor="oklch(1 0 0 / 8%)"
                duration={3}
                delay={(i + 1) * 0.4}
              />
            ))}
          </div>
        </BlurFade>

        {/* ── Terminal Tabs ── */}
        <BlurFade delay={0.2} inView>
          <div className="mx-auto mt-12 max-w-2xl">
            <Tabs defaultValue="local">
              <TabsList variant="line" className="mb-4">
                <TabsTrigger value="local" className="gap-1.5">
                  <TerminalIcon className="size-3.5" />
                  {t("tabLocal")}
                </TabsTrigger>
                <TabsTrigger value="railway" className="gap-1.5">
                  <TrainTrackIcon className="size-3.5" />
                  {t("tabRailway")}
                </TabsTrigger>
              </TabsList>

              {(Object.keys(codeBlocks) as Array<keyof typeof codeBlocks>).map(
                (tab) => (
                  <TabsContent key={tab} value={tab}>
                    <div className="border-border/50 overflow-hidden rounded-xl border bg-zinc-950">
                      {/* Terminal header */}
                      <div className="border-border/30 flex items-center gap-2 border-b px-4 py-2.5">
                        <div className="size-2.5 rounded-full bg-red-500/60" />
                        <div className="size-2.5 rounded-full bg-yellow-500/60" />
                        <div className="size-2.5 rounded-full bg-green-500/60" />
                        <span className="text-muted-foreground ml-2 text-xs">
                          terminal
                        </span>
                      </div>
                      {/* Code */}
                      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-emerald-400/90 md:text-sm">
                        <code>{codeBlocks[tab]}</code>
                      </pre>
                    </div>
                  </TabsContent>
                )
              )}
            </Tabs>

            <div className="border-border/50 bg-card/40 mt-4 rounded-xl border p-4">
              <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {t("requiredEnv")}
              </p>
              <p className="text-foreground/90 mt-2 font-mono text-xs md:text-sm">
                AIRTABLE_PERSONAL_TOKEN · AIRTABLE_BASE_ID · BEARER_TOKEN
              </p>

              <p className="text-muted-foreground mt-4 text-xs font-semibold tracking-wide uppercase">
                {t("mainEndpoint")}
              </p>
              <p className="text-foreground/90 mt-2 font-mono text-xs md:text-sm">
                GET /api/tables/:table
              </p>
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { TerminalIcon, BoxIcon, TrainTrackIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const codeBlocks = {
  local: `# Clone and run locally
git clone https://github.com/Guischk/AirBoost.git
cd AirBoost

# Set your environment variables
cp .env.example .env
# Edit .env with your Airtable token & base ID

# Start with Bun
bun install && bun run start`,

  docker: `# Pull and run with Docker
docker run -d \\
  -p 3000:3000 \\
  -e AIRTABLE_PERSONAL_TOKEN=your_token \\
  -e AIRTABLE_BASE_ID=your_base_id \\
  -e BEARER_TOKEN=your_api_token \\
  ghcr.io/guischk/airboost:latest`,

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

export function QuickStart() {
  const t = useTranslations("QuickStart");
  const containerRef = useRef<HTMLDivElement>(null);
  const airtableRef = useRef<HTMLDivElement>(null);
  const airboostRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);

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

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Architecture Diagram with AnimatedBeam */}
          <BlurFade delay={0.1} inView>
            <div
              ref={containerRef}
              className="relative flex flex-col items-center justify-center gap-12"
            >
              {/* Airtable */}
              <div
                ref={airtableRef}
                className="flex w-full max-w-xs items-center justify-center rounded-xl border border-border bg-card px-6 py-4 shadow-sm backdrop-blur-sm"
              >
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    Airtable
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("diagramSource")}
                  </p>
                </div>
              </div>

              {/* Airboost */}
              <div
                ref={airboostRef}
                className="flex w-full max-w-xs items-center justify-center rounded-xl border border-primary/30 bg-primary/10 px-6 py-4 shadow-sm backdrop-blur-sm"
              >
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary">Airboost</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("diagramCache")}
                  </p>
                </div>
              </div>

              {/* Your App */}
              <div
                ref={appRef}
                className="flex w-full max-w-xs items-center justify-center rounded-xl border border-border bg-card px-6 py-4 shadow-sm backdrop-blur-sm"
              >
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {t("diagramApp")}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("diagramSpeed")}
                  </p>
                </div>
              </div>

              {/* Animated Beams */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={airtableRef}
                toRef={airboostRef}
                gradientStartColor="oklch(0.62 0.22 265)"
                gradientStopColor="oklch(0.72 0.17 230)"
                pathColor="oklch(1 0 0 / 8%)"
                duration={4}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={airboostRef}
                toRef={appRef}
                gradientStartColor="oklch(0.72 0.17 230)"
                gradientStopColor="oklch(0.62 0.22 265)"
                pathColor="oklch(1 0 0 / 8%)"
                duration={4}
                delay={1}
              />
            </div>
          </BlurFade>

          {/* Right: Terminal Tabs */}
          <BlurFade delay={0.2} inView>
            <div>
              <Tabs defaultValue="local">
                <TabsList variant="line" className="mb-4">
                  <TabsTrigger value="local" className="gap-1.5">
                    <TerminalIcon className="size-3.5" />
                    {t("tabLocal")}
                  </TabsTrigger>
                  <TabsTrigger value="docker" className="gap-1.5">
                    <BoxIcon className="size-3.5" />
                    {t("tabDocker")}
                  </TabsTrigger>
                  <TabsTrigger value="railway" className="gap-1.5">
                    <TrainTrackIcon className="size-3.5" />
                    {t("tabRailway")}
                  </TabsTrigger>
                </TabsList>

                {(
                  Object.keys(codeBlocks) as Array<keyof typeof codeBlocks>
                ).map((tab) => (
                  <TabsContent key={tab} value={tab}>
                    <div className="overflow-hidden rounded-lg border border-border bg-zinc-950 shadow-md">
                      {/* Terminal header */}
                      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/90 px-4 py-2.5">
                        <div className="size-2.5 rounded-full bg-red-500/80" />
                        <div className="size-2.5 rounded-full bg-yellow-500/80" />
                        <div className="size-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-1.5 text-xs font-medium text-zinc-500">
                          terminal
                        </span>
                      </div>
                      {/* Code */}
                      <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-emerald-400">
                        <code>{codeBlocks[tab]}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 space-y-5 rounded-lg border border-border bg-card/50 p-5 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {t("requiredEnv")}
                  </p>
                  <p className="mt-2.5 font-mono text-xs text-foreground">
                    AIRTABLE_PERSONAL_TOKEN · AIRTABLE_BASE_ID · BEARER_TOKEN
                  </p>
                </div>

                <div className="border-t border-border/50 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {t("mainEndpoint")}
                  </p>
                  <p className="mt-2.5 font-mono text-xs text-foreground">
                    GET /api/tables/:table
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </Section>
  );
}

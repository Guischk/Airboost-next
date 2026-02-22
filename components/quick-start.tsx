"use client";

import { useTranslations } from "next-intl";
import {
  TerminalIcon,
  BoxIcon,
  TrainTrackIcon,
  ArrowRightIcon,
} from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const codeBlocks = {
  local: `# Clone and run locally
git clone https://github.com/Guischk/AirBoost.git
cd AirBoost

# Set your environment variables
cp .env.example .env
# Edit .env with your Airtable API key & base ID

# Start with Bun
bun install && bun run start`,

  docker: `# Pull and run with Docker
docker run -d \\
  -p 3000:3000 \\
  -e AIRTABLE_API_KEY=your_key \\
  -e AIRTABLE_BASE_ID=your_base \\
  ghcr.io/guischk/airboost:latest`,

  railway: `# One-click deploy on Railway
# 1. Click "Deploy on Railway" button
# 2. Set environment variables:
#    AIRTABLE_API_KEY=your_key
#    AIRTABLE_BASE_ID=your_base
# 3. Done! Your instance is live.

# Railway auto-configures HTTPS,
# custom domains, and scaling.`,
} as const;

export function QuickStart() {
  const t = useTranslations("QuickStart");

  return (
    <Section id="quick-start">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Title header="h2" size="lg">
            {t("title")}
          </Title>
          <Paragraph variant="muted" size="lg" className="mt-4">
            {t("subtitle")}
          </Paragraph>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Architecture Diagram (static) */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex w-full max-w-xs flex-col items-center gap-4">
              {/* Airtable */}
              <div className="flex w-full items-center justify-center rounded-xl border border-border/50 bg-card/80 px-6 py-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    Airtable
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("diagramSource")}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1 text-muted-foreground/50">
                <div className="h-4 w-px bg-border" />
                <ArrowRightIcon className="size-4 rotate-90" />
              </div>

              {/* Airboost */}
              <div className="flex w-full items-center justify-center rounded-xl border border-primary/30 bg-primary/5 px-6 py-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary">Airboost</p>
                  <p className="text-xs text-muted-foreground">
                    {t("diagramCache")}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1 text-muted-foreground/50">
                <div className="h-4 w-px bg-border" />
                <ArrowRightIcon className="size-4 rotate-90" />
              </div>

              {/* Your App */}
              <div className="flex w-full items-center justify-center rounded-xl border border-border/50 bg-card/80 px-6 py-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {t("diagramApp")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("diagramSpeed")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Terminal Tabs */}
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

              {(Object.keys(codeBlocks) as Array<keyof typeof codeBlocks>).map(
                (tab) => (
                  <TabsContent key={tab} value={tab}>
                    <div className="overflow-hidden rounded-xl border border-border/50 bg-zinc-950">
                      {/* Terminal header */}
                      <div className="flex items-center gap-2 border-b border-border/30 px-4 py-2.5">
                        <div className="size-2.5 rounded-full bg-red-500/60" />
                        <div className="size-2.5 rounded-full bg-yellow-500/60" />
                        <div className="size-2.5 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-xs text-muted-foreground">
                          terminal
                        </span>
                      </div>
                      {/* Code */}
                      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-emerald-400/90 md:text-sm">
                        <code>{codeBlocks[tab]}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ),
              )}
            </Tabs>
          </div>
        </div>
      </Container>
    </Section>
  );
}

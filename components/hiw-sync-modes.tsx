import { useTranslations } from "next-intl";
import { TimerIcon, ZapIcon, SlidersHorizontalIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const syncModes = [
  { key: "polling", icon: TimerIcon },
  { key: "webhook", icon: ZapIcon },
  { key: "manual", icon: SlidersHorizontalIcon },
] as const;

export function HiwSyncModes() {
  const t = useTranslations("HowItWorks.syncModes");

  return (
    <Section>
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

        {/* Sync Mode Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {syncModes.map(({ key, icon: Icon }, idx) => (
            <BlurFade key={key} delay={0.1 * idx} inView>
              <div className="h-full w-full rounded-2xl">
                <MagicCard
                  gradientSize={200}
                  gradientColor="oklch(0.14 0.04 265)"
                  gradientFrom="oklch(0.62 0.22 265)"
                  gradientTo="oklch(0.72 0.17 230)"
                  className="h-full w-full"
                >
                  <div
                    data-slot="sync-mode-card"
                    className="flex h-full flex-col gap-4 p-8"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {t(`${key}Name`)}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {t(`${key}Description`)}
                      </p>
                      <Badge
                        variant="secondary"
                        className="w-fit text-xs font-medium"
                      >
                        {t(`${key}BestFor`)}
                      </Badge>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </Section>
  );
}

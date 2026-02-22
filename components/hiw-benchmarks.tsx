import { useTranslations } from "next-intl";
import { ZapIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";

const benchmarkRows = [
  { key: "singleRecord" },
  { key: "smallBatch" },
  { key: "mediumBatch" },
  { key: "fullScan" },
] as const;

export function HiwBenchmarks() {
  const t = useTranslations("HowItWorks.benchmarks");

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

        {/* Benchmarks Table */}
        <BlurFade delay={0.1} inView>
          <div className="border-border/50 bg-card/30 mx-auto max-w-3xl overflow-hidden rounded-2xl border">
            {/* Table Header */}
            <div className="border-border/50 bg-card/60 text-muted-foreground grid grid-cols-4 gap-px border-b px-6 py-3 text-xs font-semibold tracking-wider uppercase">
              <span>{t("scenario")}</span>
              <span className="text-center">{t("airtable")}</span>
              <span className="text-center">{t("sqlite")}</span>
              <span className="text-right">{t("improvement")}</span>
            </div>

            {/* Table Rows */}
            {benchmarkRows.map(({ key }, idx) => (
              <BlurFade key={key} delay={0.15 + idx * 0.05} inView>
                <div
                  data-slot="benchmark-row"
                  className="border-border/30 grid grid-cols-4 gap-px border-b px-6 py-4 last:border-b-0"
                >
                  <span className="text-foreground text-sm font-medium">
                    {t(key)}
                  </span>
                  <span className="text-muted-foreground text-center text-sm tabular-nums">
                    {t(`${key}Airtable`)}
                  </span>
                  <span className="text-primary text-center text-sm font-medium tabular-nums">
                    {t(`${key}Sqlite`)}
                  </span>
                  <span className="text-foreground text-right text-sm font-bold tabular-nums">
                    {t(`${key}Improvement`)}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </BlurFade>

        {/* Average Badge */}
        <BlurFade delay={0.4} inView>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3">
            <Badge className="bg-primary/10 text-primary gap-2 px-5 py-2 text-base font-bold">
              <ZapIcon className="size-4" />
              {t("averageValue")}
            </Badge>
            <p className="text-muted-foreground text-sm">
              {t("latencyReduction")}
            </p>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

"use client";

import { useTranslations } from "next-intl";

import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";

export function HeroPerfCards() {
  const t = useTranslations("Hero");

  return (
    <>
      {/* Main latency comparison */}
      <BlurFade delay={0.5}>
        <div className="grid w-full max-w-xl grid-cols-2 gap-4">
          {/* Airtable Card */}
          <div
            data-slot="perf-card"
            className="flex flex-col items-center rounded-2xl border border-border/50 bg-card/50 p-6 text-center"
          >
            <p className="text-xs font-medium text-muted-foreground">
              {t("airtableLabel")}
            </p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-foreground md:text-4xl">
              ~<NumberTicker value={270} delay={0.8} />
              ms
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("responseTime")}
            </p>
          </div>

          {/* Airboost Card */}
          <div
            data-slot="perf-card"
            className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center"
          >
            <BorderBeam
              size={120}
              duration={8}
              colorFrom="oklch(0.62 0.22 265)"
              colorTo="oklch(0.72 0.17 230)"
            />
            <p className="text-xs font-medium text-primary">Airboost</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-foreground md:text-4xl">
              ~<NumberTicker value={1} delay={0.8} />
              ms
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} className="mt-4">
        <Badge className="bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
          {t("fasterBadge")}
        </Badge>
      </BlurFade>

      {/* Additional value metrics */}
      <BlurFade delay={0.7} className="mt-6">
        <div className="grid w-full max-w-xl grid-cols-2 gap-3">
          {/* Rate limits */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-xl border border-border/40 bg-card/30 px-4 py-3 text-center"
          >
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {t("rateLimitLabel")}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground line-through decoration-destructive/60">
                {t("rateLimitAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/50">&rarr;</span>
              <span className="text-sm font-bold text-primary">
                {t("rateLimitAirboost")}
              </span>
            </div>
          </div>

          {/* Availability */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-xl border border-border/40 bg-card/30 px-4 py-3 text-center"
          >
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {t("quotaLabel")}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground line-through decoration-destructive/60">
                {t("quotaAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/50">&rarr;</span>
              <span className="text-sm font-bold text-primary">
                {t("quotaAirboost")}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

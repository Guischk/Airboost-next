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
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Airtable Card */}
          <div
            data-slot="perf-card"
            className="group flex flex-col items-center rounded-xl border border-border bg-card/80 p-8 text-center backdrop-blur-sm transition-all hover:bg-card"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {t("airtableLabel")}
            </p>
            <p className="mt-6 text-5xl font-bold tabular-nums tracking-tight text-foreground md:text-6xl">
              ~<NumberTicker value={270} delay={0.8} />
              <span className="text-2xl font-normal text-muted-foreground">ms</span>
            </p>
            <p className="mt-3 text-xs font-medium text-muted-foreground/70">
              {t("responseTime")}
            </p>
          </div>

          {/* Airboost Card */}
          <div
            data-slot="perf-card"
            className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-primary/30 bg-card/80 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
          >
            <BorderBeam
              size={150}
              duration={12}
              colorFrom="oklch(0.72 0.19 264)"
              colorTo="oklch(0.75 0.16 200)"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Airboost
            </p>
            <p className="mt-6 text-5xl font-bold tabular-nums tracking-tight text-foreground md:text-6xl">
              ~<NumberTicker value={1} delay={0.8} />
              <span className="text-2xl font-normal text-muted-foreground">ms</span>
            </p>
            <p className="mt-3 text-xs font-medium text-muted-foreground/70">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} className="mt-8">
        <Badge className="bg-primary/10 px-4 py-2 text-base font-semibold text-primary ring-1 ring-primary/20">
          {t("fasterBadge")}
        </Badge>
      </BlurFade>

      {/* Additional value metrics */}
      <BlurFade delay={0.7} className="mt-10">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Rate limits */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-lg border border-border/80 bg-card/50 px-6 py-5 text-center backdrop-blur-sm transition-all hover:border-border hover:bg-card/70"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              {t("rateLimitLabel")}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground/60 line-through decoration-destructive/60">
                {t("rateLimitAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/40">→</span>
              <span className="text-base font-semibold text-primary">
                {t("rateLimitAirboost")}
              </span>
            </div>
          </div>

          {/* Quota */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-lg border border-border/80 bg-card/50 px-6 py-5 text-center backdrop-blur-sm transition-all hover:border-border hover:bg-card/70"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              {t("quotaLabel")}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground/60 line-through decoration-destructive/60">
                {t("quotaAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/40">→</span>
              <span className="text-base font-semibold text-primary">
                {t("quotaAirboost")}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

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
        <div className="grid w-full max-w-2xl grid-cols-2 gap-6">
          {/* Airtable Card */}
          <div
            data-slot="perf-card"
            className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-sm transition-all hover:border-border"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("airtableLabel")}
            </p>
            <p className="mt-4 text-4xl font-bold tabular-nums text-foreground md:text-5xl">
              ~<NumberTicker value={270} delay={0.8} />
              <span className="text-2xl text-muted-foreground">ms</span>
            </p>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {t("responseTime")}
            </p>
          </div>

          {/* Airboost Card */}
          <div
            data-slot="perf-card"
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
          >
            <BorderBeam
              size={150}
              duration={8}
              colorFrom="oklch(0.7 0.19 265)"
              colorTo="oklch(0.75 0.15 230)"
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Airboost
            </p>
            <p className="mt-4 text-4xl font-bold tabular-nums text-foreground md:text-5xl">
              ~<NumberTicker value={1} delay={0.8} />
              <span className="text-2xl text-muted-foreground">ms</span>
            </p>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} className="mt-6">
        <Badge className="bg-gradient-to-r from-primary/15 to-accent/10 px-5 py-2 text-base font-bold text-primary ring-1 ring-primary/20">
          {t("fasterBadge")}
        </Badge>
      </BlurFade>

      {/* Additional value metrics */}
      <BlurFade delay={0.7} className="mt-8">
        <div className="grid w-full max-w-2xl grid-cols-2 gap-4">
          {/* Rate limits */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 px-6 py-4 text-center backdrop-blur-sm transition-all hover:border-border/80"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {t("rateLimitLabel")}
            </p>
            <div className="mt-2 flex items-center gap-2.5">
              <span className="text-sm font-semibold text-muted-foreground/70 line-through decoration-destructive/70 decoration-2">
                {t("rateLimitAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/40">&rarr;</span>
              <span className="text-base font-bold text-primary">
                {t("rateLimitAirboost")}
              </span>
            </div>
          </div>

          {/* Quota */}
          <div
            data-slot="perf-stat"
            className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 px-6 py-4 text-center backdrop-blur-sm transition-all hover:border-border/80"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {t("quotaLabel")}
            </p>
            <div className="mt-2 flex items-center gap-2.5">
              <span className="text-sm font-semibold text-muted-foreground/70 line-through decoration-destructive/70 decoration-2">
                {t("quotaAirtable")}
              </span>
              <span className="text-xs text-muted-foreground/40">&rarr;</span>
              <span className="text-base font-bold text-primary">
                {t("quotaAirboost")}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

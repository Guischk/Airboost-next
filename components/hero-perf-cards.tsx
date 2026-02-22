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
            className="border-border/50 bg-card/50 flex flex-col items-center rounded-2xl border p-6 text-center"
          >
            <p className="text-muted-foreground text-xs font-medium">
              {t("airtableLabel")}
            </p>
            <p className="text-foreground mt-2 text-3xl font-bold tabular-nums md:text-4xl">
              ~<NumberTicker value={270} delay={0.8} />
              ms
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              {t("responseTime")}
            </p>
          </div>

          {/* Airboost Card */}
          <div
            data-slot="perf-card"
            className="border-primary/30 bg-primary/5 relative flex flex-col items-center overflow-hidden rounded-2xl border p-6 text-center"
          >
            <BorderBeam
              size={120}
              duration={8}
              colorFrom="oklch(0.62 0.22 265)"
              colorTo="oklch(0.72 0.17 230)"
            />
            <p className="text-primary text-xs font-medium">Airboost</p>
            <p className="text-foreground mt-2 text-3xl font-bold tabular-nums md:text-4xl">
              ~<NumberTicker value={1} delay={0.8} />
              ms
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.6} className="mt-4">
        <Badge className="bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold">
          {t("fasterBadge")}
        </Badge>
      </BlurFade>

      {/* Additional value metrics */}
      <BlurFade delay={0.7} className="mt-6">
        <div className="grid w-full max-w-xl grid-cols-2 gap-3">
          {/* Rate limits */}
          <div
            data-slot="perf-stat"
            className="border-border/40 bg-card/30 flex flex-col items-center rounded-xl border px-4 py-3 text-center"
          >
            <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
              {t("rateLimitLabel")}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-muted-foreground decoration-destructive/60 text-sm font-medium line-through">
                {t("rateLimitAirtable")}
              </span>
              <span className="text-muted-foreground/50 text-xs">&rarr;</span>
              <span className="text-primary text-sm font-bold">
                {t("rateLimitAirboost")}
              </span>
            </div>
          </div>

          {/* Availability */}
          <div
            data-slot="perf-stat"
            className="border-border/40 bg-card/30 flex flex-col items-center rounded-xl border px-4 py-3 text-center"
          >
            <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
              {t("quotaLabel")}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-muted-foreground decoration-destructive/60 text-sm font-medium line-through">
                {t("quotaAirtable")}
              </span>
              <span className="text-muted-foreground/50 text-xs">&rarr;</span>
              <span className="text-primary text-sm font-bold">
                {t("quotaAirboost")}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

"use client";

import { useLocale, useTranslations, useFormatter } from "next-intl";
import { GlobeIcon, CalendarIcon, HashIcon, ClockIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const DEMO_DATE = new Date("2026-02-21T10:30:00");
const DEMO_NUMBER = 1_284_729.42;
const RELATIVE_DATE = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);

function LocaleDemo() {
  const locale = useLocale();
  const t = useTranslations("LocaleDemo");
  const format = useFormatter();

  const otherLocale = routing.locales.find((l) => l !== locale)!;

  return (
    <Card className="w-full max-w-sm" data-slot="locale-demo">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">
            {t("currentLocale")}
          </span>
          <Badge variant="outline">
            <GlobeIcon data-icon="inline-start" />
            {t(`languages.${locale}`)}
          </Badge>
        </div>

        <Separator />

        <p className="text-foreground text-lg font-semibold">{t("greeting")}</p>

        <Separator />

        <div className="grid gap-3">
          <FormatRow icon={<CalendarIcon />} label={t("formattedDate")}>
            {format.dateTime(DEMO_DATE, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </FormatRow>
          <FormatRow icon={<HashIcon />} label={t("formattedNumber")}>
            {format.number(DEMO_NUMBER, {
              style: "currency",
              currency: "EUR",
            })}
          </FormatRow>
          <FormatRow icon={<ClockIcon />} label={t("relativeTime")}>
            {format.relativeTime(RELATIVE_DATE)}
          </FormatRow>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/" locale={otherLocale}>
            <GlobeIcon data-icon="inline-start" />
            {t("switchLocale", { locale: t(`languages.${otherLocale}`) })}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function FormatRow({
  icon,
  label,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      data-slot="format-row"
      className={cn("flex items-start gap-3 text-sm", className)}
      {...props}
    >
      <span className="text-muted-foreground mt-0.5 shrink-0 [&>svg]:size-4">
        {icon}
      </span>
      <div className="grid min-w-0 gap-0.5">
        <span className="text-muted-foreground text-xs">{label}</span>
        <span className="text-foreground font-medium">{children}</span>
      </div>
    </div>
  );
}

export { LocaleDemo };

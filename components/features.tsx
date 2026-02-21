import { useTranslations } from "next-intl";
import {
  ZapIcon,
  RefreshCwIcon,
  CodeIcon,
  ServerIcon,
  PaperclipIcon,
  RadioIcon,
} from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { cn } from "@/lib/utils";

const features = [
  {
    key: "blazingFast",
    icon: ZapIcon,
    className: "md:col-span-2",
  },
  {
    key: "zeroDowntime",
    icon: RefreshCwIcon,
    className: "md:col-span-1",
  },
  {
    key: "typeSafety",
    icon: CodeIcon,
    className: "md:col-span-1",
  },
  {
    key: "selfHosted",
    icon: ServerIcon,
    className: "md:col-span-1",
  },
  {
    key: "realTimeSync",
    icon: RadioIcon,
    className: "md:col-span-1",
  },
  {
    key: "attachments",
    icon: PaperclipIcon,
    className: "md:col-span-3 md:flex-row md:items-center",
  },
] as const;

export function Features() {
  const t = useTranslations("Features");

  return (
    <Section id="features" className="relative">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Title header="h2" size="lg">
            {t("title")}
          </Title>
          <Paragraph variant="muted" size="lg" className="mt-4">
            {t("subtitle")}
          </Paragraph>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ key, icon: Icon, className }) => (
            <div
              key={key}
              data-slot="feature-card"
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm",
                "transition-all duration-300 hover:border-primary/30 hover:bg-card/80",
                "hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10",
                className,
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-4",
                  className?.includes("flex-row")
                    ? "md:flex-row md:items-center md:gap-8"
                    : "",
                )}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {t(`${key}.name`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

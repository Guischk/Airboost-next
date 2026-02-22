import { useTranslations } from "next-intl";
import { ZapIcon, RefreshCwIcon, ServerIcon, RadioIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";

const features = [
  { key: "blazingFast", icon: ZapIcon },
  { key: "zeroDowntime", icon: RefreshCwIcon },
  { key: "realTimeSync", icon: RadioIcon },
  { key: "selfHosted", icon: ServerIcon },
] as const;

export function Features() {
  const t = useTranslations("Features");

  return (
    <Section id="features">
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

        {/* 2x2 Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ key, icon: Icon }) => (
            <div
              key={key}
              data-slot="feature-card"
              className="group flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/80 p-8 transition-colors duration-200 hover:border-primary/20 hover:bg-card"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

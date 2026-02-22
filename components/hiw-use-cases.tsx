import { useTranslations } from "next-intl";
import {
  GlobeIcon,
  LayoutDashboardIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { BlurFade } from "@/components/ui/blur-fade";

const useCases = [
  { key: "highTraffic", icon: GlobeIcon },
  { key: "dashboards", icon: LayoutDashboardIcon },
  { key: "mobile", icon: SmartphoneIcon },
  { key: "ecommerce", icon: ShoppingCartIcon },
] as const;

export function HiwUseCases() {
  const t = useTranslations("HowItWorks.useCases");

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

        {/* Use Case Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {useCases.map(({ key, icon: Icon }, idx) => (
            <BlurFade key={key} delay={0.1 * idx} inView>
              <div
                data-slot="use-case-card"
                className="flex gap-5 rounded-2xl border border-border/50 bg-card/30 p-6 transition-colors hover:border-border/80 hover:bg-card/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {t(`${key}Name`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`${key}Description`)}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { useTranslations } from "next-intl";
import { ZapIcon, RefreshCwIcon, ServerIcon, RadioIcon, PaperclipIcon, CodeIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  { key: "blazingFast", icon: ZapIcon },
  { key: "zeroDowntime", icon: RefreshCwIcon },
  { key: "realTimeSync", icon: RadioIcon },
  { key: "selfHosted", icon: ServerIcon },
  { key: "attachments", icon: PaperclipIcon },
  { key: "typeSafety", icon: CodeIcon },
] as const;

export function Features() {
  const t = useTranslations("Features");

  return (
    <Section id="features">
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

        {/* Feature Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, icon: Icon }, idx) => (
            <BlurFade key={key} delay={0.1 * idx} inView>
              <div className="group h-full w-full rounded-2xl">
                <MagicCard
                  gradientSize={250}
                  gradientColor="oklch(0.11 0.015 265)"
                  gradientFrom="oklch(0.7 0.19 265)"
                  gradientTo="oklch(0.75 0.15 230)"
                  className="h-full w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    data-slot="feature-card"
                    className="flex h-full flex-col gap-5 p-8"
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 transition-all group-hover:from-primary/30 group-hover:to-primary/10 group-hover:ring-primary/30">
                      <Icon className="size-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        {t(`${key}.name`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {t(`${key}.description`)}
                      </p>
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

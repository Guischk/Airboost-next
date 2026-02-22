import { useTranslations } from "next-intl";
import {
  ZapIcon,
  RefreshCwIcon,
  ServerIcon,
  RadioIcon,
  PaperclipIcon,
  CodeIcon,
} from "lucide-react";

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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, icon: Icon }, idx) => (
            <BlurFade key={key} delay={0.1 * idx} inView>
              <div className="h-full w-full rounded-2xl">
                <MagicCard
                  gradientSize={200}
                  gradientColor="oklch(0.14 0.04 265)"
                  gradientFrom="oklch(0.62 0.22 265)"
                  gradientTo="oklch(0.72 0.17 230)"
                  className="h-full w-full"
                >
                  <div
                    data-slot="feature-card"
                    className="flex flex-col gap-4 p-8"
                  >
                    <div className="bg-primary/10 flex size-12 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="text-primary size-6" />
                    </div>
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-semibold">
                        {t(`${key}.name`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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

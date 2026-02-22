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
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, icon: Icon }, idx) => (
            <BlurFade key={key} delay={0.05 * idx} inView>
              <div className="group h-full w-full rounded-xl border border-border/80 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card hover:shadow-md">
                <div
                  data-slot="feature-card"
                  className="flex h-full flex-col gap-4"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { useTranslations } from "next-intl";
import { DatabaseIcon, RefreshCwIcon, ArrowLeftRightIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  { key: "step1", icon: DatabaseIcon },
  { key: "step2", icon: RefreshCwIcon },
  { key: "step3", icon: ArrowLeftRightIcon },
] as const;

export function HiwArchitecture() {
  const t = useTranslations("HowItWorks.architecture");

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

        {/* Steps */}
        <div className="relative mx-auto max-w-2xl">
          {/* Connecting line */}
          <div className="from-primary/40 via-primary/20 absolute top-0 bottom-0 left-6 z-0 w-px bg-gradient-to-b to-transparent md:left-8" />

          <div className="relative z-10 flex flex-col gap-10">
            {steps.map(({ key, icon: Icon }, idx) => (
              <BlurFade key={key} delay={0.1 + idx * 0.1} inView>
                <div className="flex gap-5 md:gap-6">
                  {/* Step Number */}
                  <div className="border-primary/30 bg-primary/10 flex size-12 shrink-0 items-center justify-center rounded-xl border md:size-16">
                    <Icon className="text-primary size-5 md:size-6" />
                  </div>

                  {/* Step Content */}
                  <div className="pt-1">
                    <h3 className="text-foreground text-lg font-semibold">
                      {t(`${key}Title`)}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {t(`${key}Description`)}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Result Callout */}
        <BlurFade delay={0.5} inView>
          <div className="border-primary/20 bg-primary/5 mx-auto mt-12 max-w-2xl rounded-2xl border px-8 py-6 text-center">
            <p className="text-foreground text-sm leading-relaxed font-medium">
              {t("result")}
            </p>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

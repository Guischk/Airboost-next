import { useTranslations } from "next-intl";
import { RocketIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";

export function DeployCTA() {
  const t = useTranslations("Deploy");

  return (
    <Section id="deploy" className="relative pb-24">
      <Container className="flex flex-col items-center text-center">
        <BlurFade inView>
          <div className="relative flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-2xl border border-border bg-card/80 p-12 shadow-lg backdrop-blur-sm md:p-16">
            <BorderBeam
              size={250}
              duration={12}
              colorFrom="oklch(0.72 0.19 264)"
              colorTo="oklch(0.75 0.16 200)"
            />
            <DotPattern
              className="fill-primary/8 stroke-primary/8 opacity-30 [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
              cr={0.5}
            />

            <div className="relative z-10 flex flex-col items-center">
              <Title header="h2" size="2xl" className="text-balance">
                {t("title")}
              </Title>
              <Paragraph
                variant="muted"
                size="lg"
                className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed"
              >
                {t("subtitle")}
              </Paragraph>

              <div className="mt-10 flex flex-col items-center gap-3">
                <a
                  href="https://railway.com/template/airboost?referralCode=3Ri9K9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="h-12 px-8 shadow-xl shadow-primary/15">
                    <RocketIcon className="mr-2 size-4" />
                    <span className="text-base font-semibold text-white">
                      {t("cta")}
                    </span>
                  </ShimmerButton>
                </a>

                <p className="mt-2 text-sm font-medium text-foreground">
                  {t("pricing")}
                </p>
              </div>

              <Paragraph
                variant="muted"
                size="sm"
                className="mx-auto mt-8 max-w-lg text-balance"
              >
                {t("alternative")}
              </Paragraph>

              <p className="mt-5 text-xs text-muted-foreground/60">
                {t("referralNote")}
              </p>
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

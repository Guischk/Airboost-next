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
    <Section id="deploy" className="relative pb-32">
      <Container className="flex flex-col items-center text-center">
        <BlurFade inView>
          <div className="relative flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/60 to-primary/5 p-16 shadow-2xl shadow-primary/5 backdrop-blur-sm md:p-20">
            <BorderBeam
              size={250}
              duration={10}
              colorFrom="oklch(0.7 0.19 265)"
              colorTo="oklch(0.75 0.15 230)"
            />
            <DotPattern
              className="fill-primary/10 stroke-primary/10 opacity-20 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
              cr={0.5}
            />

            <div className="relative z-10 flex flex-col items-center">
              <Title header="h2" size="2xl" className="text-balance">
                {t("title")}
              </Title>
              <Paragraph
                variant="muted"
                size="lg"
                className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed"
              >
                {t("subtitle")}
              </Paragraph>

              <div className="mt-12 flex flex-col items-center gap-4">
                <a
                  href="https://railway.com/template/airboost?referralCode=3Ri9K9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="h-16 px-12 shadow-2xl shadow-primary/20">
                    <RocketIcon className="mr-2.5 size-5" />
                    <span className="text-lg font-semibold tracking-tight text-white">
                      {t("cta")}
                    </span>
                  </ShimmerButton>
                </a>

                <p className="mt-3 text-sm font-semibold text-foreground">
                  {t("pricing")}
                </p>
              </div>

              <Paragraph
                variant="muted"
                size="sm"
                className="mx-auto mt-8 max-w-lg text-pretty"
              >
                {t("alternative")}
              </Paragraph>

              <p className="mt-6 text-xs text-muted-foreground/50">
                {t("referralNote")}
              </p>
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

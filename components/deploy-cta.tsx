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
          <div className="border-border/50 bg-card/50 relative flex w-full max-w-3xl flex-col items-center overflow-hidden rounded-3xl border p-12 md:p-16">
            <BorderBeam
              size={200}
              duration={10}
              colorFrom="oklch(0.62 0.22 265)"
              colorTo="oklch(0.72 0.17 230)"
            />
            <DotPattern
              className="fill-muted-foreground/20 stroke-muted-foreground/20 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-15"
              cr={0.5}
            />

            <div className="relative z-10 flex flex-col items-center">
              <Title header="h2" size="2xl">
                {t("title")}
              </Title>
              <Paragraph
                variant="muted"
                size="lg"
                className="mx-auto mt-4 max-w-xl"
              >
                {t("subtitle")}
              </Paragraph>

              <div className="mt-10 flex flex-col items-center gap-4">
                <a
                  href="https://railway.com/deploy/aircache?referralCode=3Ri9K9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="h-14 px-10 shadow-2xl">
                    <RocketIcon className="mr-2 size-5" />
                    <span className="text-base font-semibold tracking-tight text-white lg:text-lg">
                      {t("cta")}
                    </span>
                  </ShimmerButton>
                </a>

                <p className="text-foreground mt-2 text-sm font-medium">
                  {t("pricing")}
                </p>
              </div>

              <Paragraph
                variant="muted"
                size="sm"
                className="mx-auto mt-6 max-w-md"
              >
                {t("alternative")}
              </Paragraph>

              <p className="text-muted-foreground/60 mt-4 text-xs">
                {t("referralNote")}
              </p>
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

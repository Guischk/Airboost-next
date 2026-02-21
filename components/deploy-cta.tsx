import { useTranslations } from "next-intl";
import { RocketIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

export function DeployCTA() {
  const t = useTranslations("Deploy");

  return (
    <Section id="deploy" className="relative pb-32">
      <Container className="flex flex-col items-center text-center">
        <div className="relative flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-border/50 bg-background p-12 md:p-20">
          <BorderBeam size={250} duration={12} delay={9} />

          {/* Glow Background inside the card */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-96 rounded-full bg-primary/10 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Title header="h2" size="xl">
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
                href="https://railway.com/template/airboost?referralCode=3Ri9K9"
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

              <p className="mt-4 text-sm font-medium text-foreground">
                {t("pricing")}
              </p>
            </div>

            <Paragraph
              variant="muted"
              size="sm"
              className="mx-auto mt-8 max-w-md"
            >
              {t("alternative")}
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
}

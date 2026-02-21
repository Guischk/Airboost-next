import { useTranslations } from "next-intl";
import { RocketIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function DeployCTA() {
  const t = useTranslations("Deploy");

  return (
    <Section id="deploy" className="relative">
      <Container className="flex flex-col items-center text-center">
        {/* Glow Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-96 rounded-full bg-primary/8 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative">
          <Title header="h2" size="lg">
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
              <ShimmerButton className="h-12 px-8 shadow-2xl">
                <RocketIcon className="mr-2 size-4" />
                <span className="text-sm font-medium tracking-tight text-white lg:text-base">
                  {t("cta")}
                </span>
              </ShimmerButton>
            </a>

            <p className="text-sm text-muted-foreground">{t("pricing")}</p>
          </div>

          <Paragraph variant="muted" size="sm" className="mx-auto mt-8 max-w-md">
            {t("alternative")}
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
}

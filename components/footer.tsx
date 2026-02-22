import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";

export function Footer() {
  const t = useTranslations("Footer");

  const links = [
    {
      label: t("github"),
      href: "https://github.com/Guischk/AirBoost",
    },
    {
      label: t("issues"),
      href: "https://github.com/Guischk/AirBoost/issues",
    },
    {
      label: t("documentation"),
      href: "https://github.com/Guischk/AirBoost#readme",
    },
    {
      label: t("railway"),
      href: "https://railway.com/template/airboost?referralCode=3Ri9K9",
    },
  ];

  return (
    <Section spacing="sm" data-slot="footer">
      <Container>
        <BlurFade inView>
          <Separator className="mb-8" />

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
            {/* Brand */}
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/airboost_logo.svg"
                  alt="Airboost Logo"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span>Airboost</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("tagline")}</p>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("resources")}
              </p>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <Separator className="mt-8 mb-6" />
          <p className="text-center text-xs text-muted-foreground">
            {t("copyright")}
          </p>
        </BlurFade>
      </Container>
    </Section>
  );
}

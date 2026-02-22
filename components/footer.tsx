import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  const externalLinks = [
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
      href: "https://railway.com/deploy/aircache?referralCode=3Ri9K9",
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
                  src="/airboost_mascotte.svg"
                  alt="Airboost Mascot"
                  width={28}
                  height={28}
                  className="size-7"
                />
                <Image
                  src="/airboost_nom.svg"
                  alt="Airboost"
                  width={90}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm">{t("tagline")}</p>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="text-muted-foreground mb-1 text-xs font-medium tracking-wider uppercase">
                {t("resources")}
              </p>
              <Link
                href="/how-it-works"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("howItWorks")}
              </Link>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <Separator className="mt-8 mb-6" />
          <p className="text-muted-foreground text-center text-xs">
            {t("copyright")}
          </p>
        </BlurFade>
      </Container>
    </Section>
  );
}

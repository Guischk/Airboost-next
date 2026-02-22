import { useTranslations } from "next-intl";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const codeFrameworkLogos: Record<string, string> = {
  "Next.js": "/logos/nextjs.svg",
  Nuxt: "/logos/nuxt.svg",
  Remix: "/logos/remix.svg",
  Astro: "/logos/astro.svg",
  SvelteKit: "/logos/svelte.svg",
};

const nocodeToolLogos: Record<string, string> = {
  WeWeb: "/logos/weweb.svg",
  Webflow: "/logos/webflow.svg",
  Bubble: "/logos/bubble.svg",
  Softr: "/logos/softr.svg",
};

const codeFrameworks = [
  { name: "Next.js" },
  { name: "Nuxt" },
  { name: "Remix" },
  { name: "Astro" },
  { name: "SvelteKit" },
] as const;

const nocodeTools = [
  { name: "WeWeb" },
  { name: "Webflow" },
  { name: "Bubble" },
  { name: "Softr" },
] as const;

export function WorksWith() {
  const t = useTranslations("WorksWith");

  return (
    <Section spacing="sm">
      <Container>
        <BlurFade inView>
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("title")}
          </p>
        </BlurFade>

        {/* Code Frameworks and No-code tools */}
        <BlurFade delay={0.1} inView>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex items-center justify-center gap-10 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {codeFrameworks.map(({ name }) => (
                <img
                  key={name}
                  src={codeFrameworkLogos[name]}
                  alt={name}
                  className="size-10 md:size-12"
                />
              ))}
              {nocodeTools.map(({ name }) => (
                <img
                  key={name}
                  src={nocodeToolLogos[name]}
                  alt={name}
                  className="size-10 md:size-12"
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

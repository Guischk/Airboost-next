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
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            {t("title")}
          </p>
        </BlurFade>

        {/* Code Frameworks — scrolling left */}
        <BlurFade delay={0.1} inView>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
            <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
              {codeFrameworks.map(({ name }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                  title={name}
                >
                  <img
                    src={codeFrameworkLogos[name]}
                    alt={name}
                    className="h-5 w-5"
                  />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Separator */}
        <div className="my-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs text-muted-foreground/50">
            {t("nocode")}
          </span>
          <div className="h-px w-12 bg-border" />
        </div>

        {/* No-code Tools — scrolling right */}
        <BlurFade delay={0.2} inView>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:25s] [--gap:3rem]"
            >
              {nocodeTools.map(({ name }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                  title={name}
                >
                  <img
                    src={nocodeToolLogos[name]}
                    alt={name}
                    className="h-5 w-5"
                  />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

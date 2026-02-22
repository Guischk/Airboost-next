import { useTranslations } from "next-intl";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { BlurFade } from "@/components/ui/blur-fade";

import Image from "next/image";

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
          <p className="text-muted-foreground mb-8 text-center text-sm font-medium">
            {t("title")}
          </p>
        </BlurFade>

        {/* Code Frameworks — scrolling left */}
        <BlurFade delay={0.1} inView>
          <div className="relative">
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l to-transparent" />
            <div className="flex items-center justify-center gap-8">
              {codeFrameworks.map(({ name }) => (
                <Image
                  key={name}
                  src={codeFrameworkLogos[name]}
                  alt={name}
                  className="size-12 md:size-16"
                />
              ))}
              {nocodeTools.map(({ name }) => (
                <Image
                  key={name}
                  src={nocodeToolLogos[name]}
                  alt={name}
                  className="size-12 md:size-16"
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}

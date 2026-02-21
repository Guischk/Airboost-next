import { useTranslations } from "next-intl";
import {
  ZapIcon,
  RefreshCwIcon,
  CodeIcon,
  ServerIcon,
  PaperclipIcon,
  RadioIcon,
} from "lucide-react";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Grid } from "@/components/base/grid";
import { cn } from "@/lib/utils";

const features = [
  { key: "blazingFast", icon: ZapIcon },
  { key: "zeroDowntime", icon: RefreshCwIcon },
  { key: "typeSafety", icon: CodeIcon },
  { key: "selfHosted", icon: ServerIcon },
  { key: "attachments", icon: PaperclipIcon },
  { key: "realTimeSync", icon: RadioIcon },
] as const;

export function Features() {
  const t = useTranslations("Features");

  return (
    <Section id="features" className="relative">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Title header="h2" size="lg">
            {t("title")}
          </Title>
          <Paragraph variant="muted" size="lg" className="mt-4">
            {t("subtitle")}
          </Paragraph>
        </div>

        {/* Feature Cards */}
        <Grid cols={3} gap="default">
          {features.map(({ key, icon: Icon }) => (
            <div
              key={key}
              data-slot="feature-card"
              className={cn(
                "group relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm",
                "transition-all duration-300 hover:border-primary/30 hover:bg-card/80",
                "hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10",
              )}
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {t(`${key}.name`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

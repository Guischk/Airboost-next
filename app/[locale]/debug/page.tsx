import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { Grid } from "@/components/base/grid";
import { Link } from "@/components/base/link";
import { cn } from "@/lib/utils";

const titleVariants = [
  "default",
  "muted",
  "primary",
  "secondary",
  "destructive",
] as const;
const titleSizes = ["default", "sm", "lg", "xl"] as const;

const paragraphVariants = [
  "default",
  "muted",
  "primary",
  "secondary",
  "destructive",
] as const;
const paragraphSizes = ["default", "sm", "lg"] as const;

export default function DebugPage() {
  return (
    <Section spacing="sm">
      <Container className="space-y-16">
        <header className="space-y-2">
          <Title header="h1" size="xl">
            Debug — Base Components
          </Title>
          <Paragraph variant="muted">
            Visual reference for every component in{" "}
            <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
              @/components/base
            </code>
          </Paragraph>
        </header>

        <ComponentSection
          name="Title"
          source="components/base/title.tsx"
          description="Semantic heading with variant styling."
        >
          {titleVariants.map((variant) => (
            <VariantGroup key={variant} label={`variant="${variant}"`}>
              <div className="grid gap-3">
                {titleSizes.map((size) => (
                  <div key={size} className="flex items-baseline gap-4">
                    <code className="text-muted-foreground w-20 shrink-0 text-right font-mono text-xs">
                      size=&quot;{size}&quot;
                    </code>
                    <Title variant={variant} size={size} header="h2">
                      The quick brown fox
                    </Title>
                  </div>
                ))}
              </div>
            </VariantGroup>
          ))}
        </ComponentSection>

        <ComponentSection
          name="Paragraph"
          source="components/base/paragraph.tsx"
          description="Semantic paragraph with variant styling."
        >
          {paragraphVariants.map((variant) => (
            <VariantGroup key={variant} label={`variant="${variant}"`}>
              <div className="grid gap-3">
                {paragraphSizes.map((size) => (
                  <div key={size} className="flex items-baseline gap-4">
                    <code className="text-muted-foreground w-20 shrink-0 text-right font-mono text-xs">
                      size=&quot;{size}&quot;
                    </code>
                    <Paragraph variant={variant} size={size}>
                      The quick brown fox jumps over the lazy dog.
                    </Paragraph>
                  </div>
                ))}
              </div>
            </VariantGroup>
          ))}
        </ComponentSection>

        <ComponentSection
          name="Container"
          source="components/base/container.tsx"
          description="Constrains maximum width and centers content."
        >
          <VariantGroup label="default">
            <div className="bg-muted/50 rounded-lg border border-dashed py-4">
              <Container>
                <div className="bg-primary/10 text-primary flex h-16 items-center justify-center rounded border border-dashed">
                  Container Content (max-w-7xl)
                </div>
              </Container>
            </div>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Section"
          source="components/base/section.tsx"
          description="Manages vertical rhythm and semantics."
        >
          <VariantGroup label="spacing='default'">
            <div className="bg-muted/50 rounded-lg border border-dashed">
              <Section className="bg-primary/10 border-y border-dashed">
                <Container>
                  <div className="text-primary text-center">
                    Section Content (py-12 md:py-24)
                  </div>
                </Container>
              </Section>
            </div>
          </VariantGroup>
          <VariantGroup label="spacing='sm'">
            <div className="bg-muted/50 rounded-lg border border-dashed">
              <Section
                spacing="sm"
                className="bg-primary/10 border-y border-dashed"
              >
                <Container>
                  <div className="text-primary text-center">
                    Section Content (py-8 md:py-12)
                  </div>
                </Container>
              </Section>
            </div>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Grid"
          source="components/base/grid.tsx"
          description="Standardized grid system."
        >
          <VariantGroup label="cols={3} gap='default'">
            <Grid cols={3}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-primary/10 text-primary flex h-24 items-center justify-center rounded border border-dashed"
                >
                  Col {i + 1}
                </div>
              ))}
            </Grid>
          </VariantGroup>
          <VariantGroup label="cols={12} gap='sm'">
            <Grid cols={12} gap="sm">
              <div className="bg-primary/10 text-primary col-span-4 flex h-16 items-center justify-center rounded border border-dashed">
                Span 4
              </div>
              <div className="bg-primary/10 text-primary col-span-8 flex h-16 items-center justify-center rounded border border-dashed">
                Span 8
              </div>
            </Grid>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Link"
          source="components/base/link.tsx"
          description="Smart link handling internal (next-intl) and external URLs."
        >
          <VariantGroup label="Internal Link">
            <Link href="/">Go to Home (Internal)</Link>
          </VariantGroup>
          <VariantGroup label="External Link">
            <Link href="https://github.com">Go to GitHub (External)</Link>
          </VariantGroup>
        </ComponentSection>
      </Container>
    </Section>
  );
}

function ComponentSection({
  name,
  source,
  description,
  children,
}: {
  name: string;
  source: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="border-b pb-4">
        <Title header="h2" size="lg">
          {name}
        </Title>
        <Paragraph variant="muted" size="sm" className="mt-1">
          {description}
        </Paragraph>
        <code className="text-muted-foreground mt-2 block font-mono text-xs">
          {source}
        </code>
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}

function VariantGroup({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <code className="bg-muted text-muted-foreground inline-block rounded px-2 py-0.5 text-xs">
        {label}
      </code>
      <div className="border-muted rounded-lg border border-dashed p-4">
        {children}
      </div>
    </div>
  );
}

import { Title } from "@/components/base/title";
import { Paragraph } from "@/components/base/paragraph";
import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Field, FieldSet, FieldLegend, FieldGroup, FieldContent } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Combobox, ComboboxTrigger, ComboboxInput, ComboboxContent, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";

const buttonVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;
const buttonSizes = ["default", "sm", "lg", "icon"] as const;

const badgeVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;

export default function ShadcnDebugPage() {
  return (
    <Section spacing="sm">
      <Container className="space-y-16">
        <header className="space-y-2">
          <Title header="h1" size="display">
            Debug — Shadcn & MagicUI Components
          </Title>
          <Paragraph variant="muted">
            Visual reference for every component in{" "}
            <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
              @/components/ui
            </code>
          </Paragraph>
        </header>

        <ComponentSection
          name="Button"
          source="components/ui/button.tsx"
          description="Interactive button component with various styles and sizes."
        >
          {buttonVariants.map((variant) => (
            <VariantGroup key={variant} label={`variant="${variant}"`}>
              <div className="flex flex-wrap items-center gap-4">
                {buttonSizes.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {size === "icon" ? "B" : `Button ${size}`}
                  </Button>
                ))}
              </div>
            </VariantGroup>
          ))}
        </ComponentSection>

        <ComponentSection
          name="Badge"
          source="components/ui/badge.tsx"
          description="Small visual indicator for status or tags."
        >
          <VariantGroup label="Variants">
            <div className="flex flex-wrap items-center gap-4">
              {badgeVariants.map((variant) => (
                <Badge key={variant} variant={variant}>
                  {variant}
                </Badge>
              ))}
            </div>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Card"
          source="components/ui/card.tsx"
          description="Container for grouped content."
        >
          <VariantGroup label="Default Card">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <Paragraph>This is the main content of the card.</Paragraph>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Input & Label"
          source="components/ui/input.tsx, components/ui/label.tsx"
          description="Standard form input field with label."
        >
          <VariantGroup label="Default Input">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Textarea"
          source="components/ui/textarea.tsx"
          description="Multi-line text input field."
        >
          <VariantGroup label="Default Textarea">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Select"
          source="components/ui/select.tsx"
          description="Dropdown selection component."
        >
          <VariantGroup label="Default Select">
            <Select>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Combobox"
          source="components/ui/combobox.tsx"
          description="Autocomplete input and command palette with a list of suggestions."
        >
          <VariantGroup label="Default Combobox">
            <Combobox>
              <ComboboxInput placeholder="Search framework..." />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem value="next.js">Next.js</ComboboxItem>
                  <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
                  <ComboboxItem value="nuxt.js">Nuxt.js</ComboboxItem>
                  <ComboboxItem value="remix">Remix</ComboboxItem>
                  <ComboboxItem value="astro">Astro</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Dropdown Menu"
          source="components/ui/dropdown-menu.tsx"
          description="Menu that displays a list of actions or options."
        >
          <VariantGroup label="Default Dropdown">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Alert Dialog"
          source="components/ui/alert-dialog.tsx"
          description="Modal dialog that interrupts the user with important content."
        >
          <VariantGroup label="Default Alert Dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </VariantGroup>
        </ComponentSection>

        <ComponentSection
          name="Separator"
          source="components/ui/separator.tsx"
          description="Visually or semantically separates content."
        >
          <VariantGroup label="Horizontal & Vertical">
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                  An open-source UI component library.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
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

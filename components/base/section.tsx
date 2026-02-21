import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      default: "py-12 md:py-24",
      sm: "py-8 md:py-12",
      lg: "py-24 md:py-32",
      none: "py-0",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

function Section({
  className,
  spacing,
  asChild = false,
  ...props
}: React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "section";
  return (
    <Comp
      data-slot="section"
      className={cn(sectionVariants({ spacing, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };

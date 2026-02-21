import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      12: "grid-cols-4 sm:grid-cols-8 lg:grid-cols-12",
    },
    gap: {
      default: "gap-6 md:gap-8",
      sm: "gap-4",
      lg: "gap-8 md:gap-12",
      none: "gap-0",
    },
  },
  defaultVariants: {
    cols: 1,
    gap: "default",
  },
});

function Grid({
  className,
  cols,
  gap,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof gridVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      data-slot="grid"
      className={cn(gridVariants({ cols, gap, className }))}
      {...props}
    />
  );
}

export { Grid, gridVariants };

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleVariants = cva("font-bold tracking-tight", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
    },
    size: {
      default: "text-xl md:text-2xl",
      sm: "text-lg md:text-xl",
      lg: "text-2xl md:text-3xl",
      xl: "text-3xl md:text-4xl",
      "2xl": "text-4xl md:text-5xl lg:text-6xl",
      display: "text-5xl md:text-6xl lg:text-7xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Title({
  className,
  variant,
  size,
  header,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }) {
  const Tag = header;
  return (
    <Tag
      data-slot="title"
      className={cn(titleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Title, titleVariants };

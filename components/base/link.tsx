import * as React from "react";
import { Link as NextIntlLink } from "@/i18n/navigation";

import { cn } from "@/lib/utils";

function BaseLink({
  className,
  href,
  isExternal,
  ...props
}: React.ComponentProps<typeof NextIntlLink> & {
  isExternal?: boolean;
}) {
  const hrefString = typeof href === "string" ? href : href?.pathname || "";
  const external = isExternal ?? hrefString.startsWith("http");

  if (external) {
    return (
      <a
        data-slot="link"
        href={hrefString}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("transition-colors hover:underline", className)}
        {...(props as React.ComponentProps<"a">)}
      />
    );
  }

  return (
    <NextIntlLink
      data-slot="link"
      href={href}
      className={cn("transition-colors hover:underline", className)}
      {...props}
    />
  );
}

export { BaseLink as Link };

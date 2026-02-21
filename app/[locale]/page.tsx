import { setRequestLocale } from "next-intl/server";

import { ComponentExample } from "@/components/component-example";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComponentExample />;
}

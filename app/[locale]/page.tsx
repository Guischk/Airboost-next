import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/hero";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
    </main>
  );
}

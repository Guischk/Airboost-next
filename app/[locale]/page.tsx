import { setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DeployCTA } from "@/components/deploy-cta";
import { Footer } from "@/components/footer";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DeployCTA />
      </main>
      <Footer />
    </>
  );
}

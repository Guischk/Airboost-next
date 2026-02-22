import { setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WorksWith } from "@/components/works-with";
import { Features } from "@/components/features";
import { QuickStart } from "@/components/quick-start";
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
        <WorksWith />
        <Features />
        <QuickStart />
        <DeployCTA />
      </main>
      <Footer />
    </>
  );
}

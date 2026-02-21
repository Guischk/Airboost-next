"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { GithubIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-slot="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/airboost_logo.svg"
            alt="Airboost Logo"
            width={24}
            height={24}
            className="size-6"
          />
          <span>Airboost</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            {t("features")}
          </a>
          <a href="#deploy" className="transition-colors hover:text-foreground">
            {t("deploy")}
          </a>
          <a
            href="https://github.com/Guischk/AirBoost"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            {t("github")}
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon-sm" className="md:hidden" asChild>
            <a
              href="https://github.com/Guischk/AirBoost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              href="https://railway.com/template/airboost?referralCode=3Ri9K9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("deployNow")}
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}

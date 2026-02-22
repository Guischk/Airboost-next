"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { GithubIcon, MenuIcon, XIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on anchor click
  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <header
      data-slot="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold transition-opacity hover:opacity-90">
          <Image
            src="/airboost_logo.svg"
            alt="Airboost Logo"
            width={24}
            height={24}
            className="size-7"
          />
          <span>Airboost</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            {t("features")}
          </a>
          <Link
            href="/how-it-works"
            className="transition-colors hover:text-foreground"
          >
            {t("howItWorks")}
          </Link>
          <a
            href="https://github.com/Guischk/AirBoost"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            {t("github")}
          </a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden font-semibold sm:inline-flex" asChild>
            <a
              href="https://railway.com/template/airboost?referralCode=3Ri9K9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("deployNow")}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            <a
              href="#features"
              onClick={handleNavClick}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("features")}
            </a>
            <Link
              href="/how-it-works"
              onClick={handleNavClick}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("howItWorks")}
            </Link>
            <a
              href="https://github.com/Guischk/AirBoost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              {t("github")}
            </a>
            <Button size="sm" className="w-full" asChild>
              <a
                href="https://railway.com/template/airboost?referralCode=3Ri9K9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("deployNow")}
              </a>
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

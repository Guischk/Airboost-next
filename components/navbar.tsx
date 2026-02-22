"use client";

import { useEffect, useState } from "react";

import { useTranslations, useLocale } from "next-intl";
import { GithubIcon, MenuIcon, XIcon, GlobeIcon } from "lucide-react";

import { Container } from "@/components/base/container";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
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

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header
      data-slot="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-border bg-background/80 border-b backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Image
            src="/airboost_mascotte.svg"
            alt="Airboost Mascot"
            width={32}
            height={32}
            className="size-8"
          />
          <Image
            src="/airboost_nom.svg"
            alt="Airboost"
            width={100}
            height={20}
            className="h-5 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
          <a
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            {t("features")}
          </a>
          <Link
            href="/how-it-works"
            className="hover:text-foreground transition-colors"
          >
            {t("howItWorks")}
          </Link>
          <a
            href="https://github.com/Guischk/AirBoost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="size-4" />
            {t("github")}
          </a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label={t("language")}>
                <GlobeIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => switchLocale("en")}
                className={locale === "en" ? "bg-accent" : ""}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => switchLocale("fr")}
                className={locale === "fr" ? "bg-accent" : ""}
              >
                Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a
              href="https://railway.com/deploy/aircache?referralCode=3Ri9K9"
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
        <div className="border-border bg-background/95 border-t backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            <a
              href="#features"
              onClick={handleNavClick}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("features")}
            </a>
            <Link
              href="/how-it-works"
              onClick={handleNavClick}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("howItWorks")}
            </Link>
            <a
              href="https://github.com/Guischk/AirBoost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
            >
              <GithubIcon className="size-4" />
              {t("github")}
            </a>
            <Button size="sm" className="w-full" asChild>
              <a
                href="https://railway.com/deploy/aircache?referralCode=3Ri9K9"
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

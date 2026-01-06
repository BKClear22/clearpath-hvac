"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt={SITE_CONFIG.name}
            className="h-25 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-lg font-bold text-primary">{SITE_CONFIG.name}</p>
            <p className="text-xs text-muted-foreground">{SITE_CONFIG.tagline}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Phone className="h-4 w-4" />
            {SITE_CONFIG.phone}
          </a>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/schedule">Schedule Service</Link>
          </Button>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/contact">Free Estimate</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/logo.png"
                    alt={SITE_CONFIG.name}
                    className="h-25 w-auto object-contain"
                  />
                  <div>
                    <p className="text-lg font-bold text-primary">{SITE_CONFIG.name}</p>
                    <p className="text-xs text-muted-foreground">{SITE_CONFIG.tagline}</p>
                  </div>
                </Link>

                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2 text-lg font-medium text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    {SITE_CONFIG.phone}
                  </a>
                  <Button asChild size="lg">
                    <Link href="/schedule" onClick={() => setIsOpen(false)}>
                      Schedule Service
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get a Free Estimate
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

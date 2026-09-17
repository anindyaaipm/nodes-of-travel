"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const YOUTUBE_URL = "https://www.youtube.com/@NodesofTravel";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Stories" },
  { href: "/guides", label: "Guides" },
  { href: "/videos", label: "Videos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overlay = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overlay
          ? "border-transparent bg-transparent"
          : "border-b border-border/70 bg-background/95 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto flex h-[4.5rem] items-center justify-between md:h-[5rem]">
        {/* Brand block — WWH-style: circular mark + social icon + name */}
        <div className="flex items-center gap-3 md:gap-3.5">
          <Link
            href="/"
            className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80 shadow-md md:h-12 md:w-12"
            aria-label="Nodes of Travel home"
          >
            <Image
              src="/images/brand/nodes-of-travel-avatar.jpg"
              alt="Nodes of Travel"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </Link>

          <div className="flex flex-col justify-center gap-0.5">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex transition-colors",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <Link
              href="/"
              className={cn(
                "font-display text-lg leading-none tracking-[0.03em] transition-colors md:text-xl",
                overlay ? "text-white" : "text-foreground"
              )}
            >
              Nodes of Travel
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              href={link.href}
              className={cn(
                "text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-your-trip"
            className={cn(
              "btn-editorial px-5 py-2.5 text-[0.68rem]",
              overlay
                ? "bg-primary text-primary-foreground shadow-lg shadow-black/25 hover:bg-primary/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Plan Your Trip
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden",
            overlay ? "text-white" : "text-foreground"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={`m-${link.label}`}
                href={link.href}
                className="px-1 py-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="px-1 py-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground/80"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-1 py-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground/80"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/plan-your-trip"
              className="btn-editorial-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;

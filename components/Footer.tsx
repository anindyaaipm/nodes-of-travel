import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const explore = [
    { href: "/destinations", label: "Destinations" },
    // Hidden until content types are distinct (do not delete)
    // { href: "/blog", label: "Journeys" },
    { href: "/blog", label: "Travel Guides" },
    { href: "/videos", label: "Videos" },
    // { href: "/blog", label: "Stories" },
  ];

  const company = [
    { href: "/plan-your-trip", label: "Plan Your Trip" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-[#f3efe7]">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl tracking-[0.03em] text-foreground">
              Nodes of Travel
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Travel stories, guides and journeys from around the world — filmed, written and planned
              from real experience.
            </p>
          </div>

          <div>
            <p className="editorial-eyebrow mb-4">Explore</p>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="editorial-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-eyebrow mb-4">Plan</p>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="editorial-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-eyebrow mb-4">Follow</p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@NodesofTravel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/anindya781/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/anindya.sarkar.98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:anindyaaipm@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/80 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Nodes of Travel. All rights reserved.</p>
          <p className="tracking-[0.12em] uppercase">Stories · Guides · Journeys</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

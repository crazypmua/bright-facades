import { Phone, Send, MessageCircle, Menu, X, Clock, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logoOriginal from "@/assets/logo-elite-space-circle.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav: { label: string; to?: string; href?: string }[] = [
    { label: "Металопластикові", to: "/pvc" },
    { label: "Алюміній", to: "/aluminum" },
    { label: "Фасади", to: "/facades" },
    { label: "Двері", to: "/doors" },
    { label: "Калькулятор", href: "/#calculator" },
    { label: "Контакти", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-soft" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-4">
          {/* Logo + brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoOriginal}
              alt="Elite Space"
              width={280}
              height={140}
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-extrabold text-azure text-2xl lg:text-3xl tracking-tight">
                Elite Space
              </span>
              <span className="text-[11px] lg:text-xs text-muted-foreground italic">
                Елітний Простір — Наповнений Природним Світлом
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {nav.map((n) =>
              n.to ? (
                <Link
                  key={n.label}
                  to={n.to}
                  activeProps={{ className: "text-primary" }}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {n.label}
                </a>
              )
            )}
          </nav>

          {/* Always-on call button */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/EliteWindowsEkipazh"
              aria-label="Telegram"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/380982018981"
              aria-label="WhatsApp"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:+380971753288"
              className="inline-flex items-center gap-2 px-4 sm:px-5 h-11 lg:h-12 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold shadow-elegant hover:scale-[1.03] transition-transform"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+380 97 175 32 88</span>
              <span className="xl:hidden">Подзвонити</span>
            </a>

            <button
              className="lg:hidden p-2"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-border pt-4 space-y-3">
            {nav.map((n) =>
              n.to ? (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium py-1"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium py-1"
                >
                  {n.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}

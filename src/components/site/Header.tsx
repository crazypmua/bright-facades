import { Phone, Send, MessageCircle, Menu, X, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logoOriginal from "@/assets/logo-elite-space-pill.png";

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
    { label: "Двері", to: "/doors" },
    { label: "Алюміній", to: "/aluminum" },
    { label: "Фасади", to: "/facades" },
    { label: "Калькулятор", href: "/#calculator" },
    { label: "Контакти", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-soft" : "bg-background"
      }`}
    >
      {/* Top accent bar — Ekipazh-style */}
      <div className="bg-foreground text-background text-[12px] sm:text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span className="font-semibold text-primary">Виготовлення за 4 робочих дні</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary" />
              Найбільший виробник вікон в Україні
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a href="tel:+380982018981" className="hover:text-primary transition-colors">+380 98 201 89 81</a>
            <span className="opacity-30">·</span>
            <a href="tel:+380971753288" className="hover:text-primary transition-colors">+380 97 175 32 88</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoOriginal}
              alt="Elite Space"
              width={260}
              height={80}
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
            <span className="sr-only">Elite Space — Наповнений природним світлом</span>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6">
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

          {/* Contacts */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://t.me/EliteWindowsEkipazh"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/380982018981"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:+380982018981"
              className="relative flex items-center gap-2 px-5 h-11 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold shadow-elegant hover:scale-[1.03] transition-transform"
            >
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              <Phone className="h-4 w-4 relative" />
              <span className="hidden xl:inline relative">+380 98 201 89 81</span>
              <span className="xl:hidden relative">Подзвонити</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
            <div className="flex items-center gap-2 pt-2">
              <a href="tel:+380982018981" className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold shadow-elegant">
                <Phone className="h-4 w-4" /> +380 98 201 89 81
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

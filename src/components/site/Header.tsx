import { Phone, Send, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-elite-space.webp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "ПВХ", href: "#pvc" },
    { label: "Алюміній", href: "#aluminum" },
    { label: "Фасади", href: "#facade" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Відгуки", href: "#reviews" },
    { label: "Контакти", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-soft" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="ELITE SPACE"
              width={160}
              height={48}
              className="h-9 lg:h-10 w-auto"
            />
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Contacts */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://t.me/vitro"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/380000000000"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:+380441234567"
              className="flex items-center gap-2 px-4 h-10 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+380 44 123 45 67</span>
              <span className="xl:hidden">Дзвонити</span>
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
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium py-1"
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <a href="tel:+380441234567" className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-foreground text-background text-sm font-semibold">
                <Phone className="h-4 w-4" /> +380 44 123 45 67
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

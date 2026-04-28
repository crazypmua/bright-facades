import { BadgeCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import certAxor from "@/assets/cert-axor.png";
import certSalamander from "@/assets/cert-salamander.png";

const partners = ["REHAU", "Schüco", "Reynaers", "Veka", "Roto", "Maco", "Alutech", "WDS"];

const certImages = [
  { src: certAxor, alt: "Сертифікат відповідності AXOR KOMFORT LINE K-3" },
  { src: certSalamander, alt: "Сертифікат відповідності Salamander" },
  { src: certAxor, alt: "Сертифікат відповідності AXOR — фурнітура" },
  { src: certSalamander, alt: "Сертифікат відповідності Salamander — профіль" },
  { src: certAxor, alt: "Сертифікат відповідності AXOR — балконні блоки" },
  { src: certSalamander, alt: "Сертифікат відповідності Salamander — серія" },
  { src: certAxor, alt: "Сертифікат відповідності AXOR — поворотно-відкидні" },
  { src: certSalamander, alt: "Сертифікат відповідності Salamander — Укрекспертиза" },
];

export function Certificates() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? null : (i + 1) % certImages.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? null : (i - 1 + certImages.length) % certImages.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="py-16 lg:py-24 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <div className="flex items-center gap-3 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <BadgeCheck className="h-5 w-5" />
            Сертифікати та документи
          </div>
          <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
            З нами надійно
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Офіційна сертифікація продукції, фурнітури та профільних систем. Працюємо за стандартами ДСТУ.
          </p>
        </div>

        <div className="rounded-3xl bg-card border border-border shadow-card p-5 sm:p-7 lg:p-9 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {certImages.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Відкрити: ${c.alt}`}
                className="group block rounded-xl overflow-hidden border border-border bg-background hover:border-primary/40 hover:shadow-elegant transition-all text-left"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <BadgeCheck className="h-5 w-5 text-primary" />
          Сертифіковані партнери
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((c) => (
            <div
              key={c}
              className="h-16 rounded-xl border border-border bg-card flex items-center justify-center font-display font-extrabold text-lg text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Закрити"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={certImages[active].src}
            alt={certImages[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

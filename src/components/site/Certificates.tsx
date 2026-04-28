import { BadgeCheck } from "lucide-react";
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
  return (
    <section className="py-16 lg:py-24 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <div className="flex items-center gap-3 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <BadgeCheck className="h-5 w-5" />
            Сертифікати та документи
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
            З нами надійно
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Офіційна сертифікація продукції, фурнітури та профільних систем. Працюємо за стандартами ДСТУ.
          </p>
        </div>

        <div className="rounded-3xl bg-card border border-border shadow-card p-5 sm:p-7 lg:p-9 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {certImages.map((c, i) => (
              <a
                key={i}
                href={c.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-border bg-background hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
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
    </section>
  );
}

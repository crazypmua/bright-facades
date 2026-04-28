import { BadgeCheck } from "lucide-react";
import cert1 from "@/assets/certificates-1.png";
import cert2 from "@/assets/certificates-2.png";

const partners = ["REHAU", "Schüco", "Reynaers", "Veka", "Roto", "Maco", "Alutech", "WDS"];

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

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-12">
          <a
            href={cert1}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elegant transition-all"
          >
            <img
              src={cert1}
              alt="Сертифікати відповідності — профільні системи"
              loading="lazy"
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
          <a
            href={cert2}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elegant transition-all"
          >
            <img
              src={cert2}
              alt="Свідоцтва про реєстрацію та документи компанії"
              loading="lazy"
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
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

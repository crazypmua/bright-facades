import { ArrowUpRight } from "lucide-react";
import bannerImg from "@/assets/banner-categories.jpg";

const cats = [
  {
    id: "pvc",
    title: "Металопластикові вікна",
    items: ["EKIPAZH (Україна)", "WDS (Україна)", "VEKA (Німеччина)"],
    featured: true,
  },
  {
    id: "aluminum",
    title: "Алюмінієві системи",
    items: ["Ekipazh AluLight (Україна)", "ALUMIL (Греція)", "Розсувні системи"],
    featured: false,
  },
  {
    id: "facade",
    title: "Фасадні системи",
    items: ["Структурне скління", "Стоєчно-ригельні", "Вентильовані фасади"],
    featured: false,
  },
];

export function Categories() {
  return (
    <section className="bg-gradient-fade py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Наші рішення
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Оберіть категорію
          </h2>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden shadow-elegant mb-8 lg:mb-12 aspect-[21/9]">
          <img
            src={bannerImg}
            alt="Сучасні віконні та фасадні рішення"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {cats.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`group relative overflow-hidden rounded-3xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                c.featured
                  ? "border-2 border-primary bg-gradient-to-br from-primary/10 via-card to-card shadow-elegant"
                  : "border border-border bg-card shadow-card hover:shadow-elegant"
              }`}
            >
              {c.featured && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                  Хіт продажів
                </div>
              )}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className={`font-display font-extrabold text-2xl lg:text-3xl ${c.featured ? "text-primary" : ""}`}>
                    {c.title}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                </div>
                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

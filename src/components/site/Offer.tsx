import { Clock, ShieldCheck, Factory, Truck, Wrench, Sparkles } from "lucide-react";

const items = [
  { icon: Sparkles, t: "Преміум рівень", d: "Металопластикові та алюмінієві системи преміум класу." },
  { icon: Clock, t: "Швидке виготовлення", d: "Метал. — 4 дні, алюміній — від 20 робочих днів." },
  { icon: ShieldCheck, t: "Гарантія до 15 років", d: "На профіль, фурнітуру та монтажні роботи." },
  { icon: Factory, t: "Власне виробництво", d: "В Україні — до 4000 конструкцій на день." },
  { icon: Truck, t: "Доставка вчасно", d: "Гарантована доставка без затримок та переносів." },
  { icon: Wrench, t: "Повний цикл", d: "Замір • виготовлення • доставка • монтаж." },
];

export function Offer() {
  return (
    <section className="py-16 lg:py-20 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Що ви отримуєте
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
            Все, що потрібно — в одному місці
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-background/10 p-6 hover:border-primary/60 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                <i.icon className="h-6 w-6" />
              </div>
              <div className="font-display font-bold text-xl mb-1">{i.t}</div>
              <p className="text-background/70 text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

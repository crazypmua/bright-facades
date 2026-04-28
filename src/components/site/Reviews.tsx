import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Олена Ковальчук",
    role: "Київ, ЖК «Файна Таун»",
    text: "Замовили панорамні алюмінієві вікна на терасу. Результат вражає — тиша, краса, ідеальний монтаж. Рекомендую!",
  },
  {
    name: "Андрій Петренко",
    role: "Львів, приватний будинок",
    text: "Поміняли всі ПВХ-вікна та вхідні двері. Зробили швидко та чисто. Ціна-якість — найкраще, що знайшов.",
  },
  {
    name: "Марія Захарова",
    role: "Одеса, бізнес-центр",
    text: "Реалізували фасад нашого офісу. Інженерна команда — професіонали. Все погоджено, прораховано, зроблено вчасно.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-foreground text-background py-16 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Відгуки
            </div>
            <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
              Понад 2 400 щасливих клієнтів
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">4.9 / 5</span> · 480+ відгуків
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-background/5 border border-background/10 p-7 backdrop-blur"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-background/90 leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-background/10">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-background/60">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Factory } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Про нас
          </div>
          <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Не просто вікна — рішення, що змінюють простір
          </h2>
          <p className="text-lg text-foreground/80 mb-4">
            Elite Space — це не просто продаж вікон. Це рішення, які змінюють простір і рівень життя.
          </p>
          <p className="text-muted-foreground mb-4">
            Ми працюємо тільки з перевіреними виробниками, де кожна система проходить контроль якості.
            Наш основний партнер — <span className="font-bold text-foreground">EKIPAZH</span>, один із
            найсильніших заводів в Україні. До 4000 конструкцій щодня — це не слова, це потужності.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-azure">
            <Factory className="h-4 w-4" />
            Кожен проект — індивідуальний підбір, а не шаблон
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {[
            "Не зриваємо строки",
            "Не економимо на матеріалах",
            "Не робимо «як вийде»",
            "Власне виробництво в Україні",
            "Своєчасна доставка без затримок",
            "Повний цикл: замір • виготовлення • доставка • монтаж",
          ].map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5 shadow-card"
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import pvcImg from "@/assets/gallery-pvc-window.jpg";
import doorImg from "@/assets/gallery-door.jpg";
import slidingImg from "@/assets/gallery-sliding.jpg";
import facadeImg from "@/assets/gallery-facade.jpg";

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  features: string[];
  reverse?: boolean;
};

const sections: Section[] = [
  {
    id: "pvc",
    eyebrow: "ПВХ",
    title: "EKIPAZH · WDS · VEKA",
    desc: "Енергоощадні ПВХ-вікна з 5–7 камерним профілем та склопакетом до Ug 0,5. Тиша, тепло, естетика.",
    image: pvcImg,
    features: ["Профіль EKIPAZH / WDS / VEKA", "Склопакет 2-камерний", "Фурнітура Roto / Maco", "Гарантія 10 років"],
  },
  {
    id: "doors",
    eyebrow: "ДВЕРІ",
    title: "Вхідні та міжкімнатні двері",
    desc: "Алюмінієві та ПВХ двері з посиленою конструкцією. Безпека, теплоізоляція, преміум-фурнітура.",
    image: doorImg,
    features: ["Багатоточкове замикання", "Терморозрив", "Індивідуальний дизайн", "Скло триплекс"],
    reverse: true,
  },
  {
    id: "aluminum",
    eyebrow: "АЛЮМІНІЙ",
    title: "Розсувні алюмінієві системи",
    desc: "Панорамні системи Schüco, Reynaers, Alutech. Великі прорізи, мінімальний профіль, максимум світла.",
    image: slidingImg,
    features: ["Холодні та теплі профілі", "Системи lift & slide", "Прорізи до 3 м у висоту", "Безшумна фурнітура"],
  },
  {
    id: "facade",
    eyebrow: "ФАСАДИ",
    title: "Фасадні системи під ключ",
    desc: "Проектування, виробництво та монтаж структурних і стоєчно-ригельних фасадів для бізнесу.",
    image: facadeImg,
    features: ["Структурне скління", "Вентильовані фасади", "Енергоефективність A+", "Інженерний супровід"],
    reverse: true,
  },
];

export function Gallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {sections.map((s) => (
          <article
            id={s.id}
            key={s.id}
            className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center scroll-mt-24"
          >
            <div className={`lg:col-span-7 ${s.reverse ? "lg:order-2" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`lg:col-span-5 ${s.reverse ? "lg:order-1" : ""}`}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                {s.eyebrow}
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-balance">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-6">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-colors"
              >
                Замовити прорахунок
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

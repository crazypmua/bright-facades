import { Factory, Ruler, Truck, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import bannerImg from "@/assets/banner-whyus.jpg";

const items = [
  { icon: Factory, t: "Власне виробництво", d: "Контроль якості на кожному етапі — від профілю до пакування." },
  { icon: Ruler, t: "Безкоштовний вимір", d: "Інженер виїжджає з технічним консультантом по всій Україні." },
  { icon: Truck, t: "Доставка по Україні", d: "Власна логістика та обережне транспортування виробів." },
  { icon: Wrench, t: "Монтаж під ключ", d: "Сертифіковані бригади. Чисто, швидко, з відкосами та відливами." },
  { icon: ShieldCheck, t: "Гарантія 10 років", d: "На профіль, фурнітуру та монтажні роботи." },
  { icon: Sparkles, t: "Преміум бренди", d: "REHAU, Schüco, Reynaers, Roto, Maco — лише оригінальні комплектуючі." },
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Чому ELITE SPACE
          </div>
          <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
            6 причин обрати нас
          </h2>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden shadow-elegant mb-8 lg:mb-12 aspect-[21/9]">
          <img
            src={bannerImg}
            alt="Професійний монтаж преміум вікон"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((i) => (
            <div
              key={i.t}
              className="group rounded-3xl border border-border p-7 bg-card hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{i.t}</h3>
              <p className="text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

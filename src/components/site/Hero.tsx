import heroImg from "@/assets/hero-windows.jpg";
import { Phone, Calculator, Award, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative z-10">
            <h1 className="text-balance font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Сучасні віконні та <span className="text-primary">фасадні</span> рішення
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl text-balance">
              ПВХ, алюмінієві системи, двері та фасади. Виробництво, монтаж та сервіс під ключ по всій Україні.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-base shadow-elegant hover:opacity-95 transition"
              >
                <Calculator className="h-5 w-5" />
                Розрахувати вартість
              </a>
              <a
                href="tel:+380441234567"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition"
              >
                <Phone className="h-5 w-5" />
                Подзвонити
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { icon: Award, k: "12+", v: "років досвіду" },
                { icon: Shield, k: "10 років", v: "гарантії" },
                { icon: Clock, k: "7 днів", v: "виготовлення" },
              ].map((s) => (
                <div key={s.v}>
                  <s.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="font-display font-extrabold text-2xl">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] lg:aspect-[5/4]">
              <img
                src={heroImg}
                alt="Панорамні алюмінієві вікна в сучасній квартирі"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-2xl shadow-card p-4 lg:p-5 border border-border max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full bg-gradient-primary border-2 border-card" />
                  ))}
                </div>
                <div>
                  <div className="font-display font-bold text-sm">2 400+ клієнтів</div>
                  <div className="text-xs text-muted-foreground">довіряють нам</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

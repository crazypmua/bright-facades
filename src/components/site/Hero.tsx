import heroVideo from "@/assets/hero-video.mp4";
import { Phone, Calculator, Award, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Full-width background video */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-28 pb-20 lg:pb-32">
        <div className="max-w-2xl">
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
      </div>
    </section>
  );
}

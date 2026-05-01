import heroVideo from "@/assets/hero-video.mp4";
import { Phone, Calculator, Award, Shield, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeA, setActiveA] = useState(true);
  const fadeDuration = 1.2; // seconds of crossfade overlap

  // Pause when section is offscreen, resume when visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const a = videoARef.current;
        const b = videoBRef.current;
        if (!a || !b) return;
        if (entry.isIntersecting) {
          a.play().catch(() => {});
          b.play().catch(() => {});
        } else {
          a.pause();
          b.pause();
          a.currentTime = 0;
          b.currentTime = 0;
          setActiveA(true);
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Crossfade logic — when active video nears its end, start the other and swap
  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const handleTimeUpdate = (e: Event) => {
      const current = e.target as HTMLVideoElement;
      const isCurrentActive =
        (current === a && activeA) || (current === b && !activeA);
      if (!isCurrentActive) return;
      if (!current.duration || isNaN(current.duration)) return;

      if (current.duration - current.currentTime <= fadeDuration) {
        const next = current === a ? b : a;
        if (next.paused || next.currentTime > fadeDuration) {
          next.currentTime = 0;
          next.play().catch(() => {});
          setActiveA((prev) => !prev);
        }
      }
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [activeA]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden">
      {/* Full-width background video with crossfade loop */}
      <div className="absolute inset-0 z-0 bg-background">
        <video
          ref={videoARef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-linear"
          style={{ opacity: activeA ? 1 : 0, transitionDuration: `${fadeDuration}s` }}
        />
        <video
          ref={videoBRef}
          src={heroVideo}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-linear"
          style={{ opacity: activeA ? 0 : 1, transitionDuration: `${fadeDuration}s` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-32">
        <div className="max-w-2xl">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Виготовлення за 4 робочих дні
          </div>
          <h1 className="reveal text-balance font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-primary">Металопластикові</span> вікна та <span className="text-primary">фасадні</span> рішення
          </h1>
          <p className="reveal reveal-delay-1 mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl text-balance">
            EKIPAZH, WDS, VEKA, ALUMIL — оригінальні профілі. Власне виробництво, монтаж і сервіс під ключ по всій Україні.
          </p>

          <div className="reveal reveal-delay-2 mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+380982018981"
              className="relative inline-flex items-center justify-center gap-2 h-16 px-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg shadow-elegant hover:scale-[1.03] transition-transform"
            >
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              <Phone className="h-5 w-5 relative" />
              <span className="relative">Подзвонити зараз</span>
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 h-16 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition"
            >
              <Calculator className="h-5 w-5" />
              Розрахувати вартість
            </a>
          </div>

          <div className="reveal reveal-delay-3 mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { icon: Award, k: "№1", v: "виробник в Україні" },
              { icon: Clock, k: "4 дні", v: "виготовлення" },
              { icon: Shield, k: "10 років", v: "гарантії" },
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

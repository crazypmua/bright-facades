import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { Toaster } from "@/components/ui/sonner";

export type CatalogProduct = {
  name: string;
  origin: string;
  description: string;
  features: string[];
  badge?: string;
};

export type CatalogPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  products: CatalogProduct[];
  benefits: { title: string; text: string }[];
};

export function CatalogPage({
  eyebrow,
  title,
  subtitle,
  intro,
  heroImage,
  products,
  benefits,
}: CatalogPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-fade py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> На головну
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  {eyebrow}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                  {title}
                </h1>
                <p className="text-lg lg:text-xl text-foreground/70 mb-3">{subtitle}</p>
                <p className="text-base text-muted-foreground mb-8">{intro}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+380982018981"
                    className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-elegant hover:scale-[1.03] transition-transform"
                  >
                    <Phone className="h-4 w-4" /> Замовити прорахунок
                  </a>
                  <Link
                    to="/"
                    hash="calculator"
                    className="inline-flex items-center gap-2 px-6 h-12 rounded-full border-2 border-foreground/15 font-semibold hover:border-primary hover:text-primary transition-colors"
                  >
                    Калькулятор вартості
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 lg:mb-14">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Каталог
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Доступні моделі та системи
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <article
                  key={p.name}
                  className="relative group rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  {p.badge && (
                    <div className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                      {p.badge}
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {p.origin}
                  </div>
                  <h3 className="font-display text-2xl font-extrabold mb-3">{p.name}</h3>
                  <p className="text-sm text-foreground/70 mb-5">{p.description}</p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+380982018981"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" /> Дізнатися ціну
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight mb-10">
              Чому обирають Elite Space
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                  <div className="font-display font-bold text-lg mb-2 text-primary">{b.title}</div>
                  <div className="text-sm text-foreground/70">{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
      <Toaster />
    </div>
  );
}

import { useState, useMemo } from "react";
import { Calculator as CalcIcon, Phone } from "lucide-react";

const products = [
  { id: "two", label: "Двостулкове вікно", base: 6800, hint: "1300×1400 мм" },
  { id: "three", label: "Тристулкове вікно", base: 9200, hint: "1700×1400 мм" },
  { id: "balcony-block", label: "Балконний блок", base: 14500, hint: "вікно + двері" },
  { id: "balcony-glaze", label: "Засклення балкона", base: 18900, hint: "до 3 м, П-подібне" },
];

const profiles = [
  { id: "standard", label: "Стандарт", mult: 1 },
  { id: "premium", label: "Преміум", mult: 1.25 },
  { id: "elite", label: "Еліт (алюміній)", mult: 1.6 },
];

const glass = [
  { id: "1", label: "Однокамерний", mult: 1 },
  { id: "2", label: "Двокамерний (енергоощадний)", mult: 1.15 },
];

export function Calculator() {
  const [product, setProduct] = useState(products[0].id);
  const [profile, setProfile] = useState(profiles[0].id);
  const [g, setG] = useState(glass[1].id);
  const [install, setInstall] = useState(true);

  const total = useMemo(() => {
    const p = products.find((x) => x.id === product)!;
    const pr = profiles.find((x) => x.id === profile)!;
    const gl = glass.find((x) => x.id === g)!;
    const installCost = install ? 1500 : 0;
    return Math.round(p.base * pr.mult * gl.mult + installCost);
  }, [product, profile, g, install]);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Калькулятор
            </div>
            <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Розрахуйте вартість за 30 секунд
            </h2>
            <p className="text-muted-foreground text-lg">
              Орієнтовна ціна. Точний розрахунок — після безкоштовного виміру майстра.
            </p>
          </div>

          <div className="lg:col-span-8 bg-card rounded-3xl shadow-card p-6 lg:p-10 border border-border">
            <Field label="Тип виробу">
              <div className="grid sm:grid-cols-2 gap-3">
                {products.map((p) => (
                  <Option
                    key={p.id}
                    active={product === p.id}
                    onClick={() => setProduct(p.id)}
                    title={p.label}
                    sub={p.hint}
                  />
                ))}
              </div>
            </Field>

            <Field label="Профіль">
              <div className="grid sm:grid-cols-3 gap-3">
                {profiles.map((p) => (
                  <Option
                    key={p.id}
                    active={profile === p.id}
                    onClick={() => setProfile(p.id)}
                    title={p.label}
                  />
                ))}
              </div>
            </Field>

            <Field label="Склопакет">
              <div className="grid sm:grid-cols-2 gap-3">
                {glass.map((p) => (
                  <Option
                    key={p.id}
                    active={g === p.id}
                    onClick={() => setG(p.id)}
                    title={p.label}
                  />
                ))}
              </div>
            </Field>

            <Field label="Додатково">
              <button
                onClick={() => setInstall(!install)}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition ${
                  install ? "border-primary bg-primary/5" : "border-border bg-background"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Монтаж під ключ</div>
                    <div className="text-sm text-muted-foreground">Демонтаж, установка, відкоси</div>
                  </div>
                  <div className={`h-6 w-11 rounded-full transition ${install ? "bg-primary" : "bg-border"}`}>
                    <div className={`h-6 w-6 rounded-full bg-background shadow transition-transform ${install ? "translate-x-5" : ""}`} />
                  </div>
                </div>
              </button>
            </Field>

            <div className="mt-8 rounded-2xl bg-foreground text-background p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-background/60 mb-1">
                  Приблизна загальна сума
                </div>
                <div className="font-display font-extrabold text-4xl lg:text-5xl">
                  ≈ {total.toLocaleString("uk-UA")} <span className="text-primary">₴</span>
                </div>
                <div className="text-xs text-background/50 mt-2">
                  Орієнтовно. Точна вартість — після безкоштовного виміру майстра.
                </div>
              </div>
              <a
                href="tel:+380982018981"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-elegant whitespace-nowrap hover:scale-[1.03] transition-transform"
              >
                <Phone className="h-5 w-5" />
                Точний розрахунок
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm font-semibold mb-3">
        <CalcIcon className="h-4 w-4 text-primary" />
        {label}
      </div>
      {children}
    </div>
  );
}

function Option({
  active,
  onClick,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left px-4 py-3.5 rounded-2xl border-2 transition ${
        active
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-border bg-background hover:border-foreground/30"
      }`}
    >
      <div className="font-semibold text-sm">{title}</div>
      {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
    </button>
  );
}

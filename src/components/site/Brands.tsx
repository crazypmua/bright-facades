export function Brands() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Бренди
          </div>
          <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight">
            Працюємо лише з перевіреними виробниками
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Металопластикові системи
            </div>
            <ul className="space-y-4">
              <li className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-display font-extrabold text-3xl text-primary">EKIPAZH</span>
                <span className="text-sm text-muted-foreground">Україна · головний партнер</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-display font-bold text-2xl">WDS</span>
                <span className="text-sm text-muted-foreground">Україна</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="font-display font-bold text-2xl">VEKA</span>
                <span className="text-sm text-muted-foreground">Німеччина</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Алюмінієві системи
            </div>
            <ul className="space-y-4">
              <li className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-display font-bold text-2xl">Ekipazh AluLight</span>
                <span className="text-sm text-muted-foreground">Україна</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="font-display font-bold text-2xl">Prokural</span>
                <span className="text-sm text-muted-foreground">Польща</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BadgeCheck } from "lucide-react";

const certs = ["REHAU", "Schüco", "Reynaers", "Veka", "Roto", "Maco", "Alutech", "WDS"];

export function Certificates() {
  return (
    <section className="py-12 lg:py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <BadgeCheck className="h-5 w-5 text-primary" />
          Сертифіковані партнери
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {certs.map((c) => (
            <div
              key={c}
              className="h-16 rounded-xl border border-border bg-card flex items-center justify-center font-display font-extrabold text-lg text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

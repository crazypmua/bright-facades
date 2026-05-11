import { Phone, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCall() {
  const [showHint, setShowHint] = useState(true);
  const [hintEntered, setHintEntered] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setHintEntered(true), 450);
    return () => window.clearTimeout(id);
  }, []);

  const goToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHint(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <>
      {showHint && hintEntered && (
        <div
          className="fixed bottom-[6.25rem] right-4 sm:right-6 z-[45] w-[calc(100vw-2rem)] max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-500"
          role="status"
        >
          <div className="relative rounded-2xl border border-primary/35 bg-card px-3.5 py-3 pr-9 shadow-elegant">
            <div
              className="absolute -bottom-1.5 right-10 h-3 w-3 rotate-45 border-b border-r border-primary/35 bg-card"
              aria-hidden
            />
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-xs sm:text-sm leading-snug text-foreground pt-0.5">
                <span className="font-semibold">Зворотній зв'язок</span>
                {" — "}
                залиште заявку, передзвонимо за 15 хвилин.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowHint(false)}
              className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Закрити підказку"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      <a
        href="#contact"
        onClick={goToForm}
        aria-label="Зворотній зв'язок"
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
      >
        <Phone className="h-7 w-7" />
      </a>
    </>
  );
}

import { MessageCircle, X, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Msg = { id: number; from: "bot" | "user"; text: string };

export function FloatingCall() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 1, from: "bot", text: "Вітаємо в Elite Space! Чим можемо допомогти?" },
  ]);
  const [text, setText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [
      ...m,
      { id: Date.now(), from: "user", text: t },
      { id: Date.now() + 1, from: "bot", text: "Дякуємо! Менеджер зв'яжеться з вами найближчим часом." },
    ]);
    setText("");
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-3xl border border-border bg-card shadow-elegant overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-gradient-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-base">Elite Space</div>
              <div className="text-xs opacity-90 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Онлайн зараз
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
              aria-label="Закрити"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={scrollRef} className="max-h-80 overflow-y-auto px-4 py-4 space-y-3 bg-background">
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={send} className="border-t border-border p-3 flex items-center gap-2 bg-card">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напишіть повідомлення..."
              className="flex-1 rounded-full border border-border bg-background px-4 h-11 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            />
            <button
              type="submit"
              aria-label="Надіслати"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Відкрити чат"
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </>
  );
}

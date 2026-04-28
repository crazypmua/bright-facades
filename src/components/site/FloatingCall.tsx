import { MessageCircle, X, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Msg = { role: "bot" | "user"; text: string };

export function FloatingCall() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Вітаємо в ELITE SPACE! 👋 Я ваш консультант. Чим можу допомогти — вікна, двері, фасади?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "bot", text: "Дякуємо! Менеджер відповість найближчим часом. (Тут буде ChatGPT 🚀)" },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col rounded-2xl bg-card border border-border shadow-elegant overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground">
            <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold leading-tight">Консультант ELITE SPACE</div>
              <div className="text-xs opacity-90">Онлайн · відповідаємо за хвилину</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Закрити чат"
              className="h-8 w-8 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-background min-h-[280px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={send} className="p-3 border-t border-border bg-card flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишіть повідомлення..."
              className="flex-1 h-11 px-4 rounded-full bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              aria-label="Надіслати"
              className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрити чат" : "Відкрити чат"}
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />}
        {open ? <X className="h-7 w-7 relative" /> : <MessageCircle className="h-7 w-7 relative" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-background">
            1
          </span>
        )}
      </button>
    </>
  );
}

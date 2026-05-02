import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useState, useRef, useEffect, FormEvent } from "react";

type Msg = { role: "bot" | "user"; text: string };

function formatPrice(value: number) {
  return `${value.toLocaleString("uk-UA")} грн`;
}

function parseDimensions(text: string) {
  const match = text.match(/(\d{2,4}(?:[.,]\d+)?)\s*[xх×*]\s*(\d{2,4}(?:[.,]\d+)?)/i);
  if (!match) return null;
  const leftRaw = Number.parseFloat(match[1].replace(",", "."));
  const rightRaw = Number.parseFloat(match[2].replace(",", "."));
  if (!Number.isFinite(leftRaw) || !Number.isFinite(rightRaw)) return null;
  const width = leftRaw > 20 ? leftRaw / 1000 : leftRaw;
  const height = rightRaw > 20 ? rightRaw / 1000 : rightRaw;
  if (width <= 0 || height <= 0) return null;
  return { width, height };
}

function quickEstimate(width: number, height: number) {
  const area = width * height;
  const basePerM2 = 7900;
  const material = area * basePerM2 * 1.1;
  const withInstall = Math.round(material + 1800);
  return { withInstall, areaM2: area };
}

const upsellSoft =
  " Для діалогу «як у живого експерта» з пам'яттю контексту та глибоким знанням вашого каталогу підключаємо корпоративний AI — уточніть у менеджера умови.";

function composeBotReply(userRaw: string): string {
  const t = userRaw.trim();
  const lower = t.toLowerCase();

  if (/^(привіт|вітаю|добрий\s*день|добрий\s*ранок|добрий\s*вечір|здрастуй|здравствуй|привет|hello|hi|hey)\b/i.test(t) || /^(привіт|вітаю|привет)[!.\s]*$/i.test(t)) {
    return "Привіт! Раді вас бачити в ELITE SPACE. Підкажу по вікнах ПВХ і алюмінію, дверях і фасадних рішеннях: комплектація, терміни, орієнтовний бюджет. Напишіть розмір прорізу (наприклад 1400×1600) або що хочете змінити у квартирі/будинку — запропоную 2–3 варіанти під ваш запит.";
  }

  const dims = parseDimensions(t);
  if (dims) {
    const { withInstall, areaM2 } = quickEstimate(dims.width, dims.height);
    const wMm = Math.round(dims.width * 1000);
    const hMm = Math.round(dims.height * 1000);
    return `Оцінив проріз ${wMm}×${hMm} мм (~${areaM2.toFixed(2)} м²). Орієнтовно «під ключ» з типовою комплектацією: від ${formatPrice(withInstall)}. Точна ціна — після виїзду майстра на замір; заявку можна залишити на сайті.${upsellSoft}`;
  }

  if (/(ціна|вартість|скільки|дорого|дешев|знижк|кошт|бюджет)/i.test(lower)) {
    return `Ціну збираємо з профілю, склопакета, фурнітури та монтажу — тому діапазон завжди прозорий. Напишіть тип (вікно/блок/балкон) і розміри — одразу дам орієнтир у гривнях. Або зателефонуйте — підключимо менеджера за 1 хвилину.${upsellSoft}`;
  }

  if (/(термін|коли|швидко|черга|скільки\s*чекати)/i.test(lower)) {
    return "Типово: замір 1–3 дні, виробництво від кількох тижнів залежно від профілю та скла, монтаж узгоджуємо окремо. Якщо потрібно швидше — є черга «під термін», уточню на об'єкті.";
  }

  if (/(гарант|сервіс|якщо\s*щось|полам|ремонт)/i.test(lower)) {
    return "Даємо гарантію на виріб і на монтаж — умови фіксуємо в договорі. Сервіс після монтажу: виїзд майстра за заявкою. Можу коротко пояснити, що саме покриває гарантія — напишіть, що вас хвилює.";
  }

  if (/(пвх|пластик|вікн|склопакет|тепл|шум|енерго)/i.test(lower)) {
    return "Для тепла й тиші зазвичай беруть багатокамерний профіль і двокамерний енергосклопакет + акуратний монтаж із «теплою» рамою. Якщо напишете орієнтовний розмір і поверх (перший/остання поверх) — підкажу оптимальну комплектацію та орієнтир по бюджету.";
  }

  if (/(двер|вхід|балкон|розсув|фасад|холодн|тепл)/i.test(lower)) {
    return "По дверях, балконних блоках, розсувці та фасадах підбираємо систему під навантаження та мікроклімат. Опишіть завдання одним реченням (наприклад «вхідні двері в приватний будинок») — запропоную логіку рішення та наступний крок.";
  }

  if (/(замір|виїзд|мастер|майстер|приїд|адрес)/i.test(lower)) {
    return "Безкоштовний виїзд на замір — стандартна практика: знімаємо точні розміри, перевіряємо проріз, узгоджуємо фурнітуру. Залиште контакт у формі на сайті або напишіть місто/район — підкажу, як швидше зафіксувати дату.";
  }

  if (/(chatgpt|нейромереж|іі|ai|штучн)/i.test(lower)) {
    return "Зараз ви спілкуєтесь із демо-консультантом на правилах ELITE SPACE: швидкі точні відповіді без зовнішніх сервісів. Підключення повноцінного AI (наприклад ChatGPT) дає глибший діалог, пам'ять сесії та тонке підлаштування під ваш прайс і каталог — це окрема інтеграція, обговорюється з менеджером.";
  }

  return `Дякую за повідомлення! Якщо коротко опишете задачу (вікна / двері / фасад + місто або розміри), дам конкретну відповідь і орієнтир. Складні сценарії та довгі діалоги «як у топ-менеджера» — через підключення корпоративного AI; можу розповісти різницю при дзвінку.${upsellSoft}`;
}

export function FloatingCall() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showFabHint, setShowFabHint] = useState(true);
  const [fabHintEntered, setFabHintEntered] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Вітаємо в ELITE SPACE! Я ваш онлайн-консультант — вікна, двері, фасади. Напишіть привітання або розмір прорізу (наприклад 1300×1400), і я одразу відповім.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, typing]);

  useEffect(() => {
    const id = window.setTimeout(() => setFabHintEntered(true), 450);
    return () => window.clearTimeout(id);
  }, []);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setShowFabHint(false);
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    const delay = 550 + Math.floor(Math.random() * 450);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: composeBotReply(text) }]);
    }, delay);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col rounded-2xl bg-card border border-border shadow-elegant overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground">
            <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold leading-tight">Консультант ELITE SPACE</div>
              <div className="text-xs opacity-90">Демо-режим · відповідь за секунди</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрити чат"
              className="h-8 w-8 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-background min-h-[280px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
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
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse [animation-delay:150ms]">●</span>
                    <span className="animate-pulse [animation-delay:300ms]">●</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={send} className="p-3 border-t border-border bg-card flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишіть повідомлення..."
              disabled={typing}
              className="flex-1 h-11 px-4 rounded-full bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={typing}
              aria-label="Надіслати"
              className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {!open && showFabHint && fabHintEntered && (
        <div
          className="fixed bottom-[6.25rem] right-4 sm:right-6 z-[45] w-[calc(100vw-2rem)] max-w-[300px] animate-in fade-in slide-in-from-bottom-2 duration-500"
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
                <span className="font-semibold">Натисніть і напишіть сюди</span>
                {" — "}
                наш ШІ-консультант допоможе прорахувати розміри, комплектацію та бюджет.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowFabHint(false)}
              className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Закрити підказку"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            if (next) setShowFabHint(false);
            return next;
          });
        }}
        aria-label={open ? "Закрити чат" : "Відкрити чат"}
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-background">
            1
          </span>
        )}
      </button>
    </>
  );
}

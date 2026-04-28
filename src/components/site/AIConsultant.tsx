import { FormEvent, useEffect, useMemo, useState } from "react";
import { Sparkles, X } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const productFactors = [
  { id: "window", label: "Стандартне вікно", factor: 1 },
  { id: "premium-window", label: "Преміум вікно", factor: 1.2 },
  { id: "balcony", label: "Балконний блок", factor: 1.35 },
  { id: "sliding", label: "Розсувна система", factor: 1.55 },
];

function estimatePrice({
  width,
  height,
  basePricePerM2,
  productFactor,
  withInstall,
}: {
  width: number;
  height: number;
  basePricePerM2: number;
  productFactor: number;
  withInstall: boolean;
}) {
  const area = width * height;
  const materialPrice = area * basePricePerM2 * productFactor;
  const installPrice = withInstall ? 1800 : 0;
  return Math.max(0, Math.round(materialPrice + installPrice));
}

function parseDimensions(text: string) {
  const match = text.match(/(\d{2,4}(?:[.,]\d+)?)\s*[xх*]\s*(\d{2,4}(?:[.,]\d+)?)/i);
  if (!match) return null;

  const leftRaw = Number.parseFloat(match[1].replace(",", "."));
  const rightRaw = Number.parseFloat(match[2].replace(",", "."));
  if (!Number.isFinite(leftRaw) || !Number.isFinite(rightRaw)) return null;

  const width = leftRaw > 20 ? leftRaw / 1000 : leftRaw;
  const height = rightRaw > 20 ? rightRaw / 1000 : rightRaw;
  if (width <= 0 || height <= 0) return null;

  return { width, height };
}

function formatPrice(value: number) {
  return `${value.toLocaleString("uk-UA")} грн`;
}

function buildConsultantReply(input: string, estimatedTotal: number) {
  const text = input.toLowerCase();

  if (/(дорого|дешевле|знижк|скидк|акц|ціна)/i.test(text)) {
    return `Розумію запит про ціну. Орієнтир зараз: ${formatPrice(estimatedTotal)}. Можу запропонувати дешевшу комплектацію профілю/склопакета без втрати базової якості.`;
  }

  if (/(гарант|сервіс|полам|ремонт)/i.test(text)) {
    return "Даємо офіційну гарантію на конструкцію та монтаж. Якщо виникає питання після монтажу, сервісний майстер виїжджає по заявці.";
  }

  if (/(обман|каверз|підвох|почему так дорого|чому так дорого)/i.test(text)) {
    return "Чесно: найдешевша пропозиція на ринку зазвичай економить на армуванні, фурнітурі або монтажі. Ми рахуємо прозоро: профіль, склопакет, фурнітура, монтаж - окремо без прихованих платежів.";
  }

  if (/(тепл|холод|шум|тихо|енерго)/i.test(text)) {
    return "Для тепла й тиші рекомендую двокамерний енергоощадний склопакет і теплий монтаж. Це помітно знижує втрати тепла та вуличний шум.";
  }

  if (/(замір|заміри|вимір|виїзд|мастер|майстер)/i.test(text)) {
    return "Оформлю заявку на безкоштовний виїзд майстра: залиште ім'я та телефон у формі нижче, і менеджер узгодить зручний час.";
  }

  return `Підкажу як консультант: за поточними параметрами орієнтовна вартість ${formatPrice(estimatedTotal)}. Якщо дасте точні розміри або фото прорізу, уточню комплектацію.`;
}

export function AIConsultant() {
  const [basePricePerM2, setBasePricePerM2] = useState(7900);
  const [width, setWidth] = useState(1.3);
  const [height, setHeight] = useState(1.4);
  const [selectedProduct, setSelectedProduct] = useState(productFactors[0].id);
  const [withInstall, setWithInstall] = useState(true);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Вітаю. Я онлайн-консультант по вікнах. Напишіть розмір у форматі 1300x1400 або задайте питання по ціні, гарантії чи монтажу.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [showChatHint, setShowChatHint] = useState(true);
  const [hintEntered, setHintEntered] = useState(false);

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadStatus, setLeadStatus] = useState("");

  const selectedFactor = useMemo(
    () => productFactors.find((item) => item.id === selectedProduct)?.factor ?? 1,
    [selectedProduct],
  );

  const estimatedTotal = useMemo(
    () =>
      estimatePrice({
        width,
        height,
        basePricePerM2,
        productFactor: selectedFactor,
        withInstall,
      }),
    [basePricePerM2, height, selectedFactor, width, withInstall],
  );

  useEffect(() => {
    const id = window.setTimeout(() => setHintEntered(true), 450);
    return () => window.clearTimeout(id);
  }, []);

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed) return;

    setShowChatHint(false);

    const nextMessages: Message[] = [...messages, { role: "user", text: trimmed }];
    const dimensions = parseDimensions(trimmed);

    if (dimensions) {
      setWidth(dimensions.width);
      setHeight(dimensions.height);
      const recalculated = estimatePrice({
        width: dimensions.width,
        height: dimensions.height,
        basePricePerM2,
        productFactor: selectedFactor,
        withInstall,
      });
      nextMessages.push({
        role: "assistant",
        text: `Прийняв розміри ${Math.round(dimensions.width * 1000)}x${Math.round(dimensions.height * 1000)} мм. Орієнтовна ціна: ${formatPrice(recalculated)}.`,
      });
    } else {
      nextMessages.push({
        role: "assistant",
        text: buildConsultantReply(trimmed, estimatedTotal),
      });
    }

    setMessages(nextMessages);
    setChatInput("");
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (leadName.trim().length < 2) {
      setLeadStatus("Вкажіть, будь ласка, ваше ім'я.");
      return;
    }

    if (!/^\+?[0-9()\-\s]{9,20}$/.test(leadPhone.trim())) {
      setLeadStatus("Вкажіть коректний номер телефону.");
      return;
    }

    setLeadStatus("Заявку прийнято. Менеджер зв'яжеться з вами для узгодження виїзду майстра.");
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: `Оформив заявку на виїзд майстра для ${leadName.trim()}, телефон ${leadPhone.trim()}. Попередній бюджет: ${formatPrice(estimatedTotal)}.`,
      },
    ]);
    setLeadName("");
    setLeadPhone("");
  };

  return (
    <section id="ai-consultant" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                AI консультант
              </div>
              <h2 className="reveal font-display text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Онлайн продажник по вікнах на чистому JS
              </h2>
              <p className="text-muted-foreground text-lg">
                Консультує по цінах, відповідає на складні питання та рахує орієнтовний бюджет без бекенду.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
              <h3 className="font-semibold text-lg">Параметри розрахунку</h3>

              <label className="block">
                <span className="text-sm text-muted-foreground">Базова вартість за м2 (грн)</span>
                <input
                  type="number"
                  min={1000}
                  step={100}
                  value={basePricePerM2}
                  onChange={(e) => setBasePricePerM2(Number(e.target.value) || 0)}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-sm text-muted-foreground">Ширина (м)</span>
                  <input
                    type="number"
                    min={0.4}
                    max={6}
                    step={0.01}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value) || 0)}
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Висота (м)</span>
                  <input
                    type="number"
                    min={0.4}
                    max={4}
                    step={0.01}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value) || 0)}
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-muted-foreground">Тип виробу</span>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3"
                >
                  {productFactors.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={withInstall}
                  onChange={(e) => setWithInstall(e.target.checked)}
                  className="h-4 w-4"
                />
                Додати монтаж під ключ
              </label>

              <div className="rounded-xl bg-secondary p-4">
                <div className="text-sm text-muted-foreground mb-1">Орієнтовна сума</div>
                <div className="text-3xl font-bold">{formatPrice(estimatedTotal)}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-5 lg:p-6">
              <h3 className="font-semibold text-xl mb-4">Чат з консультантом</h3>
              <div className="h-[360px] overflow-y-auto rounded-2xl bg-secondary p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "assistant"
                        ? "bg-background border border-border"
                        : "bg-primary text-primary-foreground ml-auto"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              {showChatHint && hintEntered && (
                <div
                  className="relative mt-4 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                  role="status"
                >
                  <div className="relative rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-4 py-3 pr-10 shadow-soft shadow-primary/10">
                    <div className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 border-b border-r border-primary/35 bg-primary/5" aria-hidden />
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-sm leading-snug text-foreground pt-0.5">
                        <span className="font-semibold">Напишіть сюди</span>
                        {" — "}
                        наш ШІ-консультант допоможе все прорахувати: розміри, комплектацію та орієнтовний бюджет.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowChatHint(false)}
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-background/80 hover:text-foreground transition-colors"
                      aria-label="Закрити підказку"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleChatSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Наприклад: 1500x1400, чому так дорого, яка гарантія?"
                  className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-xl bg-gradient-primary text-primary-foreground font-semibold"
                >
                  Надіслати
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-border bg-card p-5 lg:p-6">
              <h3 className="font-semibold text-xl mb-4">Заявка на виїзд майстра</h3>
              <form onSubmit={handleLeadSubmit} className="grid sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Ваше ім'я"
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm"
                />
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="+380..."
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm"
                />
                <button
                  type="submit"
                  className="h-12 rounded-xl bg-foreground text-background font-semibold"
                >
                  Викликати майстра
                </button>
              </form>
              {leadStatus && <p className="mt-3 text-sm text-muted-foreground">{leadStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

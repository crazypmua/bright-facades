import { useState } from "react";
import { z } from "zod";
import { Phone, Send, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Вкажіть ім’я").max(80),
  phone: z.string().trim().min(7, "Вкажіть телефон").max(30),
  message: z.string().trim().max(500).optional(),
});

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSent(true);
    toast.success("Заявка прийнята! Ми зателефонуємо протягом 15 хвилин.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Зв'язатися з нами
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Безкоштовна консультація та вимір
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Залиште заявку — менеджер передзвонить протягом 15 хвилин, відповість на питання та допоможе підібрати рішення.
            </p>

            <div className="space-y-4">
              <Info icon={Phone} title="+380 44 123 45 67" sub="Пн–Сб, 9:00–20:00" href="tel:+380441234567" />
              <Info icon={Send} title="@vitro_ua" sub="Telegram" href="https://t.me/vitro" />
              <Info icon={MessageCircle} title="WhatsApp" sub="+380 67 123 45 67" href="https://wa.me/380671234567" />
              <Info icon={Mail} title="info@vitro.ua" sub="Електронна пошта" href="mailto:info@vitro.ua" />
              <Info icon={MapPin} title="м. Київ, вул. Промислова, 12" sub="Шоурум та офіс" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-card rounded-3xl border border-border shadow-card p-6 lg:p-10"
            >
              <h3 className="font-display font-extrabold text-2xl mb-6">Замовити дзвінок</h3>
              <div className="space-y-4">
                <Input name="name" placeholder="Ваше ім’я" required />
                <Input name="phone" type="tel" placeholder="+380 __ ___ __ __" required />
                <textarea
                  name="message"
                  placeholder="Коментар (необов’язково)"
                  rows={4}
                  maxLength={500}
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-base focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-base shadow-elegant hover:opacity-95 transition"
                >
                  {sent ? <CheckCircle2 className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                  {sent ? "Заявка надіслана" : "Замовити дзвінок"}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  title,
  sub,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  href?: string;
}) {
  const Tag: React.ElementType = href ? "a" : "div";
  return (
    <Tag
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-border p-4 hover:border-primary/40 hover:bg-secondary transition-colors"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{sub}</div>
      </div>
    </Tag>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-border bg-background px-5 h-14 text-base focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
    />
  );
}

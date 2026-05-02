import logoOriginal from "@/assets/logo-elite-space-original.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-background rounded-md px-2 py-1.5">
                <img src={logoOriginal} alt="Elite Space" width={128} height={44} className="h-9 w-auto" />
              </div>
            </div>
            <p className="text-sm italic mb-2">«Елітний Простір — Наповнений Природним Світлом»</p>
            <p className="text-xs text-background/50">Партнер EKIPAZH — найбільшого виробника вікон в Україні.</p>
          </div>
          <FooterCol
            title="Продукція"
            items={["Металопластикові вікна", "Алюмінієві системи", "Двері", "Фасади"]}
          />
          <FooterCol
            title="Бренди"
            items={["EKIPAZH", "WDS", "VEKA", "ALUMIL"]}
          />
          <div>
            <h4 className="font-display font-bold text-background mb-4">Контакти</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+380982018981" className="hover:text-primary transition-colors">+380 98 201 89 81</a></li>
              <li><a href="tel:+380971753288" className="hover:text-primary transition-colors">+380 97 175 32 88</a></li>
              <li><a href="https://elitespacegroup.com/" className="hover:text-primary transition-colors">elitespacegroup.com</a></li>
              <li><a href="https://t.me/EliteWindowsEkipazh" className="hover:text-primary transition-colors">Telegram-канал</a></li>
              <li><a href="https://www.instagram.com/elitespace_ekipazh" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-background/10 text-sm text-background/50 flex flex-col sm:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} Elite Space · Ekipazh. Всі права захищені.</div>
          <div>Виготовлення вікон за 4 робочих дні</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-background mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="hover:text-primary cursor-pointer transition-colors">{i}</li>
        ))}
      </ul>
    </div>
  );
}

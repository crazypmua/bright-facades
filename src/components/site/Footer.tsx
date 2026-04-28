export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="font-display font-extrabold text-primary-foreground">V</span>
              </div>
              <div className="font-display font-extrabold text-lg text-background">VITRO</div>
            </div>
            <p className="text-sm">Преміум вікна, двері та фасадні системи в Україні.</p>
          </div>
          <FooterCol title="Продукція" items={["ПВХ вікна", "Алюмінієві вікна", "Двері", "Фасади"]} />
          <FooterCol title="Компанія" items={["Про нас", "Проєкти", "Сертифікати", "Контакти"]} />
          <FooterCol title="Контакти" items={["+380 44 123 45 67", "info@vitro.ua", "Київ, Промислова, 12"]} />
        </div>
        <div className="mt-10 pt-6 border-t border-background/10 text-sm text-background/50 flex flex-col sm:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} VITRO. Всі права захищені.</div>
          <div>Зроблено з турботою про ваш дім</div>
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

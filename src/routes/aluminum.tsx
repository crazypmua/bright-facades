import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/site/CatalogPage";
import heroImg from "@/assets/gallery-sliding.jpg";

export const Route = createFileRoute("/aluminum")({
  head: () => ({
    meta: [
      { title: "Алюмінієві системи — ALUMIL, AluLight | Elite Space" },
      {
        name: "description",
        content:
          "Алюмінієві вікна, двері та розсувні системи. ALUMIL (Греція) та Ekipazh AluLight — преміум для архітектурних рішень.",
      },
      { property: "og:title", content: "Алюмінієві системи — Elite Space" },
      { property: "og:description", content: "ALUMIL та Ekipazh AluLight — холодні та теплі системи." },
    ],
  }),
  component: AluminumPage,
});

function AluminumPage() {
  return (
    <CatalogPage
      eyebrow="Алюміній"
      title="Алюмінієві системи"
      subtitle="Великі скління, чисті лінії та архітектурна свобода"
      intro="Холодні та теплі алюмінієві системи від ALUMIL (Греція) та Ekipazh AluLight — для приватних будинків, ресторанів, офісів та комерційних об'єктів."
      heroImage={heroImg}
      products={[
        {
          name: "AluLight — холодний",
          origin: "Ekipazh · Україна",
          description: "Легкий алюмінієвий профіль для балконів, лоджій та літніх веранд.",
          features: ["Без терморозриву", "Розсувні стулки", "Монтаж за 1 день"],
        },
        {
          name: "ALUMIL S77",
          origin: "ALUMIL · Греція",
          description: "Тепла система з терморозривом для енергоефективних будинків.",
          features: ["Монтажна ширина 77 мм", "Ud до 1,0 Вт/м²К", "Скло до 56 мм"],
          badge: "Преміум",
        },
        {
          name: "ALUMIL SMARTIA M630",
          origin: "ALUMIL · Греція",
          description: "Преміальна розсувна система для панорамних терас.",
          features: ["Скління до 6 м", "Підйомно-розсувна", "Низький поріг"],
          badge: "Хіт",
        },
        {
          name: "ALUMIL SUPREME S650",
          origin: "ALUMIL · Греція",
          description: "Топова система пасивного дому з мінімалістичним дизайном.",
          features: ["Монтажна ширина 76 мм", "3 ущільнювачі", "Прихована стулка"],
        },
        {
          name: "Розсувний портал ALUMIL",
          origin: "ALUMIL · Греція",
          description: "Безрамкові розсувні системи для максимальної панорами.",
          features: ["Скло до 48 мм", "Електропривід опція", "Антимоскітна сітка"],
        },
        {
          name: "Зимовий сад",
          origin: "ALUMIL · Греція",
          description: "Комплексні рішення для прибудов та зимових садів під ключ.",
          features: ["Скляний дах", "Інтегрована вентиляція", "Сонцезахист"],
        },
      ]}
      benefits={[
        { title: "Архітектурна свобода", text: "Габарити до 6 метрів і необмежені форми." },
        { title: "Терморозрив", text: "Енергоефективність на рівні преміальних ПВХ-систем." },
        { title: "Сертифікати", text: "Офіційний партнер ALUMIL в Україні." },
        { title: "Інженерний супровід", text: "Прорахунок навантажень та індивідуальний проект." },
      ]}
    />
  );
}

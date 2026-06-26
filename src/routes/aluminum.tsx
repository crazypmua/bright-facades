import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/site/CatalogPage";
import heroImg from "@/assets/gallery-sliding.jpg";

export const Route = createFileRoute("/aluminum")({
  head: () => ({
    meta: [
      { title: "Алюмінієві системи — Prokural, AluLight | Elite Space" },
      {
        name: "description",
        content:
          "Алюмінієві вікна, двері та розсувні системи. Prokural (Польша) та Ekipazh AluLight — преміум для архітектурних рішень.",
      },
      { property: "og:title", content: "Алюмінієві системи — Elite Space" },
      { property: "og:description", content: "Prokural та Ekipazh AluLight — холодні та теплі системи." },
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
      intro="Холодні та теплі алюмінієві системи від Prokural (Польша) та Ekipazh AluLight — для приватних будинків, ресторанів, офісів та комерційних об'єктів."
      heroImage={heroImg}
      products={[
        {
          name: "AluLight — холодний",
          origin: "Ekipazh · Україна",
          description: "Легкий алюмінієвий профіль для балконів, лоджій та літніх веранд.",
          features: ["Без терморозриву", "Розсувні стулки", "Монтаж за 1 день"],
        },
        {
          name: "Prokural S77",
          origin: "Prokural · Польша",
          description: "Тепла система з терморозривом для енергоефективних будинків.",
          features: ["Монтажна ширина 77 мм", "Ud до 1,0 Вт/м²К", "Скло до 56 мм"],
          badge: "Преміум",
        },
        {
          name: "Prokural SMARTIA M630",
          origin: "Prokural · Польша",
          description: "Преміальна розсувна система для панорамних терас.",
          features: ["Скління до 6 м", "Підйомно-розсувна", "Низький поріг"],
          badge: "Хіт",
        },
        {
          name: "Prokural SUPREME S650",
          origin: "Prokural · Польша",
          description: "Топова система пасивного дому з мінімалістичним дизайном.",
          features: ["Монтажна ширина 76 мм", "3 ущільнювачі", "Прихована стулка"],
        },
        {
          name: "Розсувний портал Prokural",
          origin: "Prokural · Польша",
          description: "Безрамкові розсувні системи для максимальної панорами.",
          features: ["Скло до 48 мм", "Електропривід опція", "Антимоскітна сітка"],
        },
        {
          name: "Зимовий сад",
          origin: "Prokural · Польша",
          description: "Комплексні рішення для прибудов та зимових садів під ключ.",
          features: ["Скляний дах", "Інтегрована вентиляція", "Сонцезахист"],
        },
      ]}
      benefits={[
        { title: "Архітектурна свобода", text: "Габарити до 6 метрів і необмежені форми." },
        { title: "Терморозрив", text: "Енергоефективність на рівні преміальних ПВХ-систем." },
        { title: "Сертифікати", text: "Офіційний партнер Prokural в Україні." },
        { title: "Інженерний супровід", text: "Прорахунок навантажень та індивідуальний проект." },
      ]}
    />
  );
}

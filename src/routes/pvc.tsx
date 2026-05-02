import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/site/CatalogPage";
import heroImg from "@/assets/gallery-pvc-window.jpg";

export const Route = createFileRoute("/pvc")({
  head: () => ({
    meta: [
      { title: "Металопластикові вікна — EKIPAZH, WDS, VEKA | Elite Space" },
      {
        name: "description",
        content:
          "Металопластикові вікна EKIPAZH, WDS, VEKA — енергозбереження, тиша та комфорт. Виготовлення за 4 робочих дні.",
      },
      { property: "og:title", content: "Металопластикові вікна — Elite Space" },
      {
        property: "og:description",
        content: "EKIPAZH, WDS, VEKA — преміальні металопластикові вікна під ключ.",
      },
    ],
  }),
  component: PvcPage,
});

function PvcPage() {
  return (
    <CatalogPage
      eyebrow="Хіт продажів"
      title="Металопластикові вікна"
      subtitle="Енергоефективність, тиша та преміальний дизайн для вашого простору"
      intro="Системи від EKIPAZH — найбільшого виробника вікон в Україні, а також німецькі профілі WDS та VEKA. Власне виробництво дозволяє виготовляти вікна за 4 робочих дні."
      heroImage={heroImg}
      products={[
        {
          name: "EKIPAZH Optima",
          origin: "EKIPAZH · Україна",
          description: "5-камерний профіль для квартир та будинків. Оптимальне співвідношення ціна/якість.",
          features: ["Монтажна ширина 70 мм", "5 камер · 2 ущільнювачі", "Енергозбереження клас А"],
          badge: "Хіт",
        },
        {
          name: "EKIPAZH Premium",
          origin: "EKIPAZH · Україна",
          description: "6-камерна система для максимального тепла та шумоізоляції.",
          features: ["Монтажна ширина 76 мм", "6 камер · 3 ущільнювачі", "Ud до 0,9 Вт/м²К"],
        },
        {
          name: "WDS 5 Series",
          origin: "WDS · Україна",
          description: "Сучасний 5-камерний профіль для будь-яких архітектурних рішень.",
          features: ["Монтажна ширина 70 мм", "Армування 1,5 мм", "Стійкість до УФ"],
        },
        {
          name: "WDS 7 Series",
          origin: "WDS · Україна",
          description: "Преміальна 7-камерна система — максимальний комфорт у будь-яку погоду.",
          features: ["Монтажна ширина 76 мм", "7 камер", "Скло до 48 мм"],
        },
        {
          name: "VEKA Softline 70",
          origin: "VEKA · Німеччина",
          description: "Класика німецької інженерії — надійність на десятиліття.",
          features: ["Монтажна ширина 70 мм", "5 камер", "Гарантія 40 років на профіль"],
          badge: "Преміум",
        },
        {
          name: "VEKA Softline 82",
          origin: "VEKA · Німеччина",
          description: "Топова система пасивного дому з рекордним енергозбереженням.",
          features: ["Монтажна ширина 82 мм", "6 камер", "Ud до 0,73 Вт/м²К"],
        },
      ]}
      benefits={[
        { title: "4 робочих дні", text: "Власне виробництво EKIPAZH — найшвидші терміни в Україні." },
        { title: "Гарантія", text: "До 40 років на профіль, 5 років на фурнітуру." },
        { title: "Замір безкоштовно", text: "Виїзд інженера у зручний для вас час." },
        { title: "Монтаж під ключ", text: "Демонтаж, встановлення, відкоси та підвіконня." },
      ]}
    />
  );
}

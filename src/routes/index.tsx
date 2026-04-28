import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Gallery } from "@/components/site/Gallery";
import { Calculator } from "@/components/site/Calculator";
import { AIConsultant } from "@/components/site/AIConsultant";
import { WhyUs } from "@/components/site/WhyUs";
import { Certificates } from "@/components/site/Certificates";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VITRO — Сучасні віконні та фасадні рішення | ПВХ, алюміній, двері" },
      {
        name: "description",
        content:
          "Преміум вікна, двері та фасадні системи в Україні. ПВХ та алюмінієві системи, розсувні конструкції. Виробництво, монтаж, гарантія 10 років.",
      },
      { property: "og:title", content: "VITRO — Сучасні віконні та фасадні рішення" },
      { property: "og:description", content: "ПВХ, алюмінієві системи, двері, фасади під ключ." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Gallery />
        <Calculator />
        <AIConsultant />
        <WhyUs />
        <Certificates />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
      <Toaster />
    </div>
  );
}

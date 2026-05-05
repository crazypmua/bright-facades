import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Offer } from "@/components/site/Offer";
import { Brands } from "@/components/site/Brands";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { Gallery } from "@/components/site/Gallery";
import { Calculator } from "@/components/site/Calculator";
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
      { title: "Elite Space — Металопластикові вікна за 4 дні | EKIPAZH, WDS, VEKA" },
      {
        name: "description",
        content:
          "Elite Space — партнер EKIPAZH, найбільшого виробника вікон в Україні. Металопластикові та алюмінієві вікна, двері, фасади. Виготовлення за 4 робочих дні.",
      },
      { property: "og:title", content: "Elite Space — Наповнений природним світлом" },
      { property: "og:description", content: "Металопластикові вікна EKIPAZH, WDS, VEKA. Виготовлення за 4 робочих дні." },
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
        <Offer />
        <Categories />
        <Brands />
        <About />
        <Calculator />
        <WhyUs />
        <Gallery />
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

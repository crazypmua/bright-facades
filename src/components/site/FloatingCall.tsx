import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+380441234567"
      aria-label="Подзвонити"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      <Phone className="h-7 w-7 relative" />
    </a>
  );
}

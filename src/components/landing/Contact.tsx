import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error al enviar");

      toast({
        title: "¡Gracias!",
        description: "Hemos recibido tu solicitud y te contactaremos pronto.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar tu solicitud. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
            Construyamos el sistema que tu negocio realmente necesita
          </h2>
          <p className="mt-4 text-muted-foreground text-center leading-relaxed">
            Cuéntanos sobre el desafío de tu negocio y te ayudaremos a diseñar la solución digital ideal.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" placeholder="Tu nombre" required maxLength={100} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required maxLength={255} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" name="company" placeholder="Nombre de tu empresa" maxLength={100} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Cuéntanos sobre tu proyecto</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe brevemente lo que necesitas..."
                required
                maxLength={1000}
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full gap-2 text-base" disabled={loading}>
              {loading ? "Enviando..." : "Enviar solicitud"} <Send size={16} />
            </Button>
          </form>

          <p className="mt-5 text-sm text-muted-foreground text-center">
            Te responderemos en menos de 24 horas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Shield, Clock, CheckCircle2 } from "lucide-react";
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
        title: "¡Solicitud recibida!",
        description: "Te contactaremos en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar. Intenta de nuevo o escríbenos a contacto@kodatech.dev.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: persuasion column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-accent">Empieza hoy</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight text-balance">
              Hablemos de cómo automatizar tu negocio
            </h2>
            <p className="mt-4 text-muted-foreground text-[1.0625rem] leading-relaxed">
              En una consulta de 30 minutos analizamos tu operación y te mostramos qué se puede automatizar primero.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-koda-cyan shrink-0 mt-0.5" />
                <p className="text-[0.9375rem] md:text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Diagnóstico gratuito</strong> — Identificamos tus mayores oportunidades de mejora
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-koda-cyan shrink-0 mt-0.5" />
                <p className="text-[0.9375rem] md:text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Sin compromiso</strong> — No hay contrato ni obligación. Solo una conversación
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-koda-cyan shrink-0 mt-0.5" />
                <p className="text-[0.9375rem] md:text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Respuesta en 24h</strong> — Te contactamos al día siguiente con una propuesta inicial
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="md:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-semibold">Nombre</Label>
                    <Input id="name" name="name" placeholder="Tu nombre" required maxLength={100} className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="tu@empresa.com" required maxLength={255} className="h-10" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm font-semibold">Empresa</Label>
                  <Input id="company" name="company" placeholder="Nombre de tu empresa" maxLength={100} className="h-10" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-semibold">¿Qué proceso quieres mejorar?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ejemplo: Gestiono pedidos por WhatsApp y necesito un sistema para organizarlos y darles seguimiento..."
                    required
                    maxLength={1000}
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 gap-2 text-[0.938rem] font-semibold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:translate-y-[-1px] transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Solicitar consulta gratuita"} <Send size={15} />
                </Button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> 24h respuesta
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield size={14} /> Sin compromiso
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

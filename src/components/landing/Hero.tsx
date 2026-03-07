import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-foreground"
        >
          Transformamos Problemas de Negocio en{" "}
          <span className="text-primary">Software Poderoso</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          En KodaTech construimos soluciones digitales a medida que automatizan operaciones y crean plataformas web y móviles que tu equipo y tus clientes realmente disfrutarán usar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button size="lg" className="px-8 gap-2 text-base" onClick={scrollToContact}>
            Agenda una Consulta Gratuita <ArrowRight size={16} />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 text-sm text-muted-foreground"
        >
          O escríbenos directamente a{" "}
          <a href="mailto:contacto@kodatech.dev" className="text-foreground hover:text-primary transition-colors underline underline-offset-2">
            contacto@kodatech.dev
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

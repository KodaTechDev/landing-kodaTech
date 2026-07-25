import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "24h", label: "Tiempo de respuesta", icon: Clock },
  { value: "100%", label: "Software a medida", icon: Sparkles },
  { value: "Directo", label: "Hablas con ingenieros", icon: Users },
];

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-bg">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-3xl md:blur-[120px] animate-pulse-glow transform-gpu" />
        <div className="hidden sm:block absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-koda-cyan/[0.06] blur-3xl md:blur-[100px] animate-pulse-glow transform-gpu" style={{ animationDelay: "2s" }} />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px] transform-gpu" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-28 sm:pt-32 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.08] text-accent text-xs font-semibold tracking-wide uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Desarrollo de software a medida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.08] text-white text-balance"
          >
            Tu operación manual se convierte en un{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-koda-cyan">
              sistema que trabaja por ti
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed font-light"
          >
            Eliminamos hojas de cálculo, WhatsApp y procesos manuales. Los reemplazamos con software que ahorra horas, reduce errores y te da control total de tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-8 h-12 gap-2 text-[0.938rem] font-semibold bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/25 hover:shadow-accent/35 hover:translate-y-[-1px] transition-all duration-200"
              onClick={scrollToContact}
            >
              Agenda tu consulta gratuita <ArrowRight size={16} />
            </Button>
            <a
              href="#solutions"
              className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors"
            >
              Conoce nuestros servicios
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4 py-3">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon size={14} className="text-accent" />
                  <span className="text-lg md:text-xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-xs md:text-sm text-white/40 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const Story = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-hero-bg overflow-hidden cv-auto">
      {/* Ambient effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-2xl md:blur-[100px] transform-gpu" />
        <div className="hidden sm:block absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-koda-cyan/[0.04] blur-2xl md:blur-[80px] transform-gpu" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Quiénes somos</span>
            <h2 className="mt-3 text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-white leading-tight text-balance">
              Ingenieros obsesionados con resolver problemas reales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 text-white/55 text-base md:text-[1.0625rem] leading-relaxed"
            >
              <p>
                En KodaTech la tecnología tiene un solo propósito:{" "}
                <strong className="text-white/90">hacer que tu negocio funcione mejor</strong>. Sin jerga, sin complejidad innecesaria.
              </p>
              <p>
                Cada proyecto empieza entendiendo tu operación a fondo. No llegamos con una solución genérica — construimos exactamente lo que necesitas.
              </p>
              <p>
                Desde Latinoamérica servimos a empresas que quieren dejar de operar con parches y empezar a escalar con sistemas serios.
              </p>
              <button
                onClick={scrollToContact}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-accent transition-colors group"
              >
                Conoce cómo podemos ayudarte
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <Quote size={28} className="text-accent/40 mb-4" />
                <blockquote className="text-white/80 text-base md:text-[1.0625rem] leading-relaxed font-medium">
                  "Necesitábamos digitalizar una operación que manejábamos 100% manual. KodaTech entendió nuestro flujo desde el primer día y construyó un sistema que hoy usamos todos los días. Nos ahorramos más de 15 horas semanales."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-koda-cyan flex items-center justify-center text-white font-bold text-sm">
                    C
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Director de Operaciones</p>
                    <p className="text-sm text-white/40">Empresa de comercio — Latinoamérica</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

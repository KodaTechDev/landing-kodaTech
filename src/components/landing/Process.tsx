import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos tu operación, identificamos cuellos de botella y oportunidades de automatización.",
    duration: "1 semana",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Definimos la arquitectura, priorizamos funcionalidades y creamos un roadmap con entregables claros.",
    duration: "1–2 semanas",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos en sprints de 2 semanas con demos. Ves avance real y ajustas prioridades.",
    duration: "4–12 semanas",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Desplegamos, capacitamos a tu equipo y seguimos optimizando mientras tu negocio crece.",
    duration: "Continuo",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-koda-cyan">Cómo trabajamos</span>
          <h2 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
            De tu problema a un sistema funcional, sin sorpresas
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: horizontal timeline */}
          <div className="hidden md:grid grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/40 via-primary/30 to-koda-cyan/40" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="relative text-center px-4"
              >
                <div className="w-10 h-10 rounded-full bg-card border-2 border-accent/50 flex items-center justify-center mx-auto relative z-10">
                  <span className="text-xs font-bold text-accent">{step.number}</span>
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground text-[0.9375rem] md:text-base leading-relaxed">{step.description}</p>
                <span className="inline-block mt-3 text-[0.8125rem] font-semibold text-koda-cyan bg-koda-cyan/10 px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical cards */}
          <div className="md:hidden space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-full border-2 border-accent/50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-accent">{step.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground text-base">{step.title}</h3>
                    <span className="text-[0.8125rem] font-semibold text-koda-cyan bg-koda-cyan/10 px-2 py-0.5 rounded-full">{step.duration}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground text-[0.9375rem] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

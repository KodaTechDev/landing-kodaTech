import { motion } from "framer-motion";
import { Fingerprint, GitBranch, MessageSquareText, Scaling, Eye, Target } from "lucide-react";

const points = [
  {
    icon: Fingerprint,
    title: "Hecho a tu medida",
    desc: "Cero plantillas. Cada sistema refleja exactamente cómo opera tu negocio.",
  },
  {
    icon: GitBranch,
    title: "Código que puedes escalar",
    desc: "Arquitectura limpia y documentada. Tu equipo técnico puede mantenerlo y evolucionar.",
  },
  {
    icon: MessageSquareText,
    title: "Sin intermediarios",
    desc: "Hablas directo con los ingenieros que construyen tu sistema. Decisiones rápidas, cero burocracia.",
  },
  {
    icon: Scaling,
    title: "Crece contigo",
    desc: "Diseñamos para escalar desde el día uno. Más usuarios, más datos, sin reconstruir.",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    desc: "Demos cada semana. Ves el avance real y puedes ajustar prioridades sobre la marcha.",
  },
  {
    icon: Target,
    title: "Resultados, no features",
    desc: "Medimos éxito por el impacto en tu operación, no por la cantidad de funcionalidades.",
  },
];

const ValueProp = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-accent">Por qué KodaTech</span>
            <h2 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
              No somos una fábrica de software. Somos tu equipo técnico.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="flex gap-4 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-koda-cyan/8 flex items-center justify-center shrink-0">
                  <point.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">{point.title}</h3>
                  <p className="text-muted-foreground text-[0.9375rem] md:text-base mt-2 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Soluciones personalizadas diseñadas específicamente para tu negocio",
  "Sin plantillas genéricas ni software estándar",
  "Arquitectura escalable construida para crecer",
  "Código limpio, mantenible y de alta calidad",
  "Colaboración directa con desarrolladores experimentados",
  "Tecnología que impulsa tus objetivos de negocio",
];

const ValueProp = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Por qué las empresas eligen KodaTech
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 p-4"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-primary" />
              </div>
              <p className="text-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

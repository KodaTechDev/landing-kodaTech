import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  "Tu equipo depende de hojas de cálculo para gestionar procesos críticos",
  "Las tareas manuales consumen horas de tiempo valioso",
  "Tus herramientas no se integran entre sí",
  "Tu negocio no cuenta con una plataforma digital adecuada",
  "Escalar las operaciones se siente imposible",
];

const Problem = () => {
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
            ¿Tu negocio está limitado por sistemas obsoletos?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <AlertTriangle size={18} className="text-accent mt-0.5 shrink-0" />
              <p className="text-foreground">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-muted-foreground text-lg"
        >
          Estos problemas son comunes — pero tienen solución con la tecnología adecuada.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;

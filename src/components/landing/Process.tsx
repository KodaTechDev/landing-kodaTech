import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Entendemos las operaciones de tu negocio e identificamos oportunidades de automatización.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description: "Diseñamos la mejor solución técnica para tus necesidades.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos software escalable y confiable.",
  },
  {
    number: "04",
    title: "Lanzamiento y Soporte",
    description: "Desplegamos tu sistema y acompañamos su evolución a medida que tu negocio crece.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Nuestro proceso de desarrollo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-border bg-card"
            >
              <span className="text-sm font-bold text-primary">{step.number}</span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

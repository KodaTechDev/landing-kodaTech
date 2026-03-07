import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business operations and identify opportunities for automation.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "We design the best technical solution for your needs.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build scalable and reliable software.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your system and support its evolution as your business grows.",
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
            Our development process
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

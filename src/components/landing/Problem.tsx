import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  "Your team relies on spreadsheets to manage critical processes",
  "Manual tasks consume hours of valuable time",
  "Your tools don't integrate with each other",
  "Your business lacks a proper digital platform",
  "Scaling operations feels impossible",
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
            Is your business limited by outdated systems?
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
          These problems are common — but they are solvable with the right technology.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;

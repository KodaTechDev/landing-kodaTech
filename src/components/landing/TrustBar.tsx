import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Code2, Rocket } from "lucide-react";

const signals = [
  { icon: ShieldCheck, text: "Sin contratos de permanencia" },
  { icon: Headphones, text: "Soporte continuo post-lanzamiento" },
  { icon: Code2, text: "Código 100% tuyo" },
  { icon: Rocket, text: "Primeros resultados en semanas" },
];

const TrustBar = () => {
  return (
    <section className="py-6 border-b border-border bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.text}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 text-slate-600"
            >
              <signal.icon size={17} className="text-koda-cyan shrink-0" />
              <span className="text-[0.9375rem] md:text-base font-medium whitespace-nowrap">{signal.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

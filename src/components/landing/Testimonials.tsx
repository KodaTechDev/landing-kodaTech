import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Kodatech transformed our entire operations. Their platform reduced our deployment time by 80% and our team couldn't be happier.",
    name: "Sarah Chen",
    role: "CTO at Nexgen",
    avatar: "SC",
  },
  {
    quote: "The level of support and technical expertise is unmatched. They understood our challenges and delivered beyond expectations.",
    name: "Marcus Johnson",
    role: "VP Engineering at Flowstate",
    avatar: "MJ",
  },
  {
    quote: "We evaluated 12 solutions before choosing Kodatech. Two years later, it remains the best technology decision we've made.",
    name: "Elena Rodriguez",
    role: "Founder at Luminary",
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wide text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Loved by teams worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Cloud, Code2, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized architecture that delivers sub-second response times at any scale.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with industry-leading security standards.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Gain deep insights with powerful dashboards and custom reporting tools.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Deploy anywhere with our cloud-agnostic infrastructure built for resilience.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Clean APIs, comprehensive docs, and SDKs in every major language.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for seamless collaboration across distributed teams.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wide text-primary">Features</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A comprehensive suite of tools designed to accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

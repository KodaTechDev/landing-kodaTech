import { motion } from "framer-motion";
import { Cog, Globe, Smartphone, Layers, Users } from "lucide-react";

const solutions = [
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Transformamos flujos de trabajo manuales en sistemas automatizados y eficientes.",
  },
  {
    icon: Globe,
    title: "Plataformas Web a Medida",
    description: "Construimos plataformas adaptadas a las operaciones reales de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Apps que permiten a tus clientes o equipo interactuar con tus servicios desde cualquier lugar.",
  },
  {
    icon: Layers,
    title: "Sistemas Digitales Empresariales",
    description: "Herramientas personalizadas diseñadas específicamente para los procesos de tu empresa.",
  },
  {
    icon: Users,
    title: "Portales de Clientes",
    description: "Plataformas donde tus clientes pueden interactuar con tu negocio en línea.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Software a medida construido alrededor de tu negocio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <s.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

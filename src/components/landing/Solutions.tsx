import { motion } from "framer-motion";
import { Cog, Globe, Smartphone, Layers, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cog,
    title: "Automatización de procesos",
    result: "Ahorra +20 horas semanales",
    description: "Reemplazamos tareas manuales repetitivas por flujos automáticos. Tu equipo deja de copiar datos entre sistemas y se enfoca en crecer el negocio.",
  },
  {
    icon: Globe,
    title: "Plataformas web a medida",
    result: "Control total de tu operación",
    description: "Sistemas web construidos alrededor de cómo tu negocio realmente funciona. Dashboards, reportes y gestión en un solo lugar.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones móviles",
    result: "Tu negocio en el bolsillo",
    description: "Apps para que tu equipo y clientes interactúen con tus servicios desde cualquier lugar, sin depender de WhatsApp.",
  },
  {
    icon: Layers,
    title: "Sistemas empresariales",
    result: "Todo conectado, datos en tiempo real",
    description: "Herramientas que unifican tus procesos internos: inventario, pedidos, facturación, reportes. Un sistema, cero silos.",
  },
  {
    icon: Users,
    title: "Portales de clientes",
    result: "Menos llamadas, más autonomía",
    description: "Tus clientes consultan, piden y dan seguimiento por su cuenta. Reduces la carga operativa y mejoras la experiencia.",
  },
];

const Solutions = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-koda-cyan">Nuestros servicios</span>
          <h2 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
            Software que resuelve problemas reales de tu negocio
          </h2>
          <p className="mt-4 text-muted-foreground text-[1.0625rem] md:text-lg leading-relaxed">
            No vendemos tecnología por venderla. Cada solución está diseñada para generar un impacto medible en tu operación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group relative p-6 rounded-2xl bg-card border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors shrink-0">
                  <s.icon className="text-primary" size={19} />
                </div>
                <span className="text-[0.8125rem] sm:text-sm font-semibold text-koda-cyan tracking-wide uppercase leading-snug">{s.result}</span>
              </div>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="h-12 px-8 gap-2 font-semibold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:translate-y-[-1px] transition-all duration-200"
            onClick={scrollToContact}
          >
            Quiero automatizar mi operación <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;

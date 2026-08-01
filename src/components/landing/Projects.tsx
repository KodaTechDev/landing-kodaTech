import { motion } from "framer-motion";
import { MessageSquare, Target, Lock } from "lucide-react";

const projects = [
  {
    icon: MessageSquare,
    name: "Katalify",
    tag: "KodaTech · Propio",
    description:
      "Plataforma de catálogos digitales para WhatsApp: convierte conversaciones en ventas con catálogos que se crean y comparten en minutos.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Turborepo"],
  },
  {
    icon: Target,
    name: "Meit",
    tag: "By AvilaTek",
    logo: "/logos/avilatek.png",
    description:
      "Plataforma de incentivos: recompensa a los usuarios por completar las métricas y objetivos que define la empresa, impulsando su participación y desempeño.",
    stack: ["Next.js", "Apollo GraphQL", "MongoDB", "Algolia"],
  },
  {
    icon: Lock,
    name: "Tek-Secrets",
    tag: "By AvilaTek",
    logo: "/logos/avilatek.png",
    description:
      "Plataforma para la gestión de secretos y credenciales: los centraliza, cifra y controla su acceso con rotación de llaves, elevando la seguridad de los equipos.",
    stack: ["FastAPI", "MongoDB", "Next.js 15", "Cifrado + rotación"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-koda-cyan">
            Nuestro trabajo
          </span>
          <h2 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
            Proyectos que hemos construido
          </h2>
          <p className="mt-4 text-muted-foreground text-[1.0625rem] md:text-lg leading-relaxed">
            Producto propio y trabajo de nuestro equipo en otras empresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group relative p-6 rounded-2xl bg-card border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors shrink-0">
                  <p.icon className="text-primary" size={19} />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-koda-cyan tracking-wide uppercase bg-koda-cyan/8 border border-koda-cyan/20 rounded-full px-3 py-1">
                  {p.logo && (
                    <img src={p.logo} alt="" className="h-3.5 w-auto rounded-sm" />
                  )}
                  {p.tag}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base">
                {p.description}
              </p>

              <div className="mt-5 pt-5 border-t border-slate-200/80 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[0.75rem] font-semibold text-foreground/70 bg-slate-100 rounded-md px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

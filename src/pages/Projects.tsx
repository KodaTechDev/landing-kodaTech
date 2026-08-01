import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { OWN_PROJECTS, PARTNER_PROJECTS, type Project } from "@/data/projects";

const accentStyles: Record<Project["accent"], { chip: string; icon: string }> = {
  orange: {
    chip: "text-accent bg-accent/8 border-accent/20",
    icon: "text-accent bg-accent/8 group-hover:bg-accent/12",
  },
  cyan: {
    chip: "text-koda-cyan bg-koda-cyan/8 border-koda-cyan/20",
    icon: "text-koda-cyan bg-koda-cyan/8 group-hover:bg-koda-cyan/12",
  },
};

const ProjectCard = ({ p, i }: { p: Project; i: number }) => {
  const styles = accentStyles[p.accent];
  const Wrapper = p.url ? motion.a : motion.div;
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * i, duration: 0.5 }}
      className="group relative p-6 rounded-2xl bg-card border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${styles.icon}`}>
          <p.icon size={19} />
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide uppercase rounded-full px-3 py-1 border ${styles.chip}`}>
          {p.logo && <img src={p.logo} alt="" className="h-3.5 w-auto rounded-sm" />}
          {p.tag}
        </span>
      </div>

      <h3 className="text-[1.25rem] font-bold text-foreground mb-2 flex items-center gap-1.5">
        {p.name}
        {p.url && (
          <ArrowUpRight
            size={16}
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        )}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base">{p.body}</p>

      <div className="mt-5 pt-5 border-t border-slate-200/80 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="text-[0.75rem] font-semibold text-foreground/70 bg-slate-100 rounded-md px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-koda-cyan">
              Nuestro trabajo
            </span>
            <h1 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
              Todos los proyectos
            </h1>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-foreground mb-6">Proyectos propios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {OWN_PROJECTS.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} />
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Proyectos en los que hemos participado</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PARTNER_PROJECTS.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

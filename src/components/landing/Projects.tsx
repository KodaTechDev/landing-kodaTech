import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_PROJECTS, type Project } from "@/data/projects";

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

const ProjectCard = ({ p }: { p: Project }) => {
  const styles = accentStyles[p.accent];
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative shrink-0 w-[19rem] sm:w-[21rem] p-6 rounded-2xl bg-card border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col"
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

const Projects = () => {
  const track = [...ALL_PROJECTS, ...ALL_PROJECTS];

  return (
    <section id="projects" className="py-20 md:py-28 bg-section-alt overflow-hidden">
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
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-section-alt to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-section-alt to-transparent z-10" />

        <div className="group/track overflow-hidden">
          <div className="flex gap-5 w-max animate-[project-scroll_38s_linear_infinite] group-hover/track:[animation-play-state:paused]">
            {track.map((p, i) => (
              <ProjectCard key={`${p.name}-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 shadow-md shadow-accent/25 transition-colors"
          >
            Ver más proyectos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

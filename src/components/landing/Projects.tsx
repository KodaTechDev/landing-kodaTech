import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/landing/ProjectCard";

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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ALL_PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

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

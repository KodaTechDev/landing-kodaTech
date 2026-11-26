import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ProjectCard } from "@/components/landing/ProjectCard";
import { OWN_PROJECTS, PARTNER_PROJECTS } from "@/data/projects";

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
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {OWN_PROJECTS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <ProjectCard p={p} />
                </motion.div>
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

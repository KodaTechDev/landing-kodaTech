import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { TEAM } from "@/data/team";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const Story = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-hero-bg overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-2xl md:blur-[100px] transform-gpu" />
        <div className="hidden sm:block absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-koda-cyan/[0.04] blur-2xl md:blur-[80px] transform-gpu" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Quiénes somos</span>
            <h2 className="mt-3 text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-white leading-tight text-balance">
              Ingenieros obsesionados con resolver problemas reales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 text-white/55 text-base md:text-[1.0625rem] leading-relaxed"
            >
              <p>
                En KodaTech la tecnología tiene un solo propósito:{" "}
                <strong className="text-white/90">hacer que tu negocio funcione mejor</strong>. Sin jerga, sin complejidad innecesaria.
              </p>
              <p>
                Cada proyecto empieza entendiendo tu operación a fondo. No llegamos con una solución genérica — construimos exactamente lo que necesitas.
              </p>
              <p>
                Desde Caracas, Venezuela, servimos a empresas de Latinoamérica y España que quieren dejar de operar con parches y empezar a escalar con sistemas serios.
              </p>
              <button
                onClick={scrollToContact}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-accent transition-colors group"
              >
                Conoce cómo podemos ayudarte
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <ul className="space-y-4">
                {TEAM.map((member, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 sm:gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]"
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`Foto de ${member.name}`}
                        width={72}
                        height={72}
                        loading="lazy"
                        decoding="async"
                        className="w-[4.25rem] h-[4.25rem] sm:w-[4.5rem] sm:h-[4.5rem] rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="w-[4.25rem] h-[4.25rem] sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-gradient-to-br from-accent to-koda-cyan flex items-center justify-center text-white font-bold text-xl shrink-0"
                      >
                        {initials(member.name)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-white/90 truncate">{member.name}</p>
                      <p className="text-sm text-white/60">{member.role}</p>
                      {member.profession && <p className="text-sm text-white/40">{member.profession}</p>}
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name}`}
                        className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-sm font-medium text-white/60 hover:text-white hover:border-white/25 transition-colors"
                      >
                        <Linkedin size={16} />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

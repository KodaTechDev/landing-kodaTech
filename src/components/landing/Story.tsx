import { motion } from "framer-motion";

const Story = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Construido por ingenieros que creen que el software debe resolver problemas reales
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              En KodaTech creemos que la tecnología debe simplificar los negocios, no complicarlos.
            </p>
            <p>
              Combinamos bases técnicas sólidas con una mentalidad práctica enfocada en entregar resultados reales.
            </p>
            <p>
              Desde Caracas al mundo, ayudamos a empresas a escalar con código limpio, soluciones prácticas y sistemas de software confiables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;

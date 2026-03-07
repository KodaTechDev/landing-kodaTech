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
            Built by engineers who believe software should solve real problems
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              At KodaTech we believe technology should simplify business, not complicate it.
            </p>
            <p>
              We combine strong technical foundations with a practical mindset focused on delivering real results.
            </p>
            <p>
              From Caracas to the world, we help companies scale with clean code, practical solutions and reliable software systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;

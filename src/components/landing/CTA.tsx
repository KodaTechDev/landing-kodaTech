import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Let's build the system your business actually needs
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tell us about your business challenge and we'll help you design the right digital solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 gap-2 text-base">
              Schedule a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} />
            <a href="mailto:contacto@kodatech.dev" className="hover:text-foreground transition-colors">
              contacto@kodatech.dev
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

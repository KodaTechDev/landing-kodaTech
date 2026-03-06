import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does implementation typically take?",
    answer: "Most projects go live within 4-8 weeks, depending on complexity. Our team works closely with yours to ensure a smooth transition with minimal disruption.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Absolutely. We support 100+ integrations out of the box, including Salesforce, Slack, Jira, and more. Custom integrations are available on Professional and Enterprise plans.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Professional plans include priority support with 4-hour response times. Enterprise plans include 24/7 phone support and a dedicated success manager.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use AES-256 encryption at rest and TLS 1.3 in transit. We conduct annual third-party penetration testing.",
  },
  {
    question: "Can I cancel or change plans anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle. No long-term contracts required.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wide text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

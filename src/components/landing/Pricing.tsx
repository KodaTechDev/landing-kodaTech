import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams getting started.",
    features: ["Up to 5 users", "Core platform access", "Email support", "Basic analytics", "API access"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/month",
    description: "For growing companies that need more power.",
    features: ["Up to 25 users", "Advanced integrations", "Priority support", "Custom dashboards", "Dedicated CSM", "SSO & SAML"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: ["Unlimited users", "Custom development", "24/7 phone support", "On-premise option", "SLA guarantee", "Dedicated team"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wide text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Plans that grow with you
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transparent pricing with no hidden fees. Start small and scale as needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? "bg-foreground text-background border-foreground shadow-2xl scale-[1.02]"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "opacity-60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.highlighted ? "opacity-70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <Button
                className="w-full mt-6"
                variant={plan.highlighted ? "secondary" : "default"}
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.highlighted ? "text-primary" : "text-primary"} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

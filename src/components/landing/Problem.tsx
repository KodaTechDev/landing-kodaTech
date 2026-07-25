import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  AlertTriangle,
  Unplug,
  MessageCircleWarning,
  TrendingDown,
  SearchX,
} from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Excels interminables",
    text: "Tu equipo pasa horas llenando hojas de cálculo que se pierden, se duplican o tienen errores.",
  },
  {
    icon: AlertTriangle,
    title: "Errores que cuestan dinero",
    text: "Procesos manuales que generan equivocaciones repetidas en pedidos, inventario o facturación.",
  },
  {
    icon: Unplug,
    title: "Herramientas desconectadas",
    text: "Cada área usa algo diferente y nadie tiene la foto completa de lo que pasa en el negocio.",
  },
  {
    icon: MessageCircleWarning,
    title: "Todo por WhatsApp",
    text: "Pedidos, solicitudes y seguimiento mezclados en chats que se pierden entre mensajes.",
  },
  {
    icon: TrendingDown,
    title: "No puedes escalar",
    text: "Crecer significa contratar más gente para hacer lo mismo, en vez de automatizar.",
  },
  {
    icon: SearchX,
    title: "Ventas sin seguimiento",
    text: "Oportunidades que se pierden porque no hay un sistema que las rastree y te alerte.",
  },
];

const Problem = () => {
  return (
    <section className="py-20 md:py-28 cv-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="text-[0.8125rem] font-semibold tracking-widest uppercase text-accent">El problema</span>
          <h2 className="mt-3 text-3xl md:text-[2.625rem] font-extrabold tracking-tight text-foreground leading-tight text-balance">
            ¿Reconoces alguno de estos frenos en tu operación?
          </h2>
          <p className="mt-4 text-muted-foreground text-[1.0625rem] md:text-lg leading-relaxed">
            Si tu equipo depende de Excel, WhatsApp y procesos manuales, estás perdiendo tiempo, dinero y oportunidades todos los días.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group p-5 rounded-xl border border-border bg-card hover:border-accent/25 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center mb-3.5 group-hover:bg-accent/12 transition-colors">
                <point.icon size={17} className="text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-[0.9375rem] md:text-base leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

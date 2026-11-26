import { MessageSquare, Target, Lock, type LucideIcon } from "lucide-react";

export interface Project {
  icon: LucideIcon;
  name: string;
  tag: string;
  url?: string;
  logo?: string;
  image?: ProjectImage;
  accent: "orange" | "cyan";
  body: string;
  stack: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Etiqueta de la tarjeta "Sistema de auditoría interna". Cámbiala aquí. */
export const AUDIT_PROJECT_TAG = "Firma de consultoría";

export const OWN_PROJECTS: Project[] = [
  {
    icon: MessageSquare,
    name: "Katalify",
    tag: "KodaTech · Propio",
    url: "https://katalify.app",
    image: {
      src: "/images/proyectos/katalify-catalogo-digital-whatsapp.webp",
      alt: "Catálogo digital de Katalify para vender por WhatsApp",
      width: 1488,
      height: 930,
    },
    accent: "orange",
    body: "Plataforma de catálogos digitales para WhatsApp: convierte conversaciones en ventas con catálogos que se crean y comparten en minutos.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Turborepo"],
  },
  {
    icon: Target,
    name: "Sistema de auditoría interna",
    tag: AUDIT_PROJECT_TAG,
    image: {
      src: "/images/proyectos/sistema-auditoria-interna-riesgos.webp",
      alt: "Mapa de calor de riesgos del sistema de auditoría interna",
      width: 1551,
      height: 870,
    },
    accent: "cyan",
    body: "Desarrollado para una firma de consultoría: gestión de auditorías basadas en riesgos, alineado con ISO 31000 e ISO 19011, con matrices de riesgo, mapas de calor y dashboard de indicadores.",
    stack: ["Next.js", "PostgreSQL", "Dashboard", "ISO 31000/19011"],
  },
];

export const PARTNER_PROJECTS: Project[] = [
  {
    icon: Target,
    name: "Meit",
    tag: "By AvilaTek",
    logo: "/logos/avilatek.png",
    accent: "cyan",
    body: "Plataforma de incentivos: recompensa a los usuarios por completar las métricas y objetivos que define la empresa, impulsando su participación y desempeño.",
    stack: ["Next.js", "Apollo GraphQL", "MongoDB", "Algolia"],
  },
  {
    icon: Lock,
    name: "Tek-Secrets",
    tag: "By AvilaTek",
    logo: "/logos/avilatek.png",
    accent: "cyan",
    body: "Plataforma para la gestión de secretos y credenciales: los centraliza, cifra y controla su acceso con rotación de llaves, elevando la seguridad de los equipos.",
    stack: ["FastAPI", "MongoDB", "Next.js 15", "Cifrado + rotación"],
  },
];

export const ALL_PROJECTS: Project[] = [...OWN_PROJECTS];
// export const ALL_PROJECTS: Project[] = [...OWN_PROJECTS, ...PARTNER_PROJECTS];

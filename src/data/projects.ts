import { MessageSquare, Target, Lock, type LucideIcon } from "lucide-react";

export interface Project {
  icon: LucideIcon;
  name: string;
  tag: string;
  url?: string;
  logo?: string;
  accent: "orange" | "cyan";
  body: string;
  stack: string[];
}

export const OWN_PROJECTS: Project[] = [
  {
    icon: MessageSquare,
    name: "Katalify",
    tag: "KodaTech · Propio",
    url: "https://www.katalify.app",
    accent: "orange",
    body: "Plataforma de catálogos digitales para WhatsApp: convierte conversaciones en ventas con catálogos que se crean y comparten en minutos.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Turborepo"],
  },
  {
    icon: MessageSquare,
    name: "Club Vehículos",
    tag: "KodaTech · Propio",
    url: "https://alpha.clubvehiculos.com/",
    accent: "orange",
    body: "Marketplace automotriz dominicano: talleres y tiendas publican ofertas que los usuarios compran en línea y redimen con cupón QR. Gestiona pagos (CardNet y PayPal) y liquidación a comercios.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Turborepo"],
  },
  {
    icon: Target,
    name: "Auditoría Interna",
    tag: "KodaTech · Propio",
    url: "https://github.com/asdruprojects/Frontend-internal-audit-system",
    logo: "/logos/jdg.png",
    accent: "cyan",
    body: "Gestión de auditorías internas basadas en riesgos, alineado con ISO 31000 e ISO 19011: procesos, riesgos y controles con matrices, mapas de calor y dashboard de indicadores.",
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

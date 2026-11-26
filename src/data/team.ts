export interface TeamMember {
  name: string;
  role: string;
  /** Profesión o título, se muestra debajo del rol. */
  profession?: string;
  /** Ruta pública de la foto, p. ej. "/images/equipo/nombre.webp". Vacío = se muestran las iniciales. */
  photo?: string;
  /** URL completa del perfil. Vacío = no se muestra el enlace. */
  linkedin?: string;
}

/**
 * Equipo que aparece en "Quiénes somos". Edita aquí nombres, roles, fotos y enlaces.
 * Las fotos van en public/images/equipo/.
 * TODO: faltan los enlaces de LinkedIn.
 */
export const TEAM: TeamMember[] = [
  { name: "Asdrúbal Asencio", role: "CEO y cofundador", profession: "Ingeniero en informática", photo: "/images/equipo/asdrubal-asencio.webp", linkedin: "" },
  { name: "Ángel Hernández", role: "CPO y cofundador", profession: "Ingeniero en informática", photo: "/images/equipo/angel-hernandez.webp", linkedin: "" },
  { name: "Andrés Pérez", role: "CTO y cofundador", profession: "Ingeniero en informática", photo: "/images/equipo/andres-perez.webp", linkedin: "" },
];

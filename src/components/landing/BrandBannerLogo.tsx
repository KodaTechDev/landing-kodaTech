import { cn } from "@/lib/utils";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * BANNER / WORDMARK — edita aquí la ruta manualmente
 *
 * 1) Pon tu archivo en la carpeta:  landing-kodaTech/public/
 * 2) Cambia la constante de abajo (ej. "/kodatech-banner.png" → "/mi-banner.png")
 *
 * Favicon (pestaña del navegador): edita en  index.html  →  <link rel="icon" href="..." />
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
export const KODATECH_BANNER_SRC = "/kodatech-banner.png";

type Props = {
  className?: string;
  heightClass?: string;
  chip?: "md" | "sm";
  /**
   * true = recuadro oscuro detrás del PNG (útil si el PNG trae texto blanco sobre negro).
   * false = solo la imagen (usa cuando el PNG tenga fondo transparente real en el archivo).
   */
  useDarkChip?: boolean;
};

export function BrandBannerLogo({
  className,
  heightClass = "h-8 sm:h-10",
  chip = "md",
  useDarkChip = false,
}: Props) {
  const pad = chip === "sm" ? "px-2 py-1" : "px-2.5 py-1";

  const img = (
    <img
      src={KODATECH_BANNER_SRC}
      alt="KodaTech"
      width={240}
      height={44}
      decoding="async"
      className={cn(
        "w-auto max-w-[min(240px,62vw)] object-contain object-left",
        heightClass
      )}
    />
  );

  if (!useDarkChip) {
    return (
      <span className={cn("inline-flex items-center pl-1.5 sm:pl-2.5", className)}>{img}</span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        "bg-gradient-to-br from-[#0a1220] via-[#0f1a2e] to-[#121c32]",
        "ring-1 ring-white/[0.12] shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]",
        pad,
        className
      )}
    >
      {img}
    </span>
  );
}

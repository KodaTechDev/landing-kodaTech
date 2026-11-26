import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const accentStyles: Record<Project["accent"], { chip: string; icon: string }> = {
  orange: {
    chip: "text-accent bg-accent/8 border-accent/20",
    icon: "text-accent bg-accent/8 group-hover:bg-accent/12",
  },
  cyan: {
    chip: "text-koda-cyan bg-koda-cyan/8 border-koda-cyan/20",
    icon: "text-koda-cyan bg-koda-cyan/8 group-hover:bg-koda-cyan/12",
  },
};

export const ProjectCard = ({ p, className }: { p: Project; className?: string }) => {
  const styles = accentStyles[p.accent];
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative h-full p-6 sm:p-7 rounded-2xl bg-card border border-slate-200/90 flex flex-col",
        p.url && "hover:border-slate-300 hover:shadow-md transition-all duration-300",
        className,
      )}
    >
      {p.image && (
        // Caja de proporción fija: misma altura en todas las tarjetas; la imagen entra completa (object-contain).
        <div className="mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-white">
          <img
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${styles.icon}`}>
          <p.icon size={19} />
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide uppercase rounded-full px-3 py-1 border ${styles.chip}`}>
          {p.logo && <img src={p.logo} alt="" className="h-3.5 w-auto rounded-sm" />}
          {p.tag}
        </span>
      </div>

      <h3 className="text-[1.375rem] font-bold text-foreground mb-2 flex items-center gap-1.5">
        {p.name}
        {p.url && (
          <ArrowUpRight
            size={17}
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        )}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base">{p.body}</p>

      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="text-[0.75rem] font-semibold text-foreground/70 bg-slate-100 rounded-md px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

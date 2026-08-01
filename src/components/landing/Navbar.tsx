import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BrandBannerLogo } from "@/components/landing/BrandBannerLogo";

const navLinks = [
  { label: "Servicios", href: "#solutions", id: "solutions" as const },
  { label: "Proceso", href: "#process", id: "process" as const },
  { label: "Nosotros", href: "#about", id: "about" as const },
  { label: "Proyectos", href: "#projects", id: "projects" as const },
];

/**
 * Hero / Nosotros detrás del nav → barra opaca (sin cristal).
 * Un poco de margen arriba del borde de #about evita un frame “entre secciones”.
 */
function isOverDarkPageBehindNav(sampleY = 52): boolean {
  const hero = document.getElementById("hero");
  if (hero) {
    const r = hero.getBoundingClientRect();
    if (r.top <= sampleY && r.bottom >= sampleY) return true;
  }
  const about = document.getElementById("about");
  if (about) {
    const r = about.getBoundingClientRect();
    const margin = 8;
    if (r.top <= sampleY + margin && r.bottom >= sampleY) return true;
  }
  return false;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [solidLight, setSolidLight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const updateActiveFromScroll = useCallback(() => {
    const y = window.scrollY;
    const offset = Math.min(window.innerHeight * 0.22, 160);
    let current: string | null = null;
    for (const { id } of navLinks) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (y + offset >= top) current = id;
    }
    setActiveSection(current);
  }, []);

  const syncChrome = useCallback(() => {
    setScrolled(window.scrollY > 24);
    setSolidLight(isOverDarkPageBehindNav());
    updateActiveFromScroll();
  }, [updateActiveFromScroll]);

  useEffect(() => {
    syncChrome();
    window.addEventListener("scroll", syncChrome, { passive: true });
    window.addEventListener("resize", syncChrome, { passive: true });
    return () => {
      window.removeEventListener("scroll", syncChrome);
      window.removeEventListener("resize", syncChrome);
    };
  }, [syncChrome]);

  const scrollToContact = () => {
    setMobileOpen(false);
    if (!isHome) {
      navigate("/#contact");
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  /** Scroll fiable en móvil (evita scrollIntoView roto en algunos WebKit + layout tras cerrar el menú). */
  const scrollPageToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const navReserve = Math.min(100, Math.max(72, Math.round(window.innerHeight * 0.08)));
    const y = el.getBoundingClientRect().top + window.scrollY - navReserve;
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
  }, []);

  /** Ítems del menú móvil como <button>: en táctil, <a href="#…"> + preventDefault a veces no dispara bien el handler. */
  const goToSectionMobile = useCallback(
    (sectionId: string) => {
      setMobileOpen(false);
      if (!isHome) {
        navigate(`/#${sectionId}`);
        return;
      }
      window.setTimeout(() => scrollPageToSection(sectionId), 120);
    },
    [isHome, navigate, scrollPageToSection],
  );

  /**
   * solidLight = sobre hero / nosotros: degradado gris OPACO (sin alpha en el relleno).
   * else = cristal sobre secciones claras.
   *
   * Importante: NO usar transition-all — animar background deja el nav semitransparente
   * un instante y se ve el azul oscuro de la página (flash).
   */
  const navShell = solidLight
    ? "border-slate-300/90 bg-gradient-to-br from-[#f3f4f6] via-[#eceef2] to-[#e2e5ea] ring-1 ring-slate-200/90 shadow-[0_10px_36px_rgb(15_23_42/0.10),inset_0_1px_0_rgb(255_255_255/1)] backdrop-blur-none"
    : scrolled
      ? "border-slate-300/60 bg-gradient-to-br from-white/[0.62] via-slate-100/[0.48] to-slate-200/[0.38] ring-1 ring-white/40 shadow-[0_8px_32px_rgb(15_23_42/0.08),inset_0_1px_0_rgb(255_255_255/0.65)]"
      : "border-slate-300/50 bg-gradient-to-br from-white/[0.48] via-slate-100/[0.32] to-slate-200/[0.26] ring-1 ring-white/35 shadow-[0_8px_32px_rgb(15_23_42/0.06),inset_0_1px_0_rgb(255_255_255/0.55)]";

  const linkStyles = (active: boolean) =>
    active
      ? "text-slate-900 bg-white/55 ring-1 ring-slate-200/60"
      : "text-slate-700 hover:text-slate-950 hover:bg-white/35";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 sm:px-6 pt-2 sm:pt-3 pointer-events-auto">
        <nav
          className={`mx-auto max-w-5xl rounded-xl md:rounded-full transition-[border-color,box-shadow,ring-color] duration-200 ease-out ${
            solidLight ? "" : "backdrop-blur-2xl backdrop-saturate-150"
          } ${navShell}`}
        >
          <div className="flex items-center justify-between min-h-[3rem] sm:min-h-[3.5rem] py-1 px-3 sm:px-5">
            {isHome ? (
              <a href="#" className="flex items-center shrink-0 min-w-0 ml-0.5 sm:ml-1">
                <BrandBannerLogo chip="md" />
              </a>
            ) : (
              <Link to="/" className="flex items-center shrink-0 min-w-0 ml-0.5 sm:ml-1">
                <BrandBannerLogo chip="md" />
              </Link>
            )}

            <div className="hidden md:flex items-center gap-0.5 translate-y-1 sm:translate-y-1.5">
              {navLinks.map((link) => {
                const active = isHome && activeSection === link.id;
                const linkClass = `flex flex-col items-center px-3 py-1.5 rounded-xl transition-colors min-w-[5.5rem] ${linkStyles(active)}`;
                const content = (
                  <>
                    <span className="text-[0.9375rem] font-medium leading-tight">{link.label}</span>
                    <span
                      className={`mt-1.5 h-[3px] w-8 rounded-full bg-accent transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </>
                );
                return isHome ? (
                  <a key={link.id} href={link.href} className={linkClass}>
                    {content}
                  </a>
                ) : (
                  <Link key={link.id} to={`/${link.href}`} className={linkClass}>
                    {content}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center">
              <Button
                size="sm"
                className="h-9 sm:h-10 rounded-full px-4 sm:px-5 text-sm bg-accent hover:bg-accent/90 text-white font-semibold shadow-md shadow-accent/25"
                onClick={scrollToContact}
              >
                Agendar consulta gratis
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden text-slate-800 p-1.5 -mr-1.5"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-t border-slate-200/70 bg-white/90 backdrop-blur-xl"
              >
                <div className="px-3 pb-3 flex flex-col gap-0.5 pt-1">
                  {navLinks.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        className={`w-full text-left touch-manipulation appearance-none bg-transparent text-[0.9375rem] font-medium py-2.5 px-2 rounded-lg flex flex-col gap-1 border-0 border-l-[3px] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white/90 ${
                          active
                            ? "text-slate-900 bg-white/80 border-accent"
                            : "text-slate-700 border-transparent hover:bg-white/50"
                        }`}
                        aria-current={active ? "true" : undefined}
                        onClick={() => goToSectionMobile(link.id)}
                      >
                        {link.label}
                        <span
                          className={`h-[2px] w-8 rounded-full bg-accent ml-0.5 ${active ? "opacity-100" : "opacity-0"}`}
                        />
                      </button>
                    );
                  })}
                  <Button
                    size="sm"
                    className="h-10 w-full rounded-full bg-accent hover:bg-accent/90 text-white font-semibold text-sm mt-1"
                    onClick={scrollToContact}
                  >
                    Agendar consulta gratis
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

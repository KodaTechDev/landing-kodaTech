import { BrandBannerLogo } from "@/components/landing/BrandBannerLogo";
import { footerSurface } from "@/components/landing/brandSurfaces";

const Footer = () => {
  return (
    <footer className={footerSurface}>
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center pl-1">
          <BrandBannerLogo chip="sm" className="rounded-lg" heightClass="h-8 sm:h-9" />
        </a>
        <p className="text-base text-slate-700 text-center sm:text-left max-w-md">
          &copy; {new Date().getFullYear()} KodaTech. Todos los derechos reservados.
        </p>
        <a
          href="mailto:contacto@kodatech.dev"
          className="text-base font-medium text-slate-700 hover:text-slate-950 transition-colors"
        >
          contacto@kodatech.dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;

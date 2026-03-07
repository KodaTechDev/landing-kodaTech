const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-foreground">
          Koda<span className="text-primary">Tech</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} KodaTech. All rights reserved.
        </p>
        <a
          href="mailto:contacto@kodatech.dev"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          contacto@kodatech.dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;

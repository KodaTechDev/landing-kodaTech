import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-accent">Error 404</p>
        <h1 className="mb-6 text-4xl font-bold">Página no encontrada</h1>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

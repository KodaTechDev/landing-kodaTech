import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import Problem from "@/components/landing/Problem";
import Solutions from "@/components/landing/Solutions";
import ValueProp from "@/components/landing/ValueProp";
import Process from "@/components/landing/Process";
import Story from "@/components/landing/Story";
import Projects from "@/components/landing/Projects";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Solutions />
      <ValueProp />
      <Process />
      <Story />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

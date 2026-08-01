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

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solutions from "@/components/landing/Solutions";
import ValueProp from "@/components/landing/ValueProp";
import Process from "@/components/landing/Process";
import Story from "@/components/landing/Story";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solutions />
      <ValueProp />
      <Process />
      <Story />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

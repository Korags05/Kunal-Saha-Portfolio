import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Leadership />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Kunal Saha. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Designed with ❤️ and a sprinkle of AI creativity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

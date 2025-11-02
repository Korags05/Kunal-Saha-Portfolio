import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Name badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card-glass backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
            Building scalable apps
          </span>
          <br />
          <span className="text-foreground">with precision and purpose.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Android & Backend Developer specializing in{" "}
          <span className="text-primary font-semibold">Jetpack Compose</span> and{" "}
          <span className="text-secondary font-semibold">Spring Boot</span>
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm <span className="text-foreground font-semibold">Kunal Saha</span> — a developer passionate about building performant, 
          user-focused systems and leading impactful tech projects. Currently pursuing my B.Tech in Computer Science at{" "}
          <span className="text-foreground font-semibold">KIIT University</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FileText className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/Korags05', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import kunalImage from "@/assets/kunal-original.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-1 md:-ml-8">
            <div className="relative group animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange via-neon-pink to-neon-lime-green rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-300 animate-pulse-glow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <img 
                  src={kunalImage} 
                  alt="Kunal Saha" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    mixBlendMode: 'normal',
                    filter: 'brightness(1.1) contrast(1.1)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 animate-fade-in-up order-2 md:order-2 text-center md:text-left">
            {/* Name badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card-glass backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Name with typing animation */}
            <div className="space-y-4">
              <div className="min-h-[120px] sm:min-h-[100px] md:min-h-[80px]">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  I am{" "}
                </h1>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-orange via-neon-pink to-neon-lime-green bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      'Kunal',
                      2000,
                      'a Developer',
                      2000,
                      'an Android Expert',
                      2000,
                      'a Backend Engineer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                a developer passionate about building performant, user-focused systems and leading impactful tech projects. 
                Currently pursuing B.Tech in Computer Science at{" "}
                <span className="text-neon-sky-blue font-semibold">KIIT University</span>.
              </p>
            </div>

            {/* Specialization */}
            <p className="text-base md:text-lg text-muted-foreground">
              Specializing in{" "}
              <span className="text-neon-pink font-semibold">Jetpack Compose</span> and{" "}
              <span className="text-neon-lime-green font-semibold">Spring Boot</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
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
          </div>
        </div>

          {/* Scroll indicator */}
        <div className="pt-12 text-center animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center hover:border-primary transition-colors">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

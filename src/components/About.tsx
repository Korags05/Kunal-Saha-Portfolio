import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Code2, Boxes } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: factsRef, isVisible: factsVisible } = useScrollAnimation();
  const facts = [
    {
      icon: MapPin,
      label: "Location",
      value: "Guwahati, Assam",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech CSE, KIIT University (2023–2027)",
    },
    {
      icon: Code2,
      label: "Languages",
      value: "Kotlin, Java, Python, C/C++",
    },
    {
      icon: Boxes,
      label: "Tech Stack",
      value: "Jetpack Compose, Spring Boot, Firebase, Docker",
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`space-y-4 mb-12 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <div
            ref={bioRef}
            className={`scroll-slide-left ${bioVisible ? 'visible' : ''}`}
          >
            <Card className="p-8 bg-card-glass backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift hover-glow">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design seamless experiences across Android and backend — from{" "}
              <span className="text-primary font-semibold">Jetpack Compose UIs</span> to secure{" "}
              <span className="text-secondary font-semibold">Spring Boot APIs</span>. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I've led developer teams, architected large-scale platforms, and built AI-driven healthcare apps. 
              My code reflects <span className="text-foreground font-semibold">clarity, performance, and purpose</span>.
            </p>
          </Card>
          </div>

          {/* Quick Facts */}
          <div 
            ref={factsRef}
            className={`space-y-4 scroll-slide-right ${factsVisible ? 'visible' : ''}`}
          >
            {facts.map((fact, index) => (
              <Card
                key={index}
                className="p-6 bg-card-glass backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift hover-glow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <fact.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                    <p className="text-foreground font-medium">{fact.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

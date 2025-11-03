import { Card } from "@/components/ui/card";
import { Users, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Leadership = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const roles = [
    {
      icon: Users,
      title: "App Team Lead",
      organization: "IoT Lab KIIT",
      period: "Aug 2024 – Present",
      achievements: [
        "Lead 14-member Android team; delivered 6 production-ready apps",
        "Standardized MVVM practices reducing deployment time by 25%",
        "Mentored 5+ student projects on clean architecture and code scalability",
      ],
    },
    {
      icon: Code,
      title: "Android Developer",
      organization: "GDG KIIT",
      period: "Mar 2024 – Present",
      achievements: [
        "Mentored 15+ developers in Jetpack Compose and Clean Architecture",
        "Co-organized mobile dev workshops for 100+ students",
      ],
    },
  ];

  return (
    <section id="leadership" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`space-y-4 mb-12 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Leadership & <span className="text-secondary">Involvement</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 scroll-scale-in ${cardsVisible ? 'visible' : ''}`}
        >
          {roles.map((role, index) => (
            <Card
              key={index}
              className="p-6 bg-card-glass backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover-lift hover-glow animate-pulse-glow"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <role.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                  <p className="text-secondary font-medium">{role.organization}</p>
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {role.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

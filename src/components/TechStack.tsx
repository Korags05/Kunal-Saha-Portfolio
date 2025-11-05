import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code2, Smartphone, Server, Database, Wrench, Coffee, Box, Lock, Container, Github, Figma, Flame } from "lucide-react";

const TechStack = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const techCategories = [
    {
      title: "Languages",
      borderColor: "border-neon-orange/50",
      textColor: "text-neon-orange",
      bgGradient: "from-neon-orange/20 to-neon-orange/5",
      techs: [
        { name: "Kotlin", icon: Code2 },
        { name: "Java", icon: Coffee },
        { name: "Python", icon: Code2 },
        { name: "C/C++", icon: Code2 },
      ],
    },
    {
      title: "Android",
      borderColor: "border-neon-pink/50",
      textColor: "text-neon-pink",
      bgGradient: "from-neon-pink/20 to-neon-pink/5",
      techs: [
        { name: "Jetpack Compose", icon: Smartphone },
        { name: "Android Studio", icon: Code2 },
        { name: "MVVM", icon: Box },
        { name: "Dagger Hilt", icon: Box },
        { name: "RoomDB", icon: Database },
        { name: "Retrofit", icon: Server },
        { name: "Gradle", icon: Wrench },
      ],
    },
    {
      title: "Backend",
      borderColor: "border-neon-lime-green/50",
      textColor: "text-neon-lime-green",
      bgGradient: "from-neon-lime-green/20 to-neon-lime-green/5",
      techs: [
        { name: "Spring Boot", icon: Server },
        { name: "REST APIs", icon: Server },
        { name: "JWT", icon: Lock },
        { name: "OAuth 2.0", icon: Lock },
        { name: "Docker", icon: Container },
        { name: "Docker Compose", icon: Container },
        { name: "Render", icon: Server },
      ],
    },
    {
      title: "Databases",
      borderColor: "border-neon-sky-blue/50",
      textColor: "text-neon-sky-blue",
      bgGradient: "from-neon-sky-blue/20 to-neon-sky-blue/5",
      techs: [
        { name: "PostgreSQL", icon: Database },
        { name: "Oracle", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "NeonDB", icon: Database },
        { name: "Render DB", icon: Database },
      ],
    },
    {
      title: "Tools & Platforms",
      borderColor: "border-neon-silver/50",
      textColor: "text-neon-silver",
      bgGradient: "from-neon-silver/20 to-neon-silver/5",
      techs: [
        { name: "Git/GitHub", icon: Github },
        { name: "Linux", icon: Server },
        { name: "Figma", icon: Figma },
        { name: "MCP Servers", icon: Server },
        { name: "Firebase", icon: Flame },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`space-y-4 mb-12 text-center scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {techCategories.map((category, catIndex) => (
              <CarouselItem key={catIndex}>
                <Card 
                  className={`p-8 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border-2 ${category.borderColor} hover-glow transition-all duration-300`}
                >
                  <h3 className={`text-3xl font-bold mb-8 text-center ${category.textColor}`}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.techs.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 ${category.borderColor} bg-card/30 backdrop-blur-sm hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default group`}
                        >
                          <Icon className={`w-10 h-10 ${category.textColor} group-hover:scale-125 transition-transform duration-300`} />
                          <span className={`font-medium text-sm text-center ${category.textColor}`}>
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TechStack;

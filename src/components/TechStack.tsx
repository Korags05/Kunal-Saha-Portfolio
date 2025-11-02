import { Card } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      borderColor: "border-neon-orange/50",
      textColor: "text-neon-orange",
      techs: ["Kotlin", "Java", "Python", "C/C++"],
    },
    {
      title: "Android",
      borderColor: "border-neon-pink/50",
      textColor: "text-neon-pink",
      techs: ["Jetpack Compose", "Android Studio", "MVVM", "Dagger Hilt", "RoomDB", "Retrofit", "Gradle"],
    },
    {
      title: "Backend",
      borderColor: "border-neon-lime-green/50",
      textColor: "text-neon-lime-green",
      techs: ["Spring Boot", "REST APIs", "JWT", "OAuth 2.0", "Docker", "Docker Compose", "Render"],
    },
    {
      title: "Databases",
      borderColor: "border-neon-sky-blue/50",
      textColor: "text-neon-sky-blue",
      techs: ["PostgreSQL", "Oracle", "MySQL", "NeonDB", "Render DB"],
    },
    {
      title: "Tools & Platforms",
      borderColor: "border-neon-silver/50",
      textColor: "text-neon-silver",
      techs: ["Git/GitHub", "Linux", "Figma", "MCP Servers", "Firebase"],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {techCategories.map((category, catIndex) => (
            <Card 
              key={catIndex} 
              className="p-6 bg-card-glass backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-4 ${category.textColor}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`px-3 py-1.5 rounded-lg border-2 ${category.borderColor} ${category.textColor} bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
                    style={{ animationDelay: `${(catIndex * category.techs.length + techIndex) * 30}ms` }}
                  >
                    <span className="font-mono font-medium text-xs">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

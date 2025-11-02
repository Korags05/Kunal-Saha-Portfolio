import { Card } from "@/components/ui/card";

const TechStack = () => {
  const technologies = [
    { name: "Kotlin", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "C/C++", category: "Language" },
    { name: "Jetpack Compose", category: "Android" },
    { name: "MVVM", category: "Architecture" },
    { name: "Dagger Hilt", category: "Android" },
    { name: "RoomDB", category: "Database" },
    { name: "Spring Boot", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "JWT", category: "Security" },
    { name: "OAuth 2.0", category: "Security" },
    { name: "Firebase", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Retrofit", category: "Networking" },
    { name: "Gemini API", category: "AI" },
    { name: "Git", category: "Tools" },
    { name: "Gradle", category: "Tools" },
    { name: "Linux", category: "OS" },
    { name: "Figma", category: "Design" },
    { name: "Android Studio", category: "IDE" },
  ];

  const categoryColors: Record<string, string> = {
    Language: "border-primary/50 text-primary",
    Android: "border-secondary/50 text-secondary",
    Backend: "border-accent/50 text-accent",
    Architecture: "border-primary/50 text-primary",
    Database: "border-secondary/50 text-secondary",
    Security: "border-accent/50 text-accent",
    Networking: "border-primary/50 text-primary",
    AI: "border-secondary/50 text-secondary",
    DevOps: "border-accent/50 text-accent",
    Tools: "border-primary/50 text-primary",
    Design: "border-secondary/50 text-secondary",
    IDE: "border-accent/50 text-accent",
    OS: "border-primary/50 text-primary",
  };

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

        <Card className="p-8 bg-card-glass backdrop-blur-sm border-border/50 animate-fade-in-up">
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group px-4 py-2 rounded-lg border-2 ${categoryColors[tech.category]} bg-card/50 backdrop-blur-sm hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default`}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="font-mono font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechStack;

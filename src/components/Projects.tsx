import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "NexterDay",
      description: "College Event Management Platform (Under Institutional Review)",
      highlights: [
        "Built a full-stack Android event platform for 7,000+ students using Jetpack Compose, MVVM, and Firebase Cloud Messaging",
        "Integrated QR-based registration, team management, and notifications",
        "Led a 7-member team and defined optimized Spring Boot API contracts",
      ],
      tags: ["Jetpack Compose", "MVVM", "Firebase", "Spring Boot", "QR Integration"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Healyks",
      description: "AI-Powered Rural Healthcare Assistant (Google Solution Challenge 2025)",
      highlights: [
        "Offline-first healthcare app powered by Gemini API for 90% accurate AI diagnosis",
        "Integrated Firebase Auth, RoomDB, and performance-optimized Compose UI",
      ],
      tags: ["Gemini API", "Firebase Auth", "RoomDB", "Jetpack Compose", "Offline-First"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Raiders' Reckoning",
      description: "KIITFEST 8.0 Event App",
      highlights: [
        "Android app for 500+ participants with Google Sign-In, real-time leaderboard, and gamified tasks",
        "Deployed full MVVM + Dagger Hilt architecture in one week",
      ],
      tags: ["MVVM", "Dagger Hilt", "Google Sign-In", "Real-time", "Gamification"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "FlashMob",
      description: "Time-Bound Social Media Platform",
      highlights: [
        "Developed the MVP backend using Spring Boot with Firebase Auth and JWT for secure, role-based access",
        "Currently optimizing backend performance and developing the Android app with Jetpack Compose",
        "Designed around the idea that posts expire in 60 minutes unless they go viral",
        "Focused on modular DTO-based architecture and real-time data interactions",
      ],
      tags: ["Spring Boot", "JWT", "Firebase Auth", "Jetpack Compose", "Real-time"],
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of full-stack applications showcasing Android development, backend architecture, and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const projects = [
    {
      title: "NexterDay",
      description: "College Event Management Platform",
      highlights: [
        "Built a full-stack Android event platform for 7,000+ students using Jetpack Compose, MVVM, and Firebase Cloud Messaging",
        "Integrated QR-based registration, team management, and notifications",
        "Led a 7-member team and defined optimized Spring Boot API contracts",
      ],
      tags: ["Jetpack Compose", "MVVM", "Firebase", "Spring Boot", "QR Integration"],
      demoUrl: "https://drive.google.com/file/d/1LriliZq2Wd1oUeAbhFs_kHJEXgWYoCYc/view",
      status: "Under Institutional Review",
    },
    {
      title: "Healyks",
      description: "AI-Powered Rural Healthcare Assistant (Google Solution Challenge 2025)",
      highlights: [
        "Offline-first healthcare app powered by Gemini API for 90% accurate AI diagnosis",
        "Integrated Firebase Auth, RoomDB, and performance-optimized Compose UI",
      ],
      tags: ["Gemini API", "Firebase Auth", "RoomDB", "Jetpack Compose", "Offline-First"],
      githubUrl: "https://github.com/Korags05/Healyks",
      demoUrl: "https://drive.google.com/file/d/1X3XRc2IX3FOaajgvObD62dqLSlmPRWTT/view",
      status: "Hackathon",
    },
    {
      title: "Raiders' Reckoning",
      description: "KIITFEST 8.0 Event App",
      highlights: [
        "Android app for 500+ participants with Google Sign-In, real-time leaderboard, and gamified tasks",
        "Deployed full MVVM + Dagger Hilt architecture in one week",
      ],
      tags: ["MVVM", "Dagger Hilt", "Google Sign-In", "Real-time", "Gamification"],
      githubUrl: "https://github.com/iot-lab-kiit/RaidersReckoningApp",
      demoUrl: "https://drive.google.com/file/d/1HtcpXRu68lOK1bmQAcBO3BZjtinjQnnI/view",
      status: "Flagship Event",
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
        <div 
          ref={titleRef}
          className={`space-y-4 mb-12 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of full-stack applications showcasing Android development, backend architecture, and AI integration.
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-6 scroll-scale-in ${gridVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
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

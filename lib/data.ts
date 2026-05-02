import { image } from "framer-motion/client";

// Personal Information
export const personalInfo = {
  name: "Kunal Saha",
  role: "Android & Full Stack Developer",
  location: "Guwahati, Assam",
  email: "kunalsaha1107@gmail.com",
  github: "https://github.com/Korags05",
  linkedin: "https://www.linkedin.com/in/kunal-saha-aaa68623a/",
  google_drive_resume: "https://drive.google.com/file/d/1YFMNjJe7k8OHc-64AvaFk3pnItv7HqKg/view",
};

// Projects
export const projects = [
  {
    id: 1,
    name: "Plotrix",
    description:
      "Engineered geospatial signal ingestion engine mapping property search coordinates to H3 hexagonal grid cells at resolution 8 (∼460m granularity) across 8 Indian cities.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Uber H3", "Supabase", "React", "Cloudflare Pages"],
    github: "https://github.com/Korags05/Plotrix",
    featured: true,
    image: "/images/plotrix.png",
  },
  {
    id: 2,
    name: "Healyks",
    description:
      "AI-Powered Healthcare Android app for underserved communities with intelligent symptom analysis",
    technologies: ["Kotlin", "Android", "Jetpack Compose", "Dagger Hilt", "Firebase", "RoomDB", "REST API", "MVVM"],
    github: "https://github.com/Korags05/Healyks",
    featured: false,
    image: "/images/healyks.png",
  },
  {
    id: 3,
    name: "RaidersReckoning App",
    description: "Raiders' Reckoning is a gamified event app built by the IOT Lab for KIITFest 8.0, designed to host and manage an immersive real-world challenge where teams competed in a tech-meets-treasure-hunt style game!",
    technologies: ["Kotlin", "Jetpack Compose", "Dagger Hilt", "Firebase", "Android", "REST API", "MVVM"],
    github: "https://github.com/iot-lab-kiit/RaidersReckoningApp",
    featured: false,
    image: "/images/raiders.png",
  },
  {
    id: 4,
    name: "Flashmob",
    description:
      "Full stack Android and Spring Boot social media app combining mobile and backend expertise",
    technologies: ["Kotlin", "Android", "Spring Boot", "Java"],
    github: "#",
    featured: true,
    status: "upcoming",
    image: "/images/flashmob_icon.png",
  },
];

// Skills
export const skills = {
  languages: ["Kotlin", "Java", "Python", "C", "C++"],
  android: ["Jetpack Compose", "MVVM", "Retrofit", "Room DB"],
  backend: ["Spring Boot", "RESTful API Design", "Spring Security", "JWT Authentication"],
  databases: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "NeonDB", "Firebase"],
  tools: ["Git", "Postman", "Figma", "Gradle", "Maven"],
  Cloud: ["AWS (EC2)", "Docker", "Linux", "CI/CD Pipelines", "Cloudflare"],
  Fundamentals: ["Data Structures & Algorithms", "System Design", "Object-Oriented Programming", "DBMS", "Networking", "Operating Systems"],
  Concepts: ["Clean Architecture", "Design Patterns", "Agile Methodologies", "Test-Driven Development", "Microservices Architecture", "Agile SDLC"],
};

export const experience = [
  {
    id: 1,
    company: "oneNEEV",
    position: "Founder and CTO",
    type: "professional",
    duration: "Jan 2026 - Present",

    // ✅ NEW FIELDS
    description: "Led the design and development of a scalable group real estate platform, owning everything from system architecture to deployment. I built modular backend services to handle concurrent multi-user workflows, optimized performance through query tuning, and established secure authentication with JWT and role-based access. I also streamlined delivery by setting up CI/CD pipelines and containerized deployments, ensuring a fast, reliable, and production-ready system.",
    image: "/images/oneneev.png",
    color: "purple", // used for theme
  },
  {
    id: 2,
    organization: "IoT Lab KIIT",
    position: "App Team Lead",
    type: "voluntary",
    duration: "Aug 2024 - Present",

    description: "Led 14-member cross-functional team coordinating sprint planning, architecture reviews, and release timelines across multiple applications. Oversaw delivery of 6+ Android applications across academic and event use cases; conducted code reviews and sprint-level delivery planning.",
    image: "/images/iotlab.png",
    color: "green",
  },
  {
    id: 3,
    position: "Sole Proprietor",
    type: "freelance",
    duration: "Present",
    organization: "Self",
    description: "Operating as a freelance developer, I deliver production-grade backend and full-stack systems with a strong focus on scalability, performance, and maintainability. I design clean architectures, build secure APIs, and handle end-to-end execution—from requirements and system design to deployment and optimization. My work is driven by solving real business problems with reliable, efficient, and well-structured solutions.",
    image: "/images/hero_image_portf.png",
    color: "blue",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Mangesh Aher",
    role: "Co-Founder",
    company: "oneNEEV",
    testimonial:
      "He's good backend developer. The project we worked on together he made sure to get things done and coperate with other teams to put out quality product.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Jagdish Mohanty",
    role: "Co-Founder",
    company: "oneNEEV",
    testimonial:
      "His technical clarity and execution speed have been the backbone of everything we’ve shipped so far. Fun to work with and crazy at his work.",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Aaron Chakraborty",
    role: "Lab Coordinator",
    company: "Iot Lab KIIT",
    testimonial:
      "I always found Kunal to be really conscientious guy. Somebody who is willing to take up ownership and accountability, the two holy grails of a great person and that as a friend matters more to me. It has been a really pleasure to work alongside him. More to come his way!!",
    avatar: "🧑‍💼",
  },
  {
    id: 4,
    name: "Harsh Singh",
    role: "Member",
    company: "IoT Lab KIIT",
    testimonial:
      "Working with Kunal bhaiya at IoT Lab helped me get started with Android development and improve consistently. He stays involved in the team’s work, gives opportunities to contribute, and keeps communication clear and straightforward. His guidance has helped me build better skills and confidence while working on projects.",
    avatar: "👩‍💼",
  },
  {
    id: 5,
    name: "Adrija Bhowmick",
    role: "Lead",
    company: "IoT Lab KIIT",
    testimonial:
      "He has been extremely cooperative throughout our time working together in the college society. Even when we had differences in opinions, we were always able to resolve them smoothly through mutual understanding and respect. He often took the lead in technical work and decision-making, leveraging his strong knowledge and skills. What stood out the most was his willingness to actively take up responsibilities and contribute meaningfully to the team.",
    avatar: "🧑‍💼",
  },
  {
    id: 6,
    name: "Kushagra",
    role: "Member",
    company: "IoT Lab KIIT",
    testimonial:
      "Very straightforward and honest with his view and words loved working under his guidance. Got to learn a lot from him truly one of the best seniors.",
    avatar: "🧑‍💼",
  },
];

// FAQ
export const faqs = [
  {
    id: 1,
    question: "What kind of projects have you built?",
    answer:
      "I’ve built production-level Android apps and backend systems focused on real-world use cases. My work includes event management platforms with real-time features, healthcare-focused applications, and API-driven systems using Spring Boot. I focus on building scalable, maintainable systems rather than just UI-heavy demos.",
  },
  {
    id: 2,
    question: "What’s your core expertise?",
    answer:
      "My strength lies in Android development using Kotlin and Jetpack Compose, combined with backend development in Spring Boot. I work with clean architecture, MVVM, REST APIs, and dependency injection (Dagger Hilt). I’m comfortable designing both the client and server side of an application.",
  },
  {
    id: 3,
    question: "Do you handle full product development?",
    answer:
      "Yes. I can take a product from idea to deployment — designing the architecture, building the Android app, developing backend APIs, and integrating authentication and databases. I focus on building systems that are scalable and easy to extend, not quick hacks.",
  },
  {
    id: 4,
    question: "How do you approach building systems?",
    answer:
      "I prioritize clean architecture, modular design, and performance. I think in terms of data flow, scalability, and failure handling from the start. I avoid overengineering, but I also don’t cut corners that create problems later.",
  },
  {
    id: 5,
    question: "What technologies do you usually work with?",
    answer:
      "Android: Kotlin, Jetpack Compose, MVVM, Hilt\nBackend: Spring Boot, Java, REST APIs\nDatabase: PostgreSQL, Firebase\nTools: Git, Firebase Auth, basic cloud/VPS deployments\nI pick tools based on the problem, but I stay consistent with stacks I can scale confidently.",
  },
];
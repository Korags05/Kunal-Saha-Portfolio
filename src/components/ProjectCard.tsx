import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
}

const ProjectCard = ({ title, description, highlights, tags, githubUrl, demoUrl, status }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card-glass backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift hover-glow">
      {/* Status badge */}
      {status && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary border border-secondary/30 animate-pulse-glow">
            {status}
          </span>
        </div>
      )}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 group-hover:scale-105 inline-block">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-mono rounded-md bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all duration-300 hover:scale-110"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

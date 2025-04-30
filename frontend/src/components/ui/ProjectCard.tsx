import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  liveDemo,
}) => {
  return (
    <div className="portfolio-card group overflow-hidden">
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ScrollArea className="h-18 mb-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge variant="destructive" key={index}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        {github && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        )}
        {liveDemo && (
          <Button variant="default" size="sm" asChild>
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

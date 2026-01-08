import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-full group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-background to-secondary/20 backdrop-blur-sm relative">
      {/* Featured badge */}
      {props.featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="flex items-center gap-1 bg-linear-to-r from-primary to-purple-600 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Image container with modern overlay */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick action buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="flex gap-3">
              {props.github && (
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/90 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {props.liveDemo && (
                <a
                  href={props.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-primary/90"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title with gradient */}
        <CardTitle className="text-xl font-bold mb-3 bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {props.title}
        </CardTitle>

        {/* Description with smooth scrolling */}
        <ScrollArea className="h-24 mb-4">
          <CardDescription className="text-sm text-muted-foreground pr-4 leading-relaxed">
            {props.description}
          </CardDescription>
          <ScrollBar orientation="vertical" />
        </ScrollArea>

        {/* Tags with modern styling */}
        <div className="mb-6">
          <ScrollArea className="h-15">
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </CardContent>

      {/* Footer with modern buttons */}
      <CardFooter className="p-6 pt-0 flex gap-3">
        {props.github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 gap-2 h-10 transition-all duration-300 border-2 hover:border-primary/50 hover:bg-primary/5"
          >
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-medium"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </Button>
        )}
        {props.liveDemo && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1 gap-2 h-10 transition-all duration-300 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg"
          >
            <a
              href={props.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-500 pointer-events-none" />
    </Card>
  );
};

export default ProjectCard;

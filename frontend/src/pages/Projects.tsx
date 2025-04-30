import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { project } from "@/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimateSection from "@/components/AnimateSection";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const viewLess = () => {
    setVisibleProjects(3);
  };

  const hasMoreProjects = visibleProjects < project.length;
  const hasProjects = project.length > 0;

  return (
    <div className="pt-20">
      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimateSection>
            <SectionTitle
              title="My Projects"
              subtitle="A showcase of my recent work and technical capabilities"
            />
          </AnimateSection>

          {hasProjects ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.slice(0, visibleProjects).map((proj, index) => (
                  <ProjectCard
                    key={index}
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    tags={proj.tags}
                    github={proj.github}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  onClick={hasMoreProjects ? loadMore : viewLess}
                  variant="outline"
                >
                  {hasMoreProjects ? "Load More" : "View Less"}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground mt-8">
              No More Projects
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

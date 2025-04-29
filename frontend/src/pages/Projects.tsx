import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { project } from "@/data/projects";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimateSection from "@/components/AnimateSection";
import { motion, AnimatePresence } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {project.slice(0, visibleProjects).map((proj, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <ProjectCard
                        title={proj.title}
                        description={proj.description}
                        image={proj.image}
                        tags={proj.tags}
                        github={proj.github}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={hasMoreProjects ? loadMore : viewLess}
                  variant="outline"
                >
                  {hasMoreProjects ? "Load More" : "View Less"}
                </Button>
              </motion.div>
            </>
          ) : (
            <motion.div
              className="text-center text-muted-foreground mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No More Projects
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

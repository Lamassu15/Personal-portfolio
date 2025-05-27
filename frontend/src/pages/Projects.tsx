import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimateSection from "@/components/AnimateSection";
import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

const Projects = () => {
  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <div className="pt-20">
      <title>My Projects - Keorkes Azdo</title>
      <meta
        name="description"
        content="Explore Keorkes Azdo's portfolio projects showcasing technical expertise in React, TypeScript, and modern web development."
      />
      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimateSection>
            <SectionTitle
              title="My Projects"
              subtitle="A showcase of my recent work and technical capabilities"
            />
          </AnimateSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isLoading ? (
              <div className="col-span-full flex justify-center items-center">
                <Loader className="animate-spin w-10 h-10 text-primary" />
              </div>
            ) : error ? (
              <div className="col-span-full flex justify-center items-center">
                <p className="text-destructive">
                  Error loading projects: {error.message}
                </p>
              </div>
            ) : projects.length > 0 ? (
              projects.map((proj, index) => (
                <motion.div
                  key={proj.id ?? index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="h-full flex"
                >
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.imageUrl}
                    tags={proj.tags}
                    github={proj.github}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center">
                <div className="text-muted-foreground">No More Projects</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

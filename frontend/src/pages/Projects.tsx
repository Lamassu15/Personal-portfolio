import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimateSection from "@/components/AnimateSection";
import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { AlertCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .order("created_at", { ascending: false });
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
        content="Explore Keorkes Azdo's portfolio projects showcasing technical expertise in React, TypeScript, ASP.NER Core and modern web development."
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
                <Spinner className="size-8 text-accent" />
              </div>
            ) : error ? (
              <div className="col-span-full flex justify-center items-center">
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>Unable to load projects.</AlertTitle>
                  <AlertDescription>
                    <p>
                      Check your internet connection or if there is an API
                      error.
                    </p>
                    <ul className="list-inside list-disc text-sm">
                      <li>Error loading projects: {error.message}</li>
                    </ul>
                  </AlertDescription>
                </Alert>
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
                    liveDemo={proj.liveDemo}
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

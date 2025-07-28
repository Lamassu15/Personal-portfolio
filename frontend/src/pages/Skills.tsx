import SectionTitle from "@/components/ui/SectionTitle";
import { techStack } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { CiBoxList } from "react-icons/ci";
import { motion } from "framer-motion";
import AnimateSection from "@/components/AnimateSection";
import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const fetchSkills = async () => {
  const { data, error } = await supabase
    .from("Skills")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

const Skills = () => {
  const {
    data: skills = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });
  return (
    <div className="pt-20">
      <title>My Skills - Keorkes Azdo</title>
      <meta
        name="description"
        content="Discover Keorkes Azdo's technical skills, including expertise in React, TypeScript, Tailwind CSS, and other modern web development technologies."
      />

      {/* Skills Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimateSection>
            <SectionTitle
              title="My Skills"
              subtitle="A comprehensive look at my technical expertise and capabilities"
            />
          </AnimateSection>
          <section className="flex flex-wrap items-center justify-center gap-4 pb-24">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                className="border-neutral-800 rounded-2xl h-32 w-32 p-4 border-4"
              >
                <img
                  className="object-contain w-full h-full"
                  src={tech.logo}
                  alt={tech.alt}
                />
              </motion.div>
            ))}
          </section>
          <hr className="border-t border-border mb-12" />
          <section className="mt-12">
            <div className="portfolio-card">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <CiBoxList />
                </span>
                Other Technologies I’ve Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {isLoading && <Loader className="animate-spin" />}
                {error && (
                  <p className="destructive">
                    Error loading skills: {error.message}
                  </p>
                )}
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="destructive" className="text-sm py-1 px-3">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Skills;

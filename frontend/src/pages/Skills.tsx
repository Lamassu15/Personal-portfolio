import SectionTitle from "@/components/ui/SectionTitle";
import { techStack } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiBoxList } from "react-icons/ci";
import { motion, Variants } from "framer-motion";
import AnimateSection from "@/components/AnimateSection";
import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

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
          <motion.section
            className="grid w-full gap-3 lg:grid-cols-2"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="w-full"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between gap-10 rounded-2xl p-2">
                    <div className="w-10 h-10 shrink-0">
                      <img
                        className="object-contain w-full h-full"
                        src={tech.logo}
                        alt={tech.alt}
                      />
                    </div>

                    <div className="flex flex-col justify-center grow">
                      <CardTitle className="text-accent font-semibold">
                        {tech.title}
                      </CardTitle>
                      <CardDescription className="text-xs mt-1 text-muted-foreground uppercase">
                        {tech.description}
                      </CardDescription>
                    </div>

                    <span className="text-sm font-medium text-primary">
                      {tech.percentage}%
                    </span>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.section>
          <motion.hr
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-border mt-12 mb-12"
          />
          {/* Deployment & cd/ci */}
          {/* Learning & Deepening Section */}
          <section className="mt-20">
            <AnimateSection>
              <SectionTitle
                title="Currently Learning"
                subtitle="Technologies I'm actively deepening my knowledge in"
              />
            </AnimateSection>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 max-w-3xl mx-auto space-y-6 text-center"
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                I’m currently focusing on expanding my skills in two key areas
                that play a big role in modern development workflows.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-accent">
                    CI/CD & Deployment
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Learning automated pipelines and deployment workflows using
                    GitHub Actions and modern hosting platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent">
                    PostgreSQL
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Deepening my understanding of relational databases, query
                    optimization, indexing, and advanced PostgreSQL features.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mt-12">
            <div className="portfolio-card">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <CiBoxList />
                </span>
                Other Technologies I've Used
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

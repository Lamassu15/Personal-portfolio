import SectionTitle from "@/components/ui/SectionTitle";
import { otherSkills, techStack } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { CiBoxList } from "react-icons/ci";
import { motion } from "framer-motion";

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

function Skills() {
  return (
    <div className="pt-20">
      {/* Skills Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <section>
            <SectionTitle
              title="My Skills"
              subtitle="A comprehensive look at my technical expertise and capabilities"
            />
          </section>
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
          <section className="mt-12">
            <div className="portfolio-card">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <CiBoxList />
                </span>
                Other Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="destructive"
                    className="text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Skills;

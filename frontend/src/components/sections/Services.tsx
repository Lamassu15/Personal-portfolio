import { RiCodeView } from "react-icons/ri";
import { FaPaintBrush, FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import { JSX } from "react";
import { services } from "@/data/services";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import SectionTitle from "../ui/SectionTitle";
import AnimateSection from "../AnimateSection";
import { motion } from "framer-motion";

const iconMap: Record<string, JSX.Element> = {
  dev: <RiCodeView />,
  paint: <FaPaintBrush />,
  shield: <FaShieldAlt />,
  shopping: <FaShoppingCart />,
};

const Services = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimateSection>
          <SectionTitle
            title="What I Do"
            subtitle="I specialize in helping businesses and individuals establish a strong digital presence through custom software solutions."
          />
        </AnimateSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {service.service}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.discreption}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

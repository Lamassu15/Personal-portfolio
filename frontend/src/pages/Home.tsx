import Services from "@/components/sections/Services";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Send, List } from "lucide-react";
import { Link } from "react-router-dom";
const profileImg = "/Keorkes.webp";
import { motion } from "framer-motion";
import AnimateSection from "@/components/AnimateSection";
import Typewriter from "typewriter-effect";

const Home = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between pt-16 pb-12  px-4 relative bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <section className="order-2 md:order-1 flex justify-center">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                variants={itemVariants}
              >
                <span>Full-Stack Developer</span>
              </motion.div>
              <motion.h1
                className="heading-1 leading-tight"
                variants={itemVariants}
              >
                Hi, I'm <span className="text-primary">Keorkes</span> Azdo
              </motion.h1>
              <div className="mt-2 text-lg text-primary paragraph">
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer",
                      "React & TypeScript",
                      "Modern Web Solutions",
                      "Freelancer & Consultant",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                  }}
                />
              </div>
              <motion.p
                className="text-muted-foreground paragraph max-w-md"
                variants={itemVariants}
              >
                I transform ideas into powerful digital experiences.
                Specializing in building modern web applications with React &
                TypeScript with a focus on performance and user experience.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Send />
                    Get in touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">
                    <List />
                    View my work
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SocialLinks />
              </motion.div>
            </motion.div>
          </section>

          <section className="order-1 md:order-2 flex justify-center">
            <motion.div
              className="w-full max-w-md aspect-square bg-primary/10 rounded-full flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
            >
              <div className="w-5/6 h-5/6 bg-gradient-to-br from-primary to-accent/70 rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="Developer Profile"
                  className="object-cover rounded-full"
                  width={400}
                  height={400}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </section>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={22} />
          </a>
        </div>
      </section>
      {/* Services Section */}
      <Services />

      {/* CTA Section */}
      <section className="section-padding bg-primary/10">
        <div className="container mx-auto">
          <AnimateSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's collaborate to create something amazing together. I'm
                available for freelance projects and open to full-time
                opportunities.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in touch <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </AnimateSection>
        </div>
      </section>
    </div>
  );
};

export default Home;

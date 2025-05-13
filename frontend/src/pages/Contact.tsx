import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin } from "lucide-react";
import Map from "../components/sections/Map";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import AnimateSection from "@/components/AnimateSection";
import Lottie from "lottie-react";
import MessageAnimation from "../assets/animations/Message.json";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Me - Keorkes Azdo</title>
        <meta
          name="description"
          content="Get in touch with Keorkes Azdo for project inquiries, collaborations, or freelance opportunities. Contact via email or social media."
        />
      </Helmet>
      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimateSection>
            <SectionTitle
              title="Get In Touch"
              subtitle="Have a project in mind? Let's talk about it."
            />
          </AnimateSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.section
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out to me any time. I prefer to talk over
                    email, especially for project inquiries.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Jönköping, Sweden</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4">Check me out!</h3>
                  <SocialLinks />
                </motion.div>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Lottie
                    animationData={MessageAnimation}
                    loop={true}
                    style={{ width: "75%", height: "100%" }}
                  />
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              className="md:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-card">
                <motion.h3
                  className="text-xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Send Me a Message
                </motion.h3>
                <ContactForm />
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Contact;

import SectionTitle from "@/components/ui/SectionTitle";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { MapPin, Mail, Calendar } from "lucide-react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import codingAnimation from "../assets/animations/Coding.json";
import { useRef } from "react";

const About = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about me and my background"
          />
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <section className="md:col-span-2">
              <div className="relative">
                <Lottie
                  lottieRef={animationRef}
                  animationData={codingAnimation}
                  loop={true}
                />
              </div>
            </section>

            <section className="md:col-span-3">
              <h5 className="heading-5 font-bold mb-4">
                I'm <span className="text-primary">Keorkes Azdo</span>, a
                passionate Full-Stack Developer
              </h5>
              <p className="text-muted-foreground mb-6 ">
                During my education and internships, I’ve worked on various web
                development projects—from simple websites to more advanced
                applications. I’m passionate about writing clean, efficient code
                and creating user-friendly digital experiences. As a recent
                graduate, I’m eager to keep learning and growing as a web
                developer
              </p>
              <p className="text-muted-foreground mb-6">
                My interest in programming began in high school, where I took
                several courses in coding and web development. I built my first
                website, and since then, I’ve been hooked—constantly learning
                new technologies and best practices. I take pride in writing
                clean, maintainable code and aim to create solutions that don’t
                just work, but add real value.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary" size={18} />
                  <span>Jönköping, Sweden</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-primary" size={18} />
                  <span>Bazo.assyr@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary" size={18} />
                  <span>Available for freelance</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionTitle
            title="Work Experience"
            subtitle="My professional journey through the tech industry"
          />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <section key={index}>
                <div className="portfolio-card">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground mt-2 sm:mt-0">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="Education"
            subtitle="My academic background and qualifications"
          />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <section key={index}>
                <div className="portfolio-card">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary">{edu.school}</p>
                    </div>
                    <div className="text-muted-foreground mt-2 sm:mt-0">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

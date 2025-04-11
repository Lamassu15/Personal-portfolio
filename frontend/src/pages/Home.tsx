import Services from "@/components/sections/Services";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const profileImg = "/Keorkes.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between  px-4 relative bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <section className="order-2 md:order-1 flex justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <span>Full-Stack Developer</span>
              </div>
              <h1 className="heading-1 leading-tight">
                Hi, I'm <span className="text-primary">Keorkes</span> Azdo
              </h1>
              <p className="text-muted-foreground paragraph max-w-md">
                I transform ideas into powerful digital experiences.
                Specializing in building modern web applications with React and
                Vite.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get in touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">View my work</Link>
                </Button>
              </div>

              <SocialLinks />
            </div>
          </section>

          <section className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-5/6 h-5/6 bg-gradient-to-br from-primary to-accent/70 rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
          <section>
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
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;

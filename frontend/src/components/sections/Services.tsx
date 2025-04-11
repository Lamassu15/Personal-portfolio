import { RiCodeView } from "react-icons/ri";
import { FaPaintBrush, FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import { JSX } from "react";
import { services } from "@/data/services";

const iconMap: Record<string, JSX.Element> = {
  dev: <RiCodeView />,
  paint: <FaPaintBrush />,
  shield: <FaShieldAlt />,
  shopping: <FaShoppingCart />,
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in helping businesses and individuals establish a
              strong digital presence through custom software solutions.
            </p>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <section className="portfolio-card">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.service}</h3>
              <p className="text-muted-foreground">{service.discreption}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

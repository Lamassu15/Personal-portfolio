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
            <h2 className="heading-2 font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground paragraph max-w-2xl mx-auto">
              I specialize in helping businesses and individuals establish a
              strong digital presence through custom software solutions.
            </p>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

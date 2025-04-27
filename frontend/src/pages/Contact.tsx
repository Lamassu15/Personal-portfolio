import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin } from "lucide-react";
import Map from "../components/sections/Map";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <section>
            <SectionTitle
              title="Get In Touch"
              subtitle="Have a project in mind? Let's talk about it."
            />
          </section>

          <div className="grid md:grid-cols-5 gap-12">
            <section className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out to me any time. I prefer to talk over
                    email, especially for project inquiries.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Jönköping, Sweden</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Check me out!</h3>
                  <SocialLinks />
                </div>
              </div>
            </section>

            <section className="md:col-span-3">
              <div className="portfolio-card">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </section>

      <Map />
      
    </div>
  );
};

export default Contact;

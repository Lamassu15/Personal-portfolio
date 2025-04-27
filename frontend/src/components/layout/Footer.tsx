import SocialLinks from "../SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-foreground">
              <span className="text-primary">K</span>A
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Building the web, one line at a time.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} KA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

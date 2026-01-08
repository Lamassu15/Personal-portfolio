import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/links";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, List } from "lucide-react";
import { CgMenuRightAlt } from "react-icons/cg";
import ModeToggle from "../ModeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-foreground">
            <span className="text-primary">K</span>A
          </NavLink>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6  tracking-wide">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.text}
              </NavLink>
            ))}
            <ModeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="text-portfolioLight rounded-md focus:outline-none"
                  aria-label="Open menu"
                >
                  <CgMenuRightAlt className="w-8 h-8" />
                </button>
              </SheetTrigger>
              <SheetContent className="flex md:hidden items-center text-center bg-background/95 backdrop-blur-sm">
                <SheetHeader>
                  <SheetTitle>Navigation menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4  tracking-wider font-medium items-center">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link active text-lg"
                          : "nav-link text-lg"
                      }
                    >
                      {link.text}
                    </NavLink>
                  ))}
                </nav>
                <div className="flex gap-4">
                  <Button asChild size="sm">
                    <Link to="/contact">
                      <Mail />
                      Get in touch
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects">
                      <List />
                      View my work
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

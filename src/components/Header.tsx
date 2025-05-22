
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? "text-company-dark" : "text-company-dark"}`}>
            <span className="text-company-orange">Evo</span>
            <span className="text-company-blue">Deus</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium hover:text-company-orange transition-colors ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-company-blue hover:bg-company-blue/90 text-white rounded-full px-6">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-company-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white py-6 px-6 shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-company-orange transition-colors font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-company-blue hover:bg-company-blue/90 text-white w-full rounded-full py-6">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

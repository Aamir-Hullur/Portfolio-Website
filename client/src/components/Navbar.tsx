import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { useLocation, Link } from "wouter";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const RESUME_URL = "https://drive.google.com/file/d/1Ow7r_YrYl_rVidYWNTtPZgP52h32myUp/view?usp=sharing";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    if (location !== "/") {
      setLocation("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <button
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.querySelector('section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              Aamir Hullur
            </button>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/60 hover:text-foreground transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 w-full justify-center"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

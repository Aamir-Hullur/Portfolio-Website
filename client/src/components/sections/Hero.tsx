import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ParticlesBackground } from "../Particles";
import { RESUME_URL } from "../Navbar";
import profileImage from "@/images/IMG_4.jpeg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { trackEvent } from "@/utils/analytics";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h1 
              variants={item} 
              className="text-4xl md:text-6xl font-bold"
            >
              Hi, I'm <span className="text-primary">Aamir Raza Hullur</span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl text-foreground/60"
            >
              Data Scientist | Software Engineer | AI Enthusiast
            </motion.p>
            <motion.div 
              variants={item}
              className="flex items-center gap-4"
            >
                <Button 
                className="transition-transform duration-200 hover:scale-105"
                onClick={async () => {
                  trackEvent('Resume Button Click', { 
                    source: 'hero'
                  });
                  
                  const response = await fetch(RESUME_URL);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Aamir_Hullur_Resume.pdf'; 
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                }}
                >
                Download CV
                </Button>
              <Button 
                variant="outline"
                className="transition-transform duration-200 hover:scale-105"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
              <a 
                href="https://github.com/Aamir-Hullur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => {
                  trackEvent('GitHub Button Click', { 
                    source: 'hero'
                  });
                }}
              >
                <SiGithub className="w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aamir-hullur/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => {
                  trackEvent('LinkedIn Button Click', { 
                    source: 'hero'
                  });
                }}
              >
                <SiLinkedin className="w-8 h-8" />
              </a>
            </motion.div>
						
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="relative aspect-square"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

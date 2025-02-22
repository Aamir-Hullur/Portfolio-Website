import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/Particles";

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow relative"
      >
        <ParticlesBackground />
        <div className="relative z-10">
          <Projects showAll />
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}

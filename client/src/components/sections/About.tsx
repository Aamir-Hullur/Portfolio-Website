import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:w-3/4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
              I'm a Graduate Student by day, Machine Learning & AI Explorer by night (and sometimes the other way around). 
              My academic journey has equipped me with a solid foundation in data analysis, machine learning, and web development, 
              and I'm energized by the prospect of turning cutting-edge technology into real-world solutions. 
              I thrive on collaboration, and I'm always game to join forces with dynamic teams to create impactful AI/ML applications and innovative software. 
              Let's shape the future—one algorithm at a time!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
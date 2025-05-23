import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiPython, SiReact, SiNodedotjs, SiGit, SiTensorflow, SiDjango, SiSpringboot, SiKubernetes, SiTerraform } from "react-icons/si";

const skills = {
  "Languages": {
    icon: <SiPython className="w-8 h-8" />,
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL (MySQL, Postgres)",
      "MongoDB",
      "R",
      "HTML/CSS"
    ],
  },
  "Frontend Technologies": {
    icon: <SiReact className="w-8 h-8" />,
    items: [
      "React",
      "NextJS",
      "Redux",
      "TailwindCSS",
      // "Jest/Testing Library"
    ],
  },
  "Backend Technologies": {
    icon: <SiNodedotjs className="w-8 h-8" />,
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "Django",
      // "Spring Boot",
      "Prisma ORM",
      "REST APIs",
      "GraphQL",
      "Redis",
      "Microservices"
    ],
  },
  "Developer Tools": {
    icon: <SiGit className="w-8 h-8" />,
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      // "CI/CD (e.g., GitHub Actions)",
      "Google Cloud Platform",
      "AWS",
      // "Terraform",
      "Vercel SDK",
      "Firebase"
    ],
  },
  "AI/Machine Learning": { 
    icon: <SiTensorflow className="w-8 h-8" />, 
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas & NumPy",
      "NLP (Natural Language Processing)",
      "Computer Vision",
      "MLOps"
    ],
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="text-primary"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {icon}
                    </motion.div>
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: [0, 0, 0, 0] }}
                      >
                        <Badge 
                          variant="secondary"
                          className="text-sm py-1 px-2"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

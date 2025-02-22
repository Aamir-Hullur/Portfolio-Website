import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function GithubContributionsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          GitHub Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="transition-all duration-300"
        >
          <Card className="p-4 w-full overflow-hidden hover:shadow-lg">
            <img 
              src={`https://ghchart.rshah.org/Aamir-Hullur`} 
              alt="Aamir's Github Contribution Graph"
              className="w-full h-auto dark:invert"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

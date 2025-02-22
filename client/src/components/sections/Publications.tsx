import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PublicationModal, PublicationDetails } from "@/components/PublicationModal";

const publications: PublicationDetails[] = [
  {
    title: "[PREPRINT] Deepfake audio detection and justification with Explainable Artificial Intelligence (XAI)",
    authors: "Preeti Kale, Aditi Govindu, Aamir Hullur, Atharva Gurav, Parth Godse",
    conference: "Research Gate",
    doi: "10.21203/rs.3.rs-3444277/v1",
    description: "This paper generates fake audio from Fake or Real dataset using Generative Adversarial Neural Networks (GANs).\
    The proposed work analyses the quality of the generated fake data using the Fréchet Audio Distance score.\
    The study further enables glass box analysis of deepfake audio detection through Explainable Artificial Intelligence (XAI) models of LIME, SHAP and GradCAM. ",
    link: "https://www.researchgate.net/publication/374798687_Deepfake_audio_detection_and_justification_with_Explainable_Artificial_Intelligence_XAI",
    year: "2023"
  },
  {
    title: "Malware Analysis Using Machine Learning Techniques",
    authors: "Shakti Kinger, Aamir Hullur, Vijayabhaskar Bhavanam Reddy, Sanket Jadhao, and Kaustubh Hambarde",
    conference: "2nd International Conference on Intelligent Technologies (CONIT)",
    doi: "10.1109/CONIT55038.2022.9848045",
    description: "This paper presents a comprehensive approach to malware analysis using machine learning techniques. We developed models to detect and classify malicious software by analyzing their behavioral patterns and static features. Our methodology achieved significant accuracy in identifying various types of malware, contributing to improved cybersecurity measures.",
    link: "https://ieeexplore.ieee.org/document/9848045",
    year: "2022"
  }
];

export function Publications() {
  const [selectedPublication, setSelectedPublication] = useState<PublicationDetails | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="publications" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Publications
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.title}
              variants={item}
              className="h-full"
              onClick={() => setSelectedPublication(publication)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{publication.authors}</p>
                  <p className="text-sm text-muted-foreground mb-4">{publication.conference} ({publication.year})</p>
                  <Button variant="outline">View Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <PublicationModal 
        publication={selectedPublication}
        isOpen={selectedPublication !== null}
        onClose={() => setSelectedPublication(null)}
      />
    </section>
  );
}

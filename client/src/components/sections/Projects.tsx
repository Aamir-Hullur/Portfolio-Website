import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { ProjectModal, type ProjectDetails, type ProjectCategory } from "../ProjectModal";
import { ExternalLink } from "lucide-react";

// Import images
import leetcodeImage from "@/images/image.png";
import youtubeImage from "@/images/Project_Structure.png";
import wildlifeImage from "@/images/Model_architecture.png";
import airbnbImage from "@/images/AIRBNB-STOCK-1536x864.jpg";
import reviewImage from "@/images/review.png";
import bloodbankImage from "@/images/ER-Diagram.png";
import streamlitDemo from "@/images/Streamlit_demo.gif";
import tableauDashboard from "@/images/Tableau_dashboard.png";

const projects: ProjectDetails[] = [
  {
    title: "GAN-Driven Deepfake Audio Synthesis",
    description: "Implemented GANs to synthesize realistic audio content, achieving a 30% increase in data variation and a 25% improvement in audio quality.",
    longDescription: `Implemented GANs to synthesize realistic audio content, achieving a 30% increase in data variation and a 25% improvement in audio quality, while employing SHAP, and GradCAM models to analyze MEL spectrograms for better model performance insights. Designed innovative Explainable AI (XAI) models to transform black-box deep learning into transparent white-box models, achieving a 40% improvement in model understanding and enabling data-driven decision-making for optimization.`,
    image: streamlitDemo,
    categories: ["AI & Machine Learning"],
    technologies: ["Python", "TensorFlow", "CNN", "GANs", "Streamlit"],
    githubUrl: "https://github.com/Aamir-Hullur/Deepfake-Audio-detection-using-XAI",
    // liveUrl: "",
    featured: true,
  },
  {
    title: "Full-Stack Video Streaming Platform",
    description: "Developed a full-stack video streaming platform with user authentication, video upload, and streaming capabilities.",
    longDescription: "Developed a full-stack video streaming platform with user authentication, video upload, and streaming capabilities. The platform features a user-friendly interface for uploading and streaming videos, with secure authentication and authorization mechanisms.",
    image: youtubeImage,
    categories: ["Full Stack Projects", "Cloud & DevOps"],
    technologies: ["React", "Node.js", "TypeScript", "GCP", "Firebase", "Docker"],
    githubUrl: "https://github.com/Aamir-Hullur/YouTube-Clone",
    liveUrl: "https://yt-web-client-649896679555.us-central1.run.app/",
    featured: true
  },

  {
    title: "Deep Learning-Based Wildlife Recognition",
    description: "Developed and deployed deep learning models (ResNet-101, InceptionV3) achieving a 93% accuracy in automating the classification of wildlife images, reducing manual effort in wildlife sanctuaries.",
    longDescription: "Developed and deployed deep learning models (ResNet-101, InceptionV3) achieving a 93% accuracy in automating the classification of wildlife images, reducing manual effort in wildlife sanctuaries. Implemented an image processing pipeline with sub-models to separate blank, partial animal, and day/night images, reducing processing time by 20% while maintaining data accuracy for ecological studies.",
    image: wildlifeImage,
    categories: ["AI & Machine Learning"],
    technologies: ["Deep Learning", "CNN", "Object Detection", "ResNet-101", "InceptionV3"],
    githubUrl: "https://github.com/Aamir-Hullur/Wildlife-Detector",
    // liveUrl: "https://wildlife.example.com",
    featured: true
  },

  {
    title: "Real-Time Data Automation Pipeline",
    description: "Developed a real-time data pipeline that automatically synchronizes LeetCode solutions to GitHub and Supabase, featuring instant updates and live tracking of problem-solving progress since 2023.",
    longDescription: "A dedicated repository documenting my journey through LeetCode's diverse problem sets, featuring optimized \
    Python solutions for various algorithmic challenges. \
    The system instantly captures and processes new solutions, \
    pushing them simultaneously to GitHub for version control and Supabase for structured data storage.",
    image: leetcodeImage,
    categories: ["Cloud & DevOps"],
    technologies: ["Python", "Supabase","Github API", "SQL","Data Structures", "Algorithms"],
    githubUrl: "https://github.com/Aamir-Hullur/Leetcode-Journey",
    featured: true
  },
  {
    title: "Predictive Analytics for Airbnb Pricing",
    description: "Comprehensive analysis and prediction system for AirBNB prices in New York City using machine learning and data analytics.",
    longDescription: "Comprehensive project analyzing and predicting AirBNB prices in New York City using machine learning models. Features extensive EDA on over 100,000 listings, detailed data visualization, and advanced predictive modeling for accurate price predictions.",
    image: airbnbImage,
    categories: ["AI & Machine Learning"],
    technologies: ["Python", "Data Visualization", "Machine Learning","Predictive Modeling"],
    githubUrl: "https://github.com/Aamir-Hullur/AirBNB-Price-Predictor",
    featured: false,
  },
  {
    title: "Data Driven Employee Turnover Prediction",
    description: "Created machine learning models resulting in an 89% accuracy rate for predicting employee attrition, enabling strategic measures to reduce workforce turnover.",
    longDescription: "Created machine learning models resulting in an 89% accuracy rate for predicting employee attrition, enabling strategic measures to reduce workforce turnover. Compared classification models and conducted a comparative analysis using Tableau, leading to a 30% reduction in wrong classification rates.",
    image: tableauDashboard,
    categories: ["AI & Machine Learning", "Cloud & DevOps"],
    technologies: ["PySpark", "Machine Learning", "Tableau", "Big Data Analytics"],
    githubUrl: "https://github.com/Aamir-Hullur/Employee-Attrition-Prediction",
    // liveUrl: "https://dashboard.example.com",
    featured: false
  },
  {
    title: "Movie Review Sentiment Analysis",
    description: "Streamlit app designed for sentiment analysis of movie reviews using NLP and machine learning models.",
    longDescription: "Streamlit app designed for sentiment analysis of movie reviews. The project demonstrates the use of NLP techniques and machine learning models to analyze and visualize the sentiment of movie reviews in real-time. This app utilizes MultinomialNB and LinearSVC models to predict sentiment with high accuracy.",
    image: reviewImage,
    categories: ["AI & Machine Learning", "Full Stack Projects"],
    technologies: ["Python", "NLP", "Streamlit", "MultinomialNB", "LinearSVC"],
    githubUrl: "https://github.com/Aamir-Hullur/Movie-Review-Sentiment-Analysis",
    featured: false,
  },
  {
    title: "Blood Bank Management System",
    description: "Full-stack blood bank management system for managing donor information and blood stock.",
    longDescription: "A comprehensive blood bank management system developed using modern web technologies. This system manages blood bank operations, including donor and recipient information tracking and blood stock management.",
    image: bloodbankImage,
    categories: ["Full Stack Projects"],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/Aamir-Hullur/BloodBank-Management-System",
    featured: false,
  }
];

const filterCategories: ProjectCategory[] = [
  "AI & Machine Learning",
  "Full Stack Projects",
  "Cloud & DevOps"
];

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const displayedProjects = projects.filter(project => {
    if (!showAll) {
      return project.featured;
    }
    if (activeCategory === "all") {
      return true;
    }
    return project.categories.includes(activeCategory);
  }).slice(0, showAll ? projects.length : 3);

  const handleCategoryClick = (category: ProjectCategory) => {
    setActiveCategory(curr => curr === category ? "all" : category);
  };

  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2
      }
    }
  };

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {showAll ? "All Projects" : "Featured Projects"}
          </motion.h2>

          {showAll && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryClick(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          <div className="relative min-h-[200px]">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence initial={false} mode="sync">
                {displayedProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    layout
                    layoutId={project.title}
                    className="h-full"
                  >
                    <Card 
                      className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          {project.liveUrl && (
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {!showAll && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center"
            >
              <Link href="/projects">
                <Button size="lg" className="transition-transform duration-200 hover:scale-105">
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

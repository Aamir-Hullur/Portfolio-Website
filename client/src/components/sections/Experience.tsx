import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Indiana University Bloomington",
    role: "Data Science Researcher",
    period: "May 2024 - Present",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFonK534Iq8-Q/company-logo_100_100/company-logo_100_100/0/1631332394799?e=1748476800&v=beta&t=-PvXaaOGR5ovv-WWXInjJ6ZDHXYt56c8FfZuBEugFpk",
    descriptionPoints: [
      "Spearheaded the development of efficient pipeline to analyze genomic datasets and map enhancer regions and transcription factors to open chromatin regions using ATAC-seq data, improving data processing efficiency by 25%.",
      "Automated genomic annotation retrieval for over 30,000 human and mouse genes using REST APIs from Ensembl and UCSC Genome Browser, reducing manual data integration time by 30%.",
      "Performed motif discovery and transcription factor binding analysis, resulting in a 15% increase in the identification of key regulatory elements and significant gene regulators."
    ]
  },
  {
    company: "Luddy School of Informatics, Computing, and Engineering",
    role: "Graduate Teaching Assistant",
    period: "August 2024 - December 2024",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGVE4xmb_ZnGw/company-logo_200_200/company-logo_200_200/0/1630591272799?e=1750291200&v=beta&t=Rp5pSjwOIm3ONliI56hL4HjSz_UMiQrMsvERChiSdtM",
    descriptionPoints: [
      "Served as Graduate Associate Instructor for CSCI-B 351 Introduction to Artificial Intelligence, mentoring and guiding a diverse cohort of undergraduate students.",
      "Facilitated student learning in core AI concepts including neural networks, heuristics, graph search, logic, and knowledge representation systems.",
      "Provided comprehensive support in understanding advanced concepts such as machine learning, problem-solving methods, and production systems."
    ]
  },
  {
    company: "Hyphenova",
    role: "Data Science Intern",
    period: "June 2024 – November 2024",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGkJccMsdITsA/company-logo_200_200/company-logo_200_200/0/1642628341508/hyphenova_network_logo?e=1748476800&v=beta&t=TFi7droxQso4tmpaxwYxwCk9SF9FpinEkWrItNatXoc",
    descriptionPoints: [
      "Built an R Shiny dashboard that provided real-time user analytics and visualizations, enhancing data accessibility for the team and reducing reporting time by 20%.",
      "Conducted exploratory data analysis on large datasets and collaborated with cross-functional teams to develop data-driven NLP and machine learning models.",
      "Worked within an Agile framework, participating in daily stand-up meetings to provide updates and ensure alignment with project goals, contributing to a 10% increase in sprint efficiency."
    ]
  },
  {
    company: "Cummins",
    role: "Software Engineer Intern",
    period: "July 2022 - January 2023",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGQf222hCAvoQ/company-logo_200_200/company-logo_200_200/0/1700575833581/cummins_inc_logo?e=1748476800&v=beta&t=UybAOywKoJWkhhuM9aSAUYnC6XGBZKNuWyNVEvP1bKE",
    descriptionPoints: [
      "Developed web applications utilizing R Shiny, Python, and Power BI to predict and analyze warranty failure data, resulting in a 30% reduction in warranty claim processing time.",
      "Collaborated with cross-functional teams to align project goals with business priorities, enhancing warranty management processes through data-driven decision-making resulting in a 20% faster project completion.",
      "Earned recognition for outstanding project quality, evidenced by selection for a Six Sigma Quality Event, showcasing a commitment to excellence and continuous improvement."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-6 flex flex-col items-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-3/4"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="rounded-full w-16 h-16 object-contain"
                        />
                      )}
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.descriptionPoints?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

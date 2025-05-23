import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const education = [
  {
    degree: "M.S in Computer Science",
    school: "Indiana University Bloomington",
    period: "August 2023 - May 2025",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFonK534Iq8-Q/company-logo_200_200/company-logo_200_200/0/1631332394799?e=1748476800&v=beta&t=cmMkkh2Uy8sMaCuC2PGdEbws6LzSSWgbATv0GzFNhds",
    detailsPoints: [
      "Relevant Coursework: Applied Machine Learning, Data Mining, Computer Vision, Information Visualization, Big Data Applications",
      "GPA: 3.94"
    ]
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Maharashtra Institute of Technology",
    period: "June 2019 - May 2023",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQH39CnaYUNguA/company-logo_200_200/company-logo_200_200/0/1729247947484/mitwpuofficial_logo?e=1748476800&v=beta&t=qymsR4UIPWW8-Ix8qzNdjw0AYcghBdOG9OavWAYH5I8",
    detailsPoints: [
      "Relevant Coursework: Big Data Analytics, Database Management System, Artificial Intelligence, Data Structures & Algorithm",
      "GPA: 3.87"
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-6 flex flex-col items-center">
          {education.map((edu, index) => (
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
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {edu.logo && (
                        <img 
                          src={edu.logo} 
                          alt={`${edu.school} logo`} 
                          className="rounded-full w-16 h-16 object-contain"
                        />
                      )}
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-primary">{edu.school}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.detailsPoints?.map((point, i) => (
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

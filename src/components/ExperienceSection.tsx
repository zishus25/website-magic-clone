import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Innovations Pvt Ltd",
      period: "Jan 2024 - Present",
      type: "Full-time",
      current: true,
      description: "Developing modern web applications using React, TypeScript, and Tailwind CSS. Implementing responsive designs and optimizing application performance. Collaborating with senior developers to learn best practices and contribute to production-ready code.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Git", "REST APIs"],
    },
    {
      title: "Web Development Intern",
      company: "Digital Solutions Hub",
      period: "Jun 2023 - Dec 2023",
      type: "Internship",
      current: false,
      description: "Built responsive websites and contributed to various client projects. Gained hands-on experience with HTML, CSS, JavaScript, and React. Learned agile development methodologies and version control with Git. Worked on improving website performance and user experience.",
      tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Jan 2022 - May 2023",
      type: "Freelance",
      current: false,
      description: "Created custom websites for small businesses and personal projects. Focused on responsive design, modern UI/UX principles, and clean code. Managed complete project lifecycle from client requirements to deployment. Built portfolio projects to strengthen technical skills.",
      tags: ["HTML", "CSS", "JavaScript", "WordPress", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      {exp.current && (
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                    <Badge variant="outline" className="ml-2">{exp.type}</Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

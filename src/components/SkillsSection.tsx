import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML/CSS", level: 92 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "Python / FastAPI", level: 80 },
        { name: "PostgreSQL / MongoDB", level: 82 },
        { name: "REST APIs / GraphQL", level: 87 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker / AWS", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Problem Solving", level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding my toolkit with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
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

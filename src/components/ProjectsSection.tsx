import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/ecommerce-project.jpg";
import taskManagementImg from "@/assets/task-management-project.jpg";
import weatherImg from "@/assets/weather-dashboard-project.jpg";
import analyticsImg from "@/assets/social-analytics-project.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: ecommerceImg,
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      github: "https://github.com/zishuahmad/ecommerce-platform",
      demo: "https://juniorminds.store/"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: taskManagementImg,
      tags: ["React", "Supabase", "TypeScript", "Tailwind"],
      featured: true,
      github: "https://github.com/zishuahmad/task-management",
      demo: "https://task-manager-demo.vercel.app"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts and beautiful data visualizations.",
      image: weatherImg,
      tags: ["Vue.js", "Chart.js", "Weather API", "CSS"],
      featured: false,
      github: "https://github.com/zishuahmad/weather-dashboard",
      demo: "https://weather-app-demo.vercel.app"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media performance across multiple platforms.",
      image: analyticsImg,
      tags: ["React", "Python", "FastAPI", "PostgreSQL"],
      featured: false,
      github: "https://github.com/zishuahmad/social-analytics",
      demo: "https://analytics-demo.vercel.app"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-primary/90 hover:bg-primary">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

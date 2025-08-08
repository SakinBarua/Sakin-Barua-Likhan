import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  liveSiteUrl: string;
  technologies: string[];
  screenshots: string[];
}

export function PortfolioSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample project data - would be replaced with real projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern ladies' shopping website with product filtering and secure checkout",
      image: "https://dellasharmony.great-site.net/assets/logo.jpg",
      detailedDescription: 
        "A comprehensive e-commerce platform designed specifically for women's fashion. " +
        "Features include product categorization, advanced filtering, wishlist functionality, " +
        "secure payment processing, and user accounts with order history.",
      liveSiteUrl: "https://dellasharmony.great-site.net/",
      technologies: ["Html", "PHP", "js", "MySQL", "Bootstrap"],
      screenshots: [
        "https://placehold.co/800x600?text=E-commerce+Screenshot+1",
        "https://placehold.co/800x600?text=E-commerce+Screenshot+2",
      ]
    },
    {
      id: 2,
      title: "Coaching Center Management",
      description: "Complete management system for educational coaching centers",
      image: "https://spokenenglishschool.great-site.net/logo.jpg",
      detailedDescription: 
        "A comprehensive management system for educational coaching centers. " +
        "Features include student registration, attendance tracking, course management, " +
        "instructor scheduling, progress reports, and payment processing.",
      liveSiteUrl: "https://spokenenglishschool.great-site.net/",
      technologies: [ "PHP", "MySQL", "PHP", "Bootstrap"],
      screenshots: [
        "https://placehold.co/800x600?text=Coaching+Center+Screenshot+1",
        "https://placehold.co/800x600?text=Coaching+Center+Screenshot+2",
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal branding website with modern design and animations",
      image: "https://placehold.co/600x400?text=Portfolio+Website",
      detailedDescription: 
        "A sleek portfolio website designed to showcase professional work and skills. " +
        "Features include smooth scrolling, animated elements, dark/light mode, " +
        "responsive design, and contact form functionality.",
      liveSiteUrl: "https://example.com/portfolio",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      screenshots: [
        "https://placehold.co/800x600?text=Portfolio+Screenshot+1",
        "https://placehold.co/800x600?text=Portfolio+Screenshot+2",
      ]
    },
    {
      id: 4,
      title: "Book of Deeds",
      description: "Collaborative task management application with real-time updates",
      image: "https://bookofdeeds.great-site.net/assets/images/logo.png",
      detailedDescription: 
        "A real-time task management application designed for team collaboration. " +
        "Features include task creation and assignment, progress tracking, deadline notifications, " +
        "commenting system, file attachments, and activity logs.",
      liveSiteUrl: "https://bookofdeeds.great-site.net/",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      screenshots: [
        "https://placehold.co/800x600?text=Task+App+Screenshot+1",
        "https://placehold.co/800x600?text=Task+App+Screenshot+2",
      ]
    },
    {
      id: 5,
      title: "Drishtikon",
      description: "A photography portfolio website with gallery and contact form",
      image: "https://drishtikon.great-site.net/logo.jpg",
      detailedDescription: 
        "A Photography website" +
        " that showcases stunning images in a clean, modern layout. " +
        "Features include a dynamic gallery, image filtering, contact form, " +
        "and responsive design for optimal viewing on all devices.",
      liveSiteUrl: "https://drishtikon.great-site.net/",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "AJAX"],
      screenshots: [
        "https://placehold.co/800x600?text=Photography+Screenshot+1",
        "https://placehold.co/800x600?text=Photographyt+Screenshot+2",
      ]
    },


  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    }
  };

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Portfolio</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl">
            Explore my recent projects where I've applied my skills and expertise
            to create innovative web solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col bg-card">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a 
                      href={project.liveSiteUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>{selectedProject.detailedDescription}</p>
                
                <div className="mt-4 space-y-4">
                  <h4 className="text-lg font-semibold">Project Screenshots</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border">
                        <img 
                          src={screenshot} 
                          alt={`${selectedProject.title} screenshot ${index + 1}`} 
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button asChild>
                  <a 
                    href={selectedProject.liveSiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
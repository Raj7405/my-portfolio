import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with Stripe payment integration, dynamic product catalog, and SEO-optimized pages. Built with Next.js and Strapi CMS.",
    tech: ["Next.js", "React", "Strapi", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Full Stack",
  },
  {
    title: "SEO Landing Pages",
    description:
      "High-performance, SEO-optimized landing pages built for marketing campaigns. Achieved 20-30% improvement in site performance through modern web standards.",
    tech: ["Next.js", "Tailwind CSS", "SEO", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Marketing",
  },
  {
    title: "Headless CMS Dashboard",
    description:
      "A dynamic and maintainable content management system built with Strapi, featuring custom content types and user-friendly admin interface.",
    tech: ["Strapi", "Node.js", "React", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Backend",
  },
  {
    title: "Payment Processing System",
    description:
      "Secure payment processing integration using Stripe API with frontend middleware for API key protection and enhanced security measures.",
    tech: ["Stripe API", "React", "Node.js", "Security"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    category: "Fintech",
  },
  {
    title: "Multi-Step Form Component",
    description:
      "Reusable multi-step form component with validation, progress tracking, and credit card validation. Built during training at Tagline Infotech.",
    tech: ["React.js", "Redux", "Form Validation"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Component",
  },
  {
    title: "Responsive UI Components",
    description:
      "Collection of accessible, responsive UI components built with Bootstrap, Material-UI, and Ant Design for various client projects.",
    tech: ["Bootstrap", "Material-UI", "Ant Design", "React"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    category: "UI/UX",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card/30 relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in frontend development, 
            payment integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                    <Layers size={12} className="text-primary" />
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink size={18} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github size={18} />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

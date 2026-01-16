import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers, CheckCircle2, Link2, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { getProjectBySlug, type Project } from "@/fixtures/projects";
// Future: Use React Query for data fetching
// import { useQuery } from "@tanstack/react-query";

// Future: This function will fetch from backend API
const fetchProject = async (slug: string): Promise<Project | null> => {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/projects/${slug}`);
  // return response.json();
  
  // For now, use fixture data
  return getProjectBySlug(slug) || null;
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Future: Use React Query for data fetching
  // const { data: project, isLoading: loading } = useQuery({
  //   queryKey: ['project', slug],
  //   queryFn: () => fetchProject(slug!),
  //   enabled: !!slug,
  // });

  useEffect(() => {
    if (slug) {
      setLoading(true);
      // Simulate API call delay
      fetchProject(slug).then((data) => {
        setProject(data);
        setLoading(false);
        if (!data) {
          // Project not found, redirect to 404 or projects page
          navigate('/#projects');
        }
      });
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading project...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-4">The project you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/#projects')}>Back to Projects</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/#projects')}
              className="gap-2"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
              <Layers size={12} className="text-primary" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          {/* Description */}
          {project.detailedDescription && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* What We Did */}
          {project.whatWeDid && project.whatWeDid.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <CheckCircle2 size={24} className="text-primary" />
                What We Did
              </h2>
              <ul className="space-y-3">
                {project.whatWeDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveLink || project.githubLink) && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Link2 size={24} className="text-primary" />
                Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <Button variant="default" size="lg" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github size={20} />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Proof/Evidence */}
          {project.proof && project.proof.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <ImageIcon size={24} className="text-primary" />
                Project Proof
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.proof.map((item, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-border">
                    {item.type === "image" && (
                      <div className="relative">
                        <img
                          src={item.url}
                          alt={item.title || `Proof ${idx + 1}`}
                          className="w-full h-64 object-cover"
                        />
                        {item.title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3">
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                          </div>
                        )}
                      </div>
                    )}
                    {item.type === "link" && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 hover:bg-secondary transition-colors"
                      >
                        <ExternalLink size={20} className="inline-block mr-2 text-primary" />
                        <span className="text-foreground font-medium">{item.title || "View Link"}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;


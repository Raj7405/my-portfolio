import { motion, useInView } from "framer-motion";
import { Codepen, SquareCode, Webhook } from "lucide-react";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Bootstrap", "Material-UI", "Ant Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "State Management",
    skills: ["Redux", "Context API"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Strapi CMS", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Services",
    skills: ["Git", "Vercel", "Stripe API", "SEO", "Payment Gateway"],
    color: "from-blue-500 to-indigo-500",
  },
];

const certificates = [
  {
    title: "Frontend Developer (React)",
    description: "HackerRank — Completed Frontend Developer challenges evaluating general understanding of the Frontend Developer fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/b9355c861cac",
    certificateLink: "https://www.hackerrank.com/certificates/b9355c861cac",
    icon: <Codepen className="w-6 h-6" />,
  },
  {
    title: "React Certificate",
    description: "HackerRank — Completed React challenges evaluating general understanding of the React fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/f3d553ead694",
    certificateLink: "https://www.hackerrank.com/certificates/f3d553ead694",
    icon: <Webhook className="w-6 h-6" />,
  },
  {
    title: "JavaScript Certificate",
    description: "HackerRank — Completed JavaScript challenges evaluating general understanding of the language fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/b46668d50633",
    certificateLink: "https://www.hackerrank.com/certificates/b46668d50633",
    icon: <SquareCode className="w-6 h-6" />,
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="skills" className="section-padding bg-card/30 relative" ref={ref}>
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
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((certificate) => (
            <div 
              key={certificate.title} 
              onClick={() => setSelectedCertificate(certificate)}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 cursor-pointer card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">
                   {certificate.icon}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {certificate.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificate Dialog */}
        <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle>{selectedCertificate?.title}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 px-6 pb-6">
              {selectedCertificate && (
                <iframe
                  src={selectedCertificate.iframeLink}
                  className="w-full h-[calc(90vh-120px)] border-0 rounded-lg"
                  title={selectedCertificate.title}
                  allow="fullscreen"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

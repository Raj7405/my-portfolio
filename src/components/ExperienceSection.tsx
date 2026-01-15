import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Front End Developer",
    company: "Appscrip Embedd Software Technologies Pvt. Ltd.",
    location: "Surat, India",
    duration: "Aug 2024 – Present",
    responsibilities: [
      "Website Optimization: Improved site performance and speed by 20–30% through code refactoring and modern web standards.",
      "Payment Integration: Designed and implemented a secure payment processing system using Stripe API.",
      "API Security: Created frontend middleware APIs to protect API keys and sensitive information.",
      "SEO & Marketing: Built SEO-optimized landing pages with the marketing team to increase user acquisition.",
      "Headless CMS: Developed a dynamic and maintainable CMS using Strapi.",
      "UI/UX Development: Created responsive, accessible, and user-friendly interfaces using Bootstrap, Material-UI, and Ant Design.",
    ],
    isCurrent: true,
  },
  {
    role: "React JS Developer Trainee",
    company: "Tagline Infotech",
    location: "India",
    duration: "Apr 2024 – Jul 2024",
    responsibilities: [
      "Learned JavaScript, React.js, and libraries such as react-router-dom and Redux.",
      "Created small-scale projects during the training period.",
      "Contributed to live projects by refactoring code and building components like multi-step forms and credit card validation forms.",
    ],
    isCurrent: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 transform md:-translate-x-1/2 ${
                  exp.isCurrent
                    ? "bg-primary border-primary animate-pulse-glow"
                    : "bg-background border-primary"
                }`}
              />

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                {/* Status Badge */}
                {exp.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Current Role
                  </span>
                )}

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-primary" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {exp.duration}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

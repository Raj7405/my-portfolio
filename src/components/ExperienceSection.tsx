import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/content/experience";

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
          <span className="section-eyebrow">// Career Journey</span>
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
              <div className="surface p-6 rounded-2xl card-hover">
                {/* Status Badge */}
                {exp.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 font-mono text-primary text-xs font-medium mb-4 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.06)]">
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

                {/* Key Project */}
                {exp.keyProject && (
                  <div className="mt-6 pt-6 border-t border-white/[0.06]">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Key Project: {exp.keyProject.title}
                    </h4>
                    <ul className="space-y-2">
                      {exp.keyProject.bullets.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground text-sm"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

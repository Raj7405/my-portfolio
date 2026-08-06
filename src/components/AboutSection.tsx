import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap, Code2 } from "lucide-react";
import { profile } from "@/content/profile";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: `${profile.yearsOfExperience}`, icon: Calendar },
    { label: "Location", value: profile.locationShort, icon: MapPin },
    { label: "Degree", value: profile.education.degree, icon: GraduationCap },
    { label: "Focus", value: "Full-Stack SaaS", icon: Code2 },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Passionate Software Engineer
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                {profile.summary}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I hold a <span className="text-foreground font-medium">{profile.education.degree}</span> from{" "}
                <span className="text-foreground font-medium">{profile.education.school}</span> (CGPA: {profile.education.gpa}).
                Currently working as a Software Developer at{" "}
                <span className="text-primary font-medium">3Embed Software Technologies (Appscrip)</span> in Bangalore,
                building scalable SaaS applications across the full development lifecycle — from frontend interfaces and backend APIs to database integration and production deployment.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border card-hover"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

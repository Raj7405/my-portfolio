import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap, Code2 } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "1.5+", icon: Calendar },
    { label: "Location", value: "Surat, India", icon: MapPin },
    { label: "Degree", value: "B.E. Computer Eng.", icon: GraduationCap },
    { label: "Focus", value: "Frontend Dev", icon: Code2 },
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
              Passionate Frontend Developer
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
                With over 1.5 years of experience as a Frontend Developer and a 
                robust academic background in Computer Engineering from Pacific 
                School of Engineering (GTU), I am dedicated to crafting dynamic 
                and efficient web solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My expertise lies in leveraging <span className="text-foreground font-medium">Next.js</span> and{" "}
                <span className="text-foreground font-medium">React</span> to deliver exceptional user experiences 
                that drive engagement and satisfaction. I have a strong commitment to continuous 
                learning and innovation, which enables me to adapt to evolving technologies 
                and industry trends.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm passionate about creating intuitive interfaces and enhancing usability 
                across every project I undertake. Currently working at{" "}
                <span className="text-primary font-medium">Appscrip Embedd Software Technologies</span>, 
                where I focus on website optimization, payment integration, and SEO-optimized 
                development.
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

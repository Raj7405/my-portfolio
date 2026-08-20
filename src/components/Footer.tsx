import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

import { profile } from "@/content/profile";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: profile.social.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    href: profile.social.github,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profile.email}`,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span className="text-xl font-bold text-gradient">RC</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              © {currentYear} Rajendra Chaudhari. Made with{" "}
              <Heart size={14} className="text-primary fill-primary" />
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-[280ms] hover:text-primary hover:border-primary/35"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

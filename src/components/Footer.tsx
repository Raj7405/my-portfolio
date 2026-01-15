import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rajendra-chaudhari-079",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Raj7405/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:rajendra.m.chaudhari7405@gmail.com",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
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
                className="text-muted-foreground hover:text-primary transition-colors"
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

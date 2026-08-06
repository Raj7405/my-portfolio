export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Saga", "Zustand", "React Query", "Context API"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Backend & APIs",
    skills: ["REST API", "Node.js", "Express.js", "GraphQL", "Firebase", "SQL", "MongoDB", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UI Libraries",
    skills: ["Tailwind CSS", "Radix UI", "Material UI", "Ant Design", "Bootstrap", "Framer Motion"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "React Profiler"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Build Tools",
    skills: ["Webpack", "Babel", "Vite", "NPM"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Deployment & DevOps",
    skills: ["Vercel", "Netlify", "PM2", "Docker", "CI/CD"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "AI-Assisted Development",
    skills: ["Cursor", "ChatGPT", "Claude", "Prompt Engineering", "AI-assisted debugging", "AI-assisted code review"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Tools",
    skills: ["Git", "Pull Requests", "Code Reviews", "GitHub", "Bitbucket", "Figma", "Strapi CMS", "Postman"],
    color: "from-slate-500 to-gray-500",
  },
];

export interface Certificate {
  title: string;
  description: string;
  iframeLink: string;
  certificateLink: string;
}

export const certificates: Certificate[] = [
  {
    title: "Frontend Developer (React)",
    description:
      "HackerRank — Completed Frontend Developer challenges evaluating general understanding of React fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/b9355c861cac",
    certificateLink: "https://www.hackerrank.com/certificates/b9355c861cac",
  },
  {
    title: "React Certificate",
    description:
      "HackerRank — Completed React challenges evaluating general understanding of React fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/f3d553ead694",
    certificateLink: "https://www.hackerrank.com/certificates/f3d553ead694",
  },
  {
    title: "JavaScript Certificate",
    description:
      "HackerRank — Completed JavaScript challenges evaluating general understanding of language fundamentals.",
    iframeLink: "https://www.hackerrank.com/certificates/iframe/b46668d50633",
    certificateLink: "https://www.hackerrank.com/certificates/b46668d50633",
  },
];

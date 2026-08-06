export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  isCurrent?: boolean;
  keyProject?: {
    title: string;
    bullets: string[];
  };
}

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "3Embed Software Technologies Pvt Ltd (Appscrip)",
    location: "Bangalore, Karnataka",
    duration: "Aug 2024 – Present",
    isCurrent: true,
    responsibilities: [
      "Developed and maintained scalable applications, collaborating with cross-functional teams to deliver customer-facing features from design through production.",
      "Built reusable components, shared utilities, and scalable UI patterns while integrating 100+ internal and third-party REST APIs using secure implementation practices.",
      "Improved application performance by 20–30% through code refactoring, lazy loading, and rendering optimizations, while integrating payment, authentication, real-time communication, and CMS services.",
      "Participated in Agile development, code reviews, debugging, production support, and Git-based release workflows to ensure high-quality software delivery.",
      "Leveraged AI-assisted development tools to improve engineering productivity, debugging efficiency, and overall code quality.",
    ],
    keyProject: {
      title: "Commercial Employer & Worker Portal (FlexCrew USA)",
      bullets: [
        "Led end-to-end frontend development of a multi-role SaaS platform for workers and employers.",
        "Architected reusable UI components, custom hooks, and shared utilities — reducing duplicate code by ~30%.",
        "Integrated 100+ REST APIs with secure authentication and middleware-based request handling.",
        "Built SEO-optimized Next.js landing pages, increasing organic traffic by 25–30%.",
      ],
    },
  },
  {
    role: "Junior Front End Developer Intern",
    company: "Tagline Infotech",
    location: "Surat, Gujarat",
    duration: "Apr 2024 – Jul 2024",
    responsibilities: [
      "Started professional frontend development by contributing to live web projects.",
      "Built responsive UI pages using HTML, CSS, JavaScript, Bootstrap, and React.js.",
      "Assisted in integrating APIs, fixing bugs, and implementing new features.",
      "Developed responsive React components for production web applications.",
      "Collaborated with senior developers on feature development, bug fixing, and API integration.",
    ],
  },
  {
    role: "React JS Developer",
    company: "Freelance",
    location: "India",
    duration: "Apr 2024 – Jul 2024",
    responsibilities: [
      "Developed front end for a blockchain BNB-based MLM platform.",
      "Implemented 3D model UI features for enhanced interactivity.",
      "Designed an admin panel to manage users and perform administrative operations.",
      "Integrated backend and blockchain functionality with frontend components.",
      "Established session management and state management for improved user experience.",
    ],
  },
];

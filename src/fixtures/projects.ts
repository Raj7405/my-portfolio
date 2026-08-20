export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  detailedDescription?: string;
  whatWeDid?: string[];
  liveLink?: string;
  githubLink?: string;
  proof?: {
    type: "image" | "video" | "link";
    url: string;
    title?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "flexcrew-job-portal",
    title: "Commercial Employer & Worker Portal",
    description:
      "Multi-role SaaS platform for workers and employers — end-to-end frontend development with authentication, job posting, worker onboarding, and application tracking.",
    tech: ["Next.js", "React.js", "MQTT", "Redux", "Strapi CMS", "Firebase", "Bitbucket"],
    image: "/projects-images/flexcrew.png",
    category: "Production SaaS",
    detailedDescription:
      "Led the end-to-end frontend development of a multi-role SaaS platform for workers and employers, delivering responsive and scalable user experiences from requirement analysis to production deployment.",
    whatWeDid: [
      "Architected reusable UI components, custom hooks, higher-order components (HOCs), shared utility functions, and common styling systems — reducing duplicate code by ~30%.",
      "Built complex multi-step workflows including authentication, profile management, job posting, worker onboarding, application tracking, and form validation with optimized state management.",
      "Integrated 100+ internal and third-party REST APIs with secure authentication, middleware-based request handling, and environment-driven configuration.",
      "Developed SEO-optimized landing pages using Next.js, improving organic search visibility and increasing website traffic by 25–30%.",
      "Collaborated with Product, Design, QA, and Backend teams using Agile practices, Git workflows, code reviews, and CI/CD pipelines.",
    ],
    liveLink: "https://website.flexcrewusa.com/",
    proof: [
      { type: "image", url: "/projects-images/Flexcrew-proofs/home-screen-hero.png", title: "Home — Hero Section" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/home-screen-how-it-works.png", title: "Home — How It Works" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/employer-job-posting-screen.png", title: "Employer — Job Posting" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/employer-my-shift.png", title: "Employer — My Shifts" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/employer-shift-approval-screen.png", title: "Employer — Shift Approval" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/worker-new-job-screen.png", title: "Worker — New Jobs" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/worker-my-job-screen.png", title: "Worker — My Jobs" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/worker-history-screen.png", title: "Worker — Job History" },
      { type: "image", url: "/projects-images/Flexcrew-proofs/worker-waller-screen.png", title: "Worker — Wallet" },
    ],
  },
  {
    id: "2",
    slug: "care-connect",
    title: "Care Connect — Healthcare Booking Platform",
    description:
      "Full-stack healthcare platform with React frontend and Node.js/Express REST APIs for appointment booking, provider management, and real-time updates.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase", "MQTT", "Stripe", "Google Maps"],
    image: "/projects-images/mobile-medical.png",
    category: "Full Stack",
    detailedDescription:
      "Developed a full-stack healthcare platform by building responsive React interfaces and Node.js/Express REST APIs for appointment booking, provider management, and user workflows.",
    whatWeDid: [
      "Designed secure backend services with authentication, request validation, and database operations, integrating MongoDB, Firebase, and third-party APIs.",
      "Built real-time features using MQTT and Firebase Cloud Messaging (FCM) for live appointment updates, notifications, and location tracking.",
      "Integrated Stripe payments, Google Maps, and Typesense search for secure transactions, location-aware provider discovery, and relevance-ranked search.",
      "Optimized frontend performance using TanStack Query for API caching, background synchronization, and efficient server-state management.",
      "Collaborated across the full development lifecycle — API design, frontend implementation, debugging, testing, and deployment.",
    ],
    liveLink: "https://mobile-medical-direct-website-theta.vercel.app/",
    proof: [
      { type: "image", url: "/projects-images/MMD-proof/home-service-screen.png", title: "Home — Service Selection" },
      { type: "image", url: "/projects-images/MMD-proof/doctor-listing-screen.png", title: "Doctor Listing" },
      { type: "image", url: "/projects-images/MMD-proof/doctor-appointment-schedule-screen.png", title: "Appointment Scheduling" },
      { type: "image", url: "/projects-images/MMD-proof/cart-screen.png", title: "Cart" },
      { type: "image", url: "/projects-images/MMD-proof/order-tracking.png", title: "Order Tracking" },
      { type: "image", url: "/projects-images/MMD-proof/subcription-flow.png", title: "Subscription Flow" },
      { type: "image", url: "/projects-images/MMD-proof/profile-screen.png", title: "Profile" },
    ],
  },
  {
    id: "3",
    slug: "ai-developer-productivity",
    title: "AI Developer Productivity & Task Automation Tool",
    description:
      "AI-powered engineering platform that analyzes commits, detects repositories, generates AI-assisted effort estimates, and produces structured progress reports.",
    tech: ["React", "TypeScript", "OpenAI SDK", "Bitbucket", "GitHub"],
    image: "/projects-images/ai-assistance.png",
    category: "Internal Tool",
    detailedDescription:
      "Developed an AI-powered engineering productivity platform that automatically analyzes commits, detects repositories, generates AI-assisted effort estimates, and produces structured progress reports.",
    whatWeDid: [
      "Built an AI-powered platform that analyzes commits, detects repositories, and generates AI-assisted effort estimates.",
      "Implemented AI-driven task summarization and developer activity tracking, reducing manual reporting effort by 70%+.",
      "Leveraged LLM-assisted workflows and prompt engineering to improve sprint visibility and engineering productivity.",
    ],
    proof: [{ type: "image", url: "/projects-images/ai-assistance.png", title: "Dashboard" }],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

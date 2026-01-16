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
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with Stripe payment integration, dynamic product catalog, and SEO-optimized pages. Built with Next.js and Strapi CMS.",
    tech: ["Next.js", "React", "Strapi", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Full Stack",
    detailedDescription: "A comprehensive e-commerce solution built from the ground up, featuring a modern tech stack and seamless user experience. The platform handles everything from product management to secure payment processing.",
    whatWeDid: [
      "Implemented Stripe payment gateway with secure checkout flow",
      "Built dynamic product catalog with filtering and search functionality",
      "Created SEO-optimized pages with meta tags and structured data",
      "Integrated Strapi CMS for content management",
      "Developed responsive design with Tailwind CSS",
      "Optimized performance with Next.js server-side rendering"
    ],
    liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/example/ecommerce",
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop", title: "Homepage" },
      { type: "image", url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop", title: "Product Page" }
    ]
  },
  {
    id: "2",
    slug: "seo-landing-pages",
    title: "SEO Landing Pages",
    description:
      "High-performance, SEO-optimized landing pages built for marketing campaigns. Achieved 20-30% improvement in site performance through modern web standards.",
    tech: ["Next.js", "Tailwind CSS", "SEO", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Marketing",
    detailedDescription: "A series of high-converting landing pages designed for marketing campaigns, optimized for search engines and user engagement.",
    whatWeDid: [
      "Achieved 20-30% performance improvement through code optimization",
      "Implemented comprehensive SEO strategies with meta tags and schema",
      "Built responsive designs for all device sizes",
      "Integrated analytics for conversion tracking",
      "Optimized Core Web Vitals for better search rankings",
      "Created A/B testing framework for campaign optimization"
    ],
    liveLink: "https://example-landing.com",
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop", title: "Landing Page Design" }
    ]
  },
  {
    id: "3",
    slug: "headless-cms-dashboard",
    title: "Headless CMS Dashboard",
    description:
      "A dynamic and maintainable content management system built with Strapi, featuring custom content types and user-friendly admin interface.",
    tech: ["Strapi", "Node.js", "React", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Backend",
    detailedDescription: "A powerful headless CMS solution that provides flexible content management capabilities with a modern admin interface.",
    whatWeDid: [
      "Designed and implemented custom content types in Strapi",
      "Built RESTful APIs for content delivery",
      "Created user-friendly admin dashboard",
      "Implemented role-based access control",
      "Developed custom plugins for extended functionality",
      "Set up automated content workflows"
    ],
    githubLink: "https://github.com/example/cms",
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop", title: "CMS Dashboard" }
    ]
  },
  {
    id: "4",
    slug: "payment-processing-system",
    title: "Payment Processing System",
    description:
      "Secure payment processing integration using Stripe API with frontend middleware for API key protection and enhanced security measures.",
    tech: ["Stripe API", "React", "Node.js", "Security"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    category: "Fintech",
    detailedDescription: "A secure payment processing system that protects sensitive data while providing a smooth checkout experience.",
    whatWeDid: [
      "Integrated Stripe payment gateway with secure tokenization",
      "Created frontend middleware to protect API keys",
      "Implemented PCI DSS compliance measures",
      "Built error handling and retry mechanisms",
      "Developed payment webhook handlers",
      "Added comprehensive logging and monitoring"
    ],
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop", title: "Payment Flow" }
    ]
  },
  {
    id: "5",
    slug: "multi-step-form-component",
    title: "Multi-Step Form Component",
    description:
      "Reusable multi-step form component with validation, progress tracking, and credit card validation. Built during training at Tagline Infotech.",
    tech: ["React.js", "Redux", "Form Validation"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Component",
    detailedDescription: "A highly reusable form component that handles complex multi-step workflows with validation and state management.",
    whatWeDid: [
      "Built multi-step form with progress indicator",
      "Implemented comprehensive form validation",
      "Added credit card validation with Luhn algorithm",
      "Integrated Redux for state management",
      "Created reusable form field components",
      "Added accessibility features (ARIA labels, keyboard navigation)"
    ],
    githubLink: "https://github.com/example/multistep-form",
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop", title: "Form Component" }
    ]
  },
  {
    id: "6",
    slug: "responsive-ui-components",
    title: "Responsive UI Components",
    description:
      "Collection of accessible, responsive UI components built with Bootstrap, Material-UI, and Ant Design for various client projects.",
    tech: ["Bootstrap", "Material-UI", "Ant Design", "React"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    category: "UI/UX",
    detailedDescription: "A comprehensive library of accessible and responsive UI components designed for various client projects.",
    whatWeDid: [
      "Created responsive components with Bootstrap",
      "Built Material Design components with Material-UI",
      "Developed custom components with Ant Design",
      "Ensured WCAG accessibility compliance",
      "Implemented dark mode support",
      "Created comprehensive component documentation"
    ],
    githubLink: "https://github.com/example/ui-components",
    proof: [
      { type: "image", url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop", title: "Component Library" }
    ]
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get project by id
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};


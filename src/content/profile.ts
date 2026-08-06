export const SITE_URL = "https://www.rajendra-chaudhari.fun";

export const YEARS_OF_EXPERIENCE = "2+";

export const profile = {
  name: "Rajendra Chaudhari",
  title: "Software Engineer",
  tagline: "Building Scalable SaaS Applications",
  location: "Surat, Gujarat, India",
  locationShort: "Surat, India",
  email: "rajendra740590@gmail.com",
  phone: "+91 7405909258",
  yearsOfExperience: YEARS_OF_EXPERIENCE,
  availableForWork: true,
  summary:
    "Software Engineer with 2+ years of experience building scalable SaaS applications using React.js, Next.js, TypeScript, Node.js, Express.js, REST APIs, and modern web technologies. Experienced in developing responsive frontend applications, building backend APIs, integrating databases, and collaborating across the software development lifecycle. Passionate about AI-assisted development, performance optimization, and delivering high-quality software solutions.",
  social: {
    linkedin: "https://www.linkedin.com/in/rajendra-chaudhari-079",
    github: "https://github.com/Raj7405",
    portfolio: SITE_URL,
  },
  education: {
    degree: "B.E. Computer Engineering",
    school: "Gujarat Technological University, Surat, Gujarat",
    gpa: "8.00",
    graduation: "2020 – 2024",
  },
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  resumePdfPath: "/Rajendra_Chaudhari_Resume.pdf",
} as const;

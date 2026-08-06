import { profile } from "@/content/profile";
import { experiences } from "@/content/experience";
import { skillCategories, certificates } from "@/content/skills";
import { projects } from "@/fixtures/projects";

const headingStyle = {
  color: "#1e3a8a",
  borderBottom: "2px solid #1e3a8a",
  paddingBottom: "5px",
  marginTop: "30px",
  fontSize: "20px",
} as const;

export const Resume = () => {
  return (
    <div
      className="resume-container border-2 border-gray-300 rounded-lg"
      style={{
        fontFamily: '"Segoe UI", Arial, sans-serif',
        background: "#f4f6f8",
        margin: 0,
        padding: "20px",
        color: "#222",
      }}
    >
      <div
        className="resume"
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          padding: "40px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "5px", color: "#1e3a8a", letterSpacing: "1px" }}>
          {profile.name}
        </h1>
        <div style={{ textAlign: "center", fontSize: "18px", marginBottom: "15px", fontWeight: 600 }}>
          {profile.title}
        </div>
        <div style={{ textAlign: "center", fontSize: "14px", marginBottom: "30px" }}>
          <a href={`mailto:${profile.email}`} style={{ color: "#1e3a8a", textDecoration: "none" }}>
            {profile.email}
          </a>
          &nbsp; • &nbsp; {profile.phone} &nbsp; • &nbsp;
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1e3a8a", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          &nbsp; • &nbsp;
          <a
            href={profile.social.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1e3a8a", textDecoration: "none" }}
          >
            Portfolio
          </a>
        </div>

        <h2 style={headingStyle}>About</h2>
        <p style={{ lineHeight: 1.6, fontSize: "15px" }}>{profile.summary}</p>

        <h2 style={headingStyle}>Skills</h2>
        {skillCategories.map((category) => (
          <p key={category.title} style={{ lineHeight: 1.6, fontSize: "15px", marginBottom: "8px" }}>
            <strong>{category.title}:</strong> {category.skills.join(", ")}
          </p>
        ))}

        <h2 style={headingStyle}>Professional Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.company} style={{ marginTop: "15px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>{exp.role}</div>
            <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
              {exp.company} — {exp.location} &nbsp; | &nbsp; {exp.duration}
            </div>
            <ul style={{ paddingLeft: "20px" }}>
              {exp.responsibilities.map((item) => (
                <li key={item} style={{ marginBottom: "8px", lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
            {exp.keyProject && (
              <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
                <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "6px" }}>
                  Key Project: {exp.keyProject.title}
                </div>
                <ul style={{ paddingLeft: "20px" }}>
                  {exp.keyProject.bullets.map((item) => (
                    <li key={item} style={{ marginBottom: "6px", lineHeight: 1.5, fontSize: "14px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <h2 style={headingStyle}>Education</h2>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontSize: "15px" }}>
          <div>
            <strong>{profile.education.degree}</strong>
            <br />
            {profile.education.school}
            <br />
            CGPA: {profile.education.gpa}
          </div>
          <div>{profile.education.graduation}</div>
        </div>

        <h2 style={headingStyle}>Projects</h2>
        {projects.map((project) => (
          <div key={project.slug} style={{ marginTop: "12px" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>{project.title}</div>
            <div style={{ fontSize: "13px", color: "#555", marginBottom: "6px" }}>
              {project.tech.join(" · ")}
            </div>
            <p style={{ lineHeight: 1.5, fontSize: "14px", margin: "0 0 8px" }}>{project.description}</p>
            {project.whatWeDid && (
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {project.whatWeDid.map((item) => (
                  <li key={item} style={{ marginBottom: "4px", lineHeight: 1.5, fontSize: "14px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2 style={headingStyle}>Certificates</h2>
        {certificates.map((cert) => (
          <p key={cert.title} style={{ lineHeight: 1.6, fontSize: "15px" }}>
            <strong>{cert.title}</strong> —{" "}
            <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" style={{ color: "#1e3a8a" }}>
              HackerRank
            </a>
          </p>
        ))}

        <h2 style={headingStyle}>Languages</h2>
        <div style={{ fontSize: "15px" }}>
          {profile.languages.map((lang) => (
            <span key={lang} style={{ marginRight: "20px" }}>
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

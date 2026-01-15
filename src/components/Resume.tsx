export const Resume = () => {
  return (
    <div className="resume-container border-2 border-gray-300 rounded-lg" style={{ fontFamily: '"Segoe UI", Arial, sans-serif', background: '#f4f6f8', margin: 0, padding: '20px', color: '#222' }}>
      <div 
        className="resume" 
        style={{
          maxWidth: '900px',
          margin: 'auto',
          background: '#fff',
          padding: '40px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '5px', color: '#1e3a8a', letterSpacing: '1px' }}>
          Rajendra Chaudhari
        </h1>
        <div style={{ textAlign: 'center', fontSize: '18px', marginBottom: '15px', fontWeight: 600 }}>
          Front End Developer
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', marginBottom: '30px' }}>
          Surat, GJ 395007 &nbsp; • &nbsp; 7405909258 &nbsp; • &nbsp;
          <a href="mailto:rajendra.m.chaudhari7405@gmail.com" style={{ color: '#1e3a8a', textDecoration: 'none' }}>
            rajendra.m.chaudhari7405@gmail.com
          </a>
          &nbsp; • &nbsp;
          <a href="https://www.linkedin.com/in/rajendra-chaudhari-079" target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a', textDecoration: 'none' }}>
            LinkedIn
          </a>
          &nbsp; • &nbsp;
          <a href="https://rajendra-fe.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a', textDecoration: 'none' }}>
            Portfolio
          </a>
        </div>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Professional Summary
        </h2>
        <p style={{ lineHeight: 1.6, fontSize: '15px' }}>
          Strong academic foundation in Computer Engineering with over 1.7 years of experience as a Frontend Developer. Proficient in Next.js and React, delivering high-quality web solutions that enhance user engagement. Committed to continuous learning and adapting to new technologies and industry trends. Focused on creating intuitive interfaces that improve usability across all projects.
        </p>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Skills
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px' }}>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>HTML & CSS</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>React.js and Next.js</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>TypeScript</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>State management (Redux and Zustand)</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>Bootstrap and Tailwind CSS</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>Version control (GIT)</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>Node.js and Express.js</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>Strapi Integration</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>SEO optimization</div>
          <div style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '20px' }}>Stripe payment integration</div>
        </div>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Experience
        </h2>
        <div style={{ marginTop: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Front End Developer</div>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
            Appscrip Embedd Software Technologies Pvt. Ltd. — Surat, India
            &nbsp; | &nbsp; 08/2024 – Current
          </div>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>Website Optimization:</strong> Improved site performance and speed by 20–30% through code refactoring and modern web standards.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>Payment Integration:</strong> Designed and implemented a secure payment processing system using Stripe API.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>API Security:</strong> Created frontend middleware APIs to protect API keys and sensitive information.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>SEO & Marketing:</strong> Built SEO-optimized landing pages with the marketing team to increase user acquisition.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>Headless CMS:</strong> Developed a dynamic and maintainable CMS using Strapi.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              <strong>UI/UX Development:</strong> Created responsive, accessible, and user-friendly interfaces using Bootstrap, Material-UI, and Ant Design.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px' }}>React JS Developer</div>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
            Freelance &nbsp; | &nbsp; 04/2024 – 07/2024
          </div>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              Developed front end for Blockchain BNB-based MLM platform.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              Implemented 3D model UI features for enhanced interactivity.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              Designed admin panel to manage users and perform administrative operations.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              Integrated backend and blockchain functionality with frontend components.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: 1.5 }}>
              Established session management and state management for improved user experience.
            </li>
          </ul>
        </div>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Certificates
        </h2>
        <p style={{ lineHeight: 1.6, fontSize: '15px' }}>
          <strong>JavaScript Certificate</strong> — HackerRank
        </p>
        <p style={{ lineHeight: 1.6, fontSize: '15px' }}>
          By attempting JavaScript challenges on the HackerRank website, I obtained this certificate. These challenges focused on two problems of JavaScript which evaluated my general understanding of the language.
        </p>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Languages
        </h2>
        <div style={{ fontSize: '15px' }}>
          <span style={{ marginRight: '20px' }}>English</span>
          <span style={{ marginRight: '20px' }}>Hindi</span>
          <span style={{ marginRight: '20px' }}>Gujarati</span>
          <span style={{ marginRight: '20px' }}>Marathi</span>
        </div>

        <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginTop: '30px', fontSize: '20px' }}>
          Education
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '15px' }}>
          <div>
            <strong>Bachelor of Engineering – Computer Engineering</strong><br />
            Pacific School of Engineering, GTU<br />
            GPA: 8.00
          </div>
          <div>01/2024</div>
        </div>
      </div>
    </div>
  );
};


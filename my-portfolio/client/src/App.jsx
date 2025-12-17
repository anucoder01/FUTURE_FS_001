import React, { useState } from 'react';
import { Mail, Briefcase, FileText, Home, Code, Users, Linkedin, Github, Download, Send, Phone, Star, Activity } from 'lucide-react';

// --- Configuration Data (PERSONALIZED) ---
const userData = {
  name: "Anuvuti Podder",
  title: "B.Tech CSE Student | Web Development Enthusiast",
  intro: "Motivated and enthusiastic student passionate about web development and problem-solving. Actively learning through projects and coursework, I aim to build real-world applications and gain hands-on industry experience. My focus is on creating responsive, intuitive user interfaces.",
  skills: [
    { name: "HTML & CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "React.js (Basics)", icon: "react" },
    { name: "Python", icon: "python" },
    { name: "C / C++", icon: "c" },
    { name: "Tools: VS Code, Git, Docker", icon: "tools" },
  ],
  // Using relevant club activities/leadership roles as "Experience" highlights
  experience: [
    {
      role: "Marketing Coordinator",
      company: "IT VIRTUOSO CLUB (GAT, BLR)",
      duration: "Apr 2025 - Present (Expected)",
      description: "Marketed and done branding for 2+ events, including HACK-A-LEAGUE (a national hackathon). Hosted and Emceed for 5+ events, demonstrating strong communication and stage presentation skills."
    },
    {
      role: "Event Managing",
      company: "KALAPARVA CULTURAL CLUB (GAT, BLR)",
      duration: "Sep 2023 – Feb 2025",
      description: "Organized and advertised 4+ events and shows at GAT, BLR at yearly events like INTERACT. Participated and performed as a part of the fashion team."
    },
  ],
  socials: {
    github: "https://github.com/anucoder01",
    linkedin: "https://www.linkedin.com/in/anuvuti-podder-5b607a27a",
    email: "anuvutipodder205@gmail.com",
    phone: "+91-8310448921",
    // Resume link points to the public asset path
    resumeUrl: "/assets/anuvuti_podder_resume.pdf" 
  }
};

const projectData = [
  {
    id: 1,
    title: "AI Goal Realizer (Conceptual Project)",
    description: "A website that transforms 'lost' or childhood dreams into personalized, actionable roadmaps. Features custom task trackers, customizable timelines, and integrates crucial content moderation logic for user safety (e.g., providing helpline numbers and motivational responses for sensitive input).",
    techStack: ["React.js", "AI/NLP Concepts", "JavaScript", "UX/Safety Design"],
    imagePlaceholder: "https://placehold.co/600x400/293241/22d3ee?text=AI+Goal+Realizer"
  },
  {
    id: 2,
    title: "Ghost Dodger Game",
    description: "A browser-based arcade game where the player dodges falling ghosts using keyboard controls. Features include implemented collision detection, a real-time scoring system, and smooth animation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imagePlaceholder: "https://placehold.co/600x400/293241/22d3ee?text=Ghost+Dodger+Game"
  },
  {
    id: 3,
    title: "Random Joke Generator",
    description: "An interactive web utility that displays random jokes upon a button click. Developed using JavaScript to handle user interaction and dynamic DOM updates for a fun user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imagePlaceholder: "https://placehold.co/600x400/293241/22d3ee?text=Joke+Generator"
  },
  {
    id: 4,
    title: "HR Web App/Website (In Progress)",
    description: "Designing a responsive website to showcase live feed, resume, and contact information about employees. The goal is to simplify coordination for remote employees and the HR team.",
    techStack: ["HTML", "CSS", "JavaScript", "Design"],
    imagePlaceholder: "https://placehold.co/600x400/293241/22d3ee?text=HR+Web+App"
  }
];

// Using Certifications and Achievements for the Testimonials/Endorsements section
const testimonialsData = [
    {
        quote: "Actively pursuing Generative AI courses from Google Cloud Skills Boost.",
        source: "AI Skill Development"
    },
    {
        quote: "Certifications in various coding languages from Infosys Springboard, Cisco, and AWS.",
        source: "External Certifications"
    },
    {
        quote: "Participated and interacted actively in the yearly Bangalore Tech Summits.",
        source: "Industry Engagement"
    }
];

// --- Utility Components ---

const NavItem = ({ icon: Icon, title, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`nav-item ${isActive ? 'active' : ''}`}
  >
    <Icon className="w-5 h-5" />
    <span className="title">{title}</span>
  </button>
);

const SectionTitle = ({ children }) => (
  <h2 className="section-title">
    {children}
  </h2>
);

// --- Page Components ---

const HomeSection = ({ onNavigate }) => (
  <section className="hero-section">
    <div className="max-w-4xl mx-auto">
      <img
        src="https://placehold.co/160x160/293241/22d3ee?text=AP" 
        alt={`${userData.name} Profile`}
        className="profile-img"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/160x160/293241/22d3ee?text=AP" }}
      />
      <h1 className="hero-title">
        Hi, I'm <span className="accent-text">{userData.name}</span>
      </h1>
      <p className="hero-subtitle">{userData.title}</p>
      <p className="hero-intro">
        {userData.intro}
      </p>
      <div className="btn-group">
        <button
          onClick={() => onNavigate('projects')}
          className="btn-primary"
        >
          <Briefcase className="w-5 h-5" /> View My Work
        </button>
        <a
          href={userData.socials.resumeUrl}
          download={`${userData.name.replace(/\s/g, '_')}_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Download className="w-5 h-5" /> Download Resume
        </a>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <SectionTitle>My Expertise</SectionTitle>
    <div className="skills-grid">
      {userData.skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <Code className="skill-icon" />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>

    <div className="text-center" style={{ marginTop: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '1rem' }}>Coursework & Core Focus</h3>
        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '42rem', margin: '0 auto' }}>
            I have a strong foundation in Data Analysis, Software Engineering, Operating Systems, Algorithms, and Artificial Intelligence from my B.Tech CSE coursework (CGPA: 8.5/10). I complement this with active, independent development work.
        </p>
    </div>
  </section>
);

const AboutSection = () => (
    <section className="py-20 px-4 max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="card-container">
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{userData.intro}</p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
                I am deeply committed to continuous learning and applying industry standards to all my work. My academic foundation in Computer Science Engineering, combined with practical club leadership and projects, allows me to bridge the gap between theoretical knowledge and real-world execution.
            </p>
        </div>

        <h3 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '1.5rem', borderBottom: '1px solid #475569', paddingBottom: '0.5rem' }}>Leadership & Activities</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {userData.experience.map((job, index) => (
                <div key={index} className="experience-card">
                    <div className="experience-header">
                        <h4 className="experience-role">{job.role}</h4>
                        <span className="experience-duration">{job.duration}</span>
                    </div>
                    <p className="experience-company">{job.company}</p>
                    <p className="experience-description">{job.description}</p>
                </div>
            ))}
            <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                <a
                  href={userData.socials.resumeUrl}
                  download={`${userData.name.replace(/\s/g, '_')}_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-resume"
                >
                  <FileText style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} /> View Full Resume (PDF)
                </a>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-20 px-4 max-w-6xl mx-auto">
        <SectionTitle>Certifications & Achievements</SectionTitle>
        <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <div>
                        <Star style={{ width: '1.5rem', height: '1.5rem', color: '#facc15', marginBottom: '0.75rem', fill: 'currentColor' }} />
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                    </div>
                    <p className="testimonial-source">— {testimonial.source}</p>
                </div>
            ))}
        </div>
        <div style={{ marginTop: '2.5rem', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>
            <p>I am currently building independent frontend projects to further strengthen my development skills.</p>
        </div>
    </section>
);


const ProjectsSection = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <SectionTitle>Featured Projects</SectionTitle>
    <div className="projects-grid">
      {projectData.map(project => (
        <div key={project.id} className="project-card">
          <img
            src={project.imagePlaceholder}
            alt={`Screenshot of ${project.title}`}
            className="project-img"
            onError={(e) => { e.target.onerror = null; e.target.src=project.imagePlaceholder }}
          />
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-tag-group">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <p className="project-links-placeholder">Links will be added once the projects are deployed.</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // IMPORTANT: This URL points to your local backend. Change this to your deployed backend URL in production!
  const API_URL = 'http://localhost:5000/api/contact'; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Content Moderation Check (Conceptual, shows safety focus)
    const harshWords = ['kill', 'revenge', 'suicide', 'hurt myself', 'hate myself'];
    const messageLower = formData.message.toLowerCase();

    const containsHarshWord = harshWords.some(word => messageLower.includes(word));

    if (containsHarshWord) {
        setStatus("Thank you for reaching out. If you are experiencing distress, please call a national helpline immediately. Here is a motivational response: 'Remember that seeking help is a sign of strength, and your dreams are worth fighting for. Take the next step toward a brighter future.'");
        // For local simplicity, we stop the API call here to show the safety message immediately.
        return; 
    }


    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.msg || 'Message sent and saved successfully! I will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.msg || 'Error: Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Network Error: Could not reach the server. Is the backend running on port 5000?');
    }
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <SectionTitle>Get In Touch</SectionTitle>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2.5rem' }}>
        Have a project idea or a question? I'm always open to new opportunities. Send me a message!
      </p>

      <div className="contact-form-container">
        {/* The form now posts data to your Node.js API */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Your detailed message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-submit"
          >
            <Send style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} /> Send Message
          </button>
        </form>

        {status && (
          <div className={`status-message ${status.startsWith('Message sent') ? 'status-success' : 'status-error'}`}>
            {status}
          </div>
        )}

        <div className="direct-contact-info">
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>Or contact me directly:</h4>
            <div className="contact-links">
                <a href={`mailto:${userData.socials.email}`} className="contact-link-item">
                    <Mail style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.25rem' }} /> {userData.socials.email}
                </a>
                <span style={{ color: '#475569' }}>|</span>
                <span className="contact-link-item" style={{ color: 'var(--color-text-secondary)' }}>
                    <Phone style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.25rem' }} /> {userData.socials.phone}
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component (Navigation and Rendering) ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeSection onNavigate={navigate} />
            <SkillsSection />
            <ProjectsSection />
          </>
        );
      case 'about':
        return (
            <>
                <AboutSection />
                <TestimonialsSection />
            </>
        );
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={navigate} />;
    }
  };

  return (
    // App Container uses the base styles defined in App.css
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="logo-text">
            <h1 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'var(--color-accent)' }}>{userData.name.split(' ')[0]}</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Portfolio</p>
        </div>
        <div className="sidebar-nav-container">
          <NavItem icon={Home} title="Home" onClick={() => navigate('home')} isActive={currentPage === 'home'} />
          <NavItem icon={FileText} title="About / Resume" onClick={() => navigate('about')} isActive={currentPage === 'about'} />
          <NavItem icon={Briefcase} title="Projects" onClick={() => navigate('projects')} isActive={currentPage === 'projects'} />
          <NavItem icon={Mail} title="Contact" onClick={() => navigate('contact')} isActive={currentPage === 'contact'} />
          <div style={{ paddingTop: '1rem', borderTop: '1px solid #475569', marginTop: '1rem', width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: '0.5rem' }}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', padding: '0.5rem' }}>
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        &copy; {new Date().getFullYear()} {userData.name}. Built with React, Node.js, and Custom CSS.
      </footer>
    </div>
  );
};

export default App;
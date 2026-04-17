import './Projects.css'

const projects = [
  {
    id: 1,
    featured: true,
    title: 'Sign Language Detection AI',
    subtitle: 'Featured AI Project',
    description:
      'A real-time AI system that translates sign language gestures into text and voice output. Built with a CNN architecture trained on a custom dataset of 11,000+ videos, featuring batch preprocessing for memory optimization and integrated voice synthesis.',
    features: [
      'Real-time gesture recognition via CNN',
      '11,000+ video dataset with batch preprocessing',
      'Integrated voice-to-text & text-to-speech',
      'Full-stack system with Flask authentication',
      'Memory-optimized training pipeline'
    ],
    tech: ['Python', 'TensorFlow/Keras', 'CNN', 'OpenCV', 'Flask', 'SQLAlchemy'],
    color: '#6c63ff',
    emoji: '🤖'
  },
  {
    id: 2,
    featured: false,
    title: 'Teshay Delivery Website',
    subtitle: 'Full-Stack Web App',
    description:
      'A responsive food delivery web application featuring a clean, intuitive UI/UX design. Includes a structured homepage, interactive menu system, and a seamless ordering workflow focused on usability across all devices.',
    features: [
      'Clean, responsive UI/UX design',
      'Structured menu and ordering system',
      'Mobile-first responsive layout',
      'Optimized for performance and usability'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQLAlchemy'],
    color: '#00d4aa',
    emoji: '🍔'
  },
  {
    id: 3,
    featured: false,
    title: 'Wedding Planner System',
    subtitle: 'Event Planning Platform',
    description:
      'A comprehensive event planning web platform that helps users organize wedding services, scheduling, and budgeting. Features a user-friendly interface with structured data handling for seamless event management.',
    features: [
      'Service and vendor management',
      'Budget tracking and scheduling tools',
      'User-friendly event dashboard',
      'Structured data handling'
    ],
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    color: '#ff6b9d',
    emoji: '💍'
  },
  {
    id: 4,
    featured: false,
    title: 'Nu Gizu E-Commerce Platform',
    subtitle: 'E-Commerce Solution',
    description:
      'A scalable e-commerce website for product browsing and purchasing. Includes product listings, category navigation, and user interaction features — designed with scalability and an optimized user experience in mind.',
    features: [
      'Product listings with category filtering',
      'User interaction and cart features',
      'Scalable architecture design',
      'Clean and intuitive shopping UI'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    color: '#ffd166',
    emoji: '🛒'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of projects spanning AI systems, full-stack web apps, and real-world problem solving.
          </p>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <div className="featured-badge">
            <span>⭐ Featured Project</span>
          </div>
          <div className="featured-content">
            <div className="featured-left">
              <div className="project-emoji-large">{projects[0].emoji}</div>
              <h3 className="featured-title">{projects[0].title}</h3>
              <p className="featured-desc">{projects[0].description}</p>
              <div className="featured-features">
                {projects[0].features.map((f, i) => (
                  <div key={i} className="feature-item">
                    <span className="feature-dot" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-right">
              <div className="featured-visual">
                <div className="ai-visual">
                  <div className="ai-circle">
                    <span>CNN</span>
                  </div>
                  <div className="ai-nodes">
                    {['Input', 'Conv', 'Pool', 'Dense', 'Output'].map((n, i) => (
                      <div key={i} className="ai-node" style={{ animationDelay: `${i * 0.2}s` }}>
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="featured-tech">
                {projects[0].tech.map(t => (
                  <span key={t} className="tech-badge featured-tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://github.com/sitotabelay" target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="projects-grid">
          {projects.slice(1).map(project => (
            <div key={project.id} className="project-card" style={{ '--card-color': project.color }}>
              <div className="card-top">
                <span className="project-emoji">{project.emoji}</span>
                <span className="project-subtitle-badge">{project.subtitle}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-features">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="project-footer">
                <div className="tech-list">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/sitotabelay" target="_blank" rel="noopener noreferrer" className="btn-project-ghost">
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

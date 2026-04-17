import './About.css'
import profileImg from '../../assets/sx.JPG'

const skills = [
  {
    category: 'AI & Machine Learning',
    icon: '🧠',
    color: '#6c63ff',
    items: ['Deep Learning', 'CNN', 'Computer Vision', 'TensorFlow/Keras', 'OpenCV', 'Jupyter']
  },
  {
    category: 'Software Development',
    icon: '💻',
    color: '#00d4aa',
    items: ['Python', 'Flask', 'HTML & CSS', 'JavaScript', 'Flutter', 'SQLAlchemy']
  },
  {
    category: 'Tools & Technologies',
    icon: '🛠',
    color: '#ff6b9d',
    items: ['Git & GitHub', 'REST APIs', 'Batch Preprocessing', 'Voice-to-Text', 'Authentication Systems']
  }
]

const strengths = [
  { icon: '🔍', text: 'Strong problem-solving and analytical skills' },
  { icon: '⚡', text: 'Experience building end-to-end AI systems' },
  { icon: '📊', text: 'Ability to handle large datasets and optimize performance' },
  { icon: '🚀', text: 'Fast learner with continuous improvement mindset' }
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">The Developer Behind the Code</h2>
          <p className="section-subtitle">
            A results-driven AI developer with a strong academic background and hands-on experience
            building intelligent systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <div className="bio-card">
              <div className="bio-header">
                <div className="bio-avatar">
                <img src={profileImg} alt="Sitota Belay" className="bio-avatar-img" />
              </div>
                <div>
                  <h3>Sitota Belay</h3>
                  <p className="bio-role">AI Developer & CS Graduate</p>
                </div>
              </div>
              <p className="bio-text">
                I'm a Computer Science graduate with a CGPA of 3.73, specializing in Artificial
                Intelligence and full-stack development. My passion lies in bridging the gap between
                cutting-edge research and real-world applications — from building CNN-based sign language
                detection systems to deploying full-stack web platforms.
              </p>
              <p className="bio-text">
                I thrive on solving complex problems with clean, efficient code and have a proven track
                record of working with large datasets (11,000+ videos), optimizing deep learning pipelines,
                and delivering production-ready AI solutions.
              </p>

              <div className="education-card">
                <div className="edu-icon">🎓</div>
                <div className="edu-info">
                  <h4>Bachelor of Science — Computer Science</h4>
                  <p className="edu-university">Madda Walabu University</p>
                  <p className="edu-meta">CGPA: <strong>3.73</strong> &nbsp;|&nbsp; National Exit Exam: <strong>68%</strong></p>
                  <p className="edu-note">Strong academic performance demonstrating analytical depth and readiness for AI/software engineering roles.</p>
                </div>
              </div>

              <div className="strengths-list">
                {strengths.map((s, i) => (
                  <div key={i} className="strength-item">
                    <span className="strength-icon">{s.icon}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-skills">
            {skills.map((group) => (
              <div key={group.category} className="skill-group" style={{ '--group-color': group.color }}>
                <div className="skill-group-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-pills">
                  {group.items.map(skill => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

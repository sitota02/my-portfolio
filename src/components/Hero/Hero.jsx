import { useState, useEffect } from 'react'
import './Hero.css'
import profileImg from '../../assets/sx.JPG'

const roles = [
  'Artificial Intelligence Developer',
  'Full Stack Developer',
  'Mobile App Developer',
  'Video Editor',
  'Content Creator'
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="grid-lines" />
      </div>

      <div className="hero-container">

        {/* Left — Text Content */}
        <div className="hero-right">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sitota Belay</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="typed-text">
              {displayed}<span className="cursor">|</span>
            </span>
            <br />
            <span className="hero-sub-line">Computer Science Graduate · BSc CGPA 3.73</span>
          </h2>

          <p className="hero-desc">
            I design and deploy end-to-end AI systems — from computer vision pipelines
            to full-stack web applications. Passionate about turning complex data into
            intelligent, real-world solutions.
          </p>

          <div className="hero-tags">
            {['Deep Learning', 'Computer Vision', 'CNN', 'Python', 'Flask', 'Full-Stack'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">3.73</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">4+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">11K+</span>
              <span className="stat-label">Dataset</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">68%</span>
              <span className="stat-label">Exit Exam</span>
            </div>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="hero-left">
          <div className="profile-ring">
            <img src={profileImg} alt="Sitota Belay" className="profile-img" />
          </div>
        </div>

      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <div className="scroll-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'sitotabelay95@gmail.com',
    href: 'mailto:sitotabelay95@gmail.com',
    color: '#6c63ff'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+251 986 728 880',
    href: 'tel:+251986728880',
    color: '#00d4aa'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/sitotabelay',
    href: 'https://github.com/sitotabelay',
    color: '#ff6b9d'
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sitotabelay',
    href: 'https://linkedin.com/in/sitotabelay',
    color: '#ffd166'
  }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:sitotabelay95@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    window.open(mailto, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Open to full-time roles, freelance projects, and collaborations in AI, ML, and software engineering.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-desc">
              Whether you have an AI project that needs building, a position to fill, or just want to connect —
              I'd love to hear from you.
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ '--link-color': link.color }}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Currently Available</p>
                <p className="avail-sub">Open to full-time AI/ML and Software Engineering roles</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                {sent ? '✅ Message Sent!' : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

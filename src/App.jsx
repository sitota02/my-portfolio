import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

const footerLinks = {
  Navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/sitotabelay', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sitotabelay', external: true },
    { label: 'Email', href: 'mailto:sitotabelay95@gmail.com' },
  ],
}

function Footer() {
  const scrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>SB<span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Artificial Intelligence Developer &<br />Computer Science Graduate
          </p>
          <p className="footer-university">
            🎓 Madda Walabu University
          </p>
          <div className="footer-status">
            <span className="status-dot" />
            Open to opportunities
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer-col">
            <h4 className="footer-col-title">{group}</h4>
            <ul className="footer-col-links">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => scrollTo(e, link.href)}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact snippet */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-list">
            <a href="mailto:sitotabelay95@gmail.com" className="footer-contact-item">
              <span>✉️</span> sitotabelay95@gmail.com
            </a>
            <a href="tel:+251986728880" className="footer-contact-item">
              <span>📱</span> +251 986 728 880
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} <strong>Sitota Belay</strong>. All rights reserved.</p>
          <p className="footer-built">
            Built with
            <span className="footer-tech-badge">React</span>
            <span className="footer-tech-badge">Vite</span>
            <span className="footer-heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

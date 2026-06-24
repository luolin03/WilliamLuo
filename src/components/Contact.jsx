import './Contact.css'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const SOCIALS = [
  { href: 'mailto:william.luo@example.com', icon: FiMail, label: 'Email' },
  { href: 'https://github.com/', icon: FiGithub, label: 'GitHub' },
  { href: 'https://twitter.com/', icon: FiTwitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/', icon: FiLinkedin, label: 'LinkedIn' },
]

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2>Get in touch</h2>
        <p className="contact-text">
          Always open to interesting conversations, collaborations, and
          opportunities. Feel free to reach out via email or find me on
          the platforms below.
        </p>
        <div className="social-links">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              className="social-link"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

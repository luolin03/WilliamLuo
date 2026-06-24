import './Papers.css'
import { FiFileText, FiExternalLink } from 'react-icons/fi'

const PAPERS = [
  {
    title: 'AVENA: An AI-Native Approach to Personalized Nutrition Tracking',
    venue: 'Preprint, 2025',
    links: [
      { label: 'PDF', href: '#', icon: FiFileText },
      { label: 'arXiv', href: '#', icon: FiExternalLink },
    ],
  },
]

export default function Papers() {
  return (
    <section id="papers" className="section reveal">
      <div className="container">
        <p className="section-label">Papers</p>
        <div className="papers-list">
          {PAPERS.length > 0 ? (
            PAPERS.map(({ title, venue, links }) => (
              <div key={title} className="paper-item">
                <div className="paper-info">
                  <h3 className="paper-title">{title}</h3>
                  <p className="paper-venue">{venue}</p>
                </div>
                <div className="paper-links">
                  {links.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} className="link paper-link">
                      <Icon size={13} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="paper-empty">
              Papers coming soon. Check back later or follow my{' '}
              <a href="#" className="link">
                Google Scholar
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

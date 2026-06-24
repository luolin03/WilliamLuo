import './Projects.css'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    title: 'AVENA',
    description:
      'An AI-native health & nutrition app that uses computer vision and LLMs to track and analyze your daily diet.',
    link: '#',
    github: null,
  },
  {
    title: 'Project Alpha',
    description:
      'Placeholder for your next project. Describe what you built and what you learned in one or two sentences.',
    link: null,
    github: '#',
  },
  {
    title: 'Project Beta',
    description:
      'Another placeholder. Keep descriptions concise — one or two lines is perfect.',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2>Things I've built</h2>
        <div className="projects-list">
          {PROJECTS.map(({ title, description, link, github }) => (
            <div key={title} className="project-item">
              <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
              </div>
              <div className="project-links">
                {link && (
                  <a href={link} className="link project-link" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={14} />
                    <span>Visit</span>
                  </a>
                )}
                {github && (
                  <a href={github} className="link project-link" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

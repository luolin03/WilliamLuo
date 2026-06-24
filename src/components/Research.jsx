import './Research.css'

const INTERESTS = [
  {
    title: 'AI Agents',
    description:
      'Building autonomous agents that reason, plan, and interact with tools and humans in meaningful ways.',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Understanding and generating human language — from semantic search to conversational AI.',
  },
  {
    title: 'Human-AI Interaction',
    description:
      'Designing interfaces and interaction paradigms that make AI systems intuitive and trustworthy.',
  },
  {
    title: 'Machine Learning Systems',
    description:
      'Engineering scalable, reliable ML pipelines from data to deployment.',
  },
]

export default function Research() {
  return (
    <section id="research" className="section reveal">
      <div className="container">
        <p className="section-label">Research Interests</p>
        <h2>What I think about</h2>
        <div className="research-grid">
          {INTERESTS.map(({ title, description }) => (
            <div key={title} className="research-card">
              <h3 className="research-card-title">{title}</h3>
              <p className="research-card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

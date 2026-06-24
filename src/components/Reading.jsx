import './Reading.css'

const BOOKS = [
  {
    title: 'Designing Machine Learning Systems',
    author: 'Chip Huyen',
    status: 'Reading',
  },
  {
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Russell & Norvig',
    status: 'Re-reading',
  },
  {
    title: 'The Alignment Problem',
    author: 'Brian Christian',
    status: 'Up next',
  },
]

export default function Reading() {
  return (
    <section id="reading" className="section reveal">
      <div className="container">
        <p className="section-label">Reading</p>
        <div className="reading-grid">
          {BOOKS.map(({ title, author, status }) => (
            <div key={title} className="reading-card">
              <span className={`reading-status reading-status--${status.toLowerCase().replace(/\s+/g, '-')}`}>
                {status}
              </span>
              <h3 className="reading-title">{title}</h3>
              <p className="reading-author">{author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

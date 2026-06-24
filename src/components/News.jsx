import './News.css'

const NEWS_ITEMS = [
  {
    date: '2025.06',
    text: 'Launched personal website built with React + Vite.',
  },
  {
    date: '2025.05',
    text: 'Completed AVENA MVP — AI-powered nutrition tracking app with real LLM integration.',
  },
  {
    date: '2025.01',
    text: 'Started exploring AI agent architectures and human-AI collaboration patterns.',
  },
]

export default function News() {
  return (
    <section id="news" className="section reveal">
      <div className="container">
        <p className="section-label">News</p>
        <div className="news-list">
          {NEWS_ITEMS.map(({ date, text }) => (
            <div key={date} className="news-item">
              <time className="news-date">{date}</time>
              <span className="news-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

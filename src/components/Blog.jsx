import './Blog.css'

const POSTS = [
  {
    title: 'Coming soon',
    date: null,
    description: 'Technical notes and thoughts on AI, engineering, and product design.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section reveal">
      <div className="container">
        <p className="section-label">Blog</p>
        <div className="blog-list">
          {POSTS.map(({ title, date, description }) => (
            <a key={title} href="#" className="blog-item">
              <div className="blog-info">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-desc">{description}</p>
              </div>
              {date && <time className="blog-date">{date}</time>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.css'
import { FiArrowLeft } from 'react-icons/fi'

const POSTS = [
  {
    slug: 'hello-world',
    title: 'Hello, world',
    date: '2025.06.24',
    description:
      'Welcome to my blog. Here I write about AI, engineering, and things I learn along the way.',
  },
]

export default function Blog() {
  const [activePost, setActivePost] = useState(null)

  if (activePost) {
    return (
      <section id="blog" className="section">
        <div className="container">
          <button className="blog-back" onClick={() => setActivePost(null)}>
            <FiArrowLeft size={14} />
            Back
          </button>
          <article className="blog-post">
            <ReactMarkdown>{activePost.content}</ReactMarkdown>
          </article>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="section reveal">
      <div className="container">
        <p className="section-label">Blog</p>
        <div className="blog-list">
          {POSTS.map(({ slug, title, date, description }) => (
            <button
              key={slug}
              className="blog-item"
              onClick={async () => {
                const res = await fetch(`/posts/${slug}.md`)
                const content = await res.text()
                setActivePost({ slug, title, content })
              }}
            >
              <div className="blog-info">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-desc">{description}</p>
              </div>
              <time className="blog-date">{date}</time>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

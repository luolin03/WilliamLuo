import { useState } from 'react'
import { marked } from 'marked'
import './Blog.css'
import { FiArrowLeft } from 'react-icons/fi'

// Import .md files at BUILD TIME
import helloWorldRaw from '../posts/hello-world.md?raw'
import gamingRaw from '../posts/联机模式.md?raw'

const POSTS = [
  {
    slug: 'hello-world',
    title: 'Hello, world',
    date: '2025.06.24',
    description:
      'Welcome to my blog. Here I write about AI, engineering, and things I learn along the way.',
    raw: helloWorldRaw,
  },
  {
    slug: 'gaming',
    title: '测试博客功能',
    date: '2025.06.25',
    description: 'Just a TEST',
    raw: gamingRaw,
  },
]

export default function Blog() {
  const [activeSlug, setActiveSlug] = useState(null)
  const post = POSTS.find((p) => p.slug === activeSlug)

  return (
    <section id="blog" className="section reveal">
      <div className="container">
        {post ? (
          /* ——— Post detail ——— */
          <>
            <button
              className="blog-back"
              onClick={() => setActiveSlug(null)}
            >
              <FiArrowLeft size={14} />
              Back to blog
            </button>
            <article
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: marked.parse(post.raw) }}
            />
          </>
        ) : (
          /* ——— Post list ——— */
          <>
            <p className="section-label">Blog</p>
            <div className="blog-list">
              {POSTS.map(({ slug, title, date, description }) => (
                <button
                  key={slug}
                  className="blog-item"
                  onClick={() => setActiveSlug(slug)}
                >
                  <div className="blog-info">
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-desc">{description}</p>
                  </div>
                  <time className="blog-date">{date}</time>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

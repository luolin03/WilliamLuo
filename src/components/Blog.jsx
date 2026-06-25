import { useState, useEffect, useRef } from 'react'
import { marked } from 'marked'
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
  {
    slug: '联机模式',
    title: '测试博客功能',
    date: '2025.06.25',
    description: 'Just a TEST',
  },
]

export default function Blog() {
  const [activePost, setActivePost] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const listRef = useRef(null)

  // When switching back to list view, reveal it immediately
  useEffect(() => {
    if (!activePost && listRef.current) {
      setRevealed(false)
      const el = listRef.current
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        },
        { threshold: 0.05 }
      )
      observer.observe(el)
      // Fallback: show after 300ms even if not in viewport
      const timer = setTimeout(() => setRevealed(true), 300)
      return () => {
        observer.disconnect()
        clearTimeout(timer)
      }
    }
  }, [activePost])

  if (activePost) {
    return (
      <section id="blog" className="section">
        <div className="container">
          <button className="blog-back" onClick={() => setActivePost(null)}>
            <FiArrowLeft size={14} />
            Back
          </button>
          <article
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: marked(activePost.content) }}
          />
        </div>
      </section>
    )
  }

  return (
    <section
      id="blog"
      className={`section reveal${revealed ? ' revealed' : ''}`}
      ref={listRef}
    >
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
                setActivePost({ content })
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

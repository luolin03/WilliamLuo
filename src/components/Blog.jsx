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

function renderMarkdown(content) {
  try {
    return marked(content)
  } catch {
    return content.replace(/</g, '&lt;').replace(/\n/g, '<br/>')
  }
}

export default function Blog() {
  const [activePost, setActivePost] = useState(null)
  const [html, setHtml] = useState('')
  const [revealed, setRevealed] = useState(false)
  const listRef = useRef(null)
  const postRef = useRef(null)

  // Reveal logic for list view
  useEffect(() => {
    if (activePost) return
    setRevealed(false)
    const el = listRef.current
    if (!el) return
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
    const timer = setTimeout(() => setRevealed(true), 400)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [activePost])

  // Scroll post into view
  useEffect(() => {
    if (activePost && postRef.current) {
      setTimeout(() => {
        postRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [activePost])

  const openPost = async (slug) => {
    try {
      const res = await fetch(`/posts/${slug}.md`)
      const text = await res.text()
      setHtml(renderMarkdown(text))
      setActivePost(slug)
    } catch {
      setHtml('<p>Failed to load post.</p>')
      setActivePost(slug)
    }
  }

  const closePost = () => setActivePost(null)

  return (
    <>
      {activePost && (
        <section id="blog" className="section" ref={postRef} style={{ paddingTop: '8rem' }}>
          <div className="container">
            <button className="blog-back" onClick={closePost}>
              <FiArrowLeft size={14} />
              Back
            </button>
            <article
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      )}

      <section
        id={activePost ? undefined : 'blog'}
        className={`section reveal${revealed ? ' revealed' : ''}`}
        ref={listRef}
        style={activePost ? { display: 'none' } : undefined}
      >
        <div className="container">
          <p className="section-label">Blog</p>
          <div className="blog-list">
            {POSTS.map(({ slug, title, date, description }) => (
              <button
                key={slug}
                className="blog-item"
                onClick={() => openPost(slug)}
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
    </>
  )
}

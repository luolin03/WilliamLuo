import { useState, useEffect, useRef } from 'react'
import { marked } from 'marked'
import './Blog.css'
import { FiArrowLeft } from 'react-icons/fi'

// Import .md files at BUILD TIME — zero runtime fetch, zero failures
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

// Local scroll-reveal for list view — survives mount/unmount cycles
function useRevealOnMount(ref) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setRevealed(false)
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    // Guarantee visibility after a short grace period
    const t = setTimeout(() => setRevealed(true), 350)
    return () => {
      obs.disconnect()
      clearTimeout(t)
    }
  }, [ref])

  return revealed
}

export default function Blog() {
  const [activeSlug, setActiveSlug] = useState(null)
  const listRef = useRef(null)
  const revealed = useRevealOnMount(listRef)

  const post = POSTS.find((p) => p.slug === activeSlug)

  // ---- Post detail ----
  if (post) {
    return (
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <button className="blog-back" onClick={() => setActiveSlug(null)}>
            <FiArrowLeft size={14} />
            Back to blog
          </button>
          <article
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.raw) }}
          />
        </div>
      </section>
    )
  }

  // ---- Post list ----
  return (
    <section
      id="blog"
      className="section"
      ref={listRef}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="container">
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
      </div>
    </section>
  )
}

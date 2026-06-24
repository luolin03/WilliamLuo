import './Hero.css'

export default function Hero() {
  return (
    <header className="hero section reveal">
      <div className="container">
        <img src="/avatar.jpg" alt="William Luo" className="hero-avatar" />
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">William Luo</h1>
        <p className="hero-name-cn">罗林</p>
        <p className="hero-tagline">
          I build things at the intersection of AI and human experience.
        </p>
        <p className="hero-bio">
          A researcher and engineer passionate about making intelligence
          accessible, useful, and beautiful. Currently exploring the
          frontier of AI agents and human-AI collaboration.
        </p>
      </div>
    </header>
  )
}

import './About.css'

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <p className="section-label">About</p>
        <h2>A bit about me</h2>
        <div className="about-text">
          <p>
            I'm William (Lin Luo), currently based in China. My work sits at the
            intersection of artificial intelligence, software engineering, and
            product design. I'm driven by the belief that the best technology
            disappears — it feels natural, intuitive, and human.
          </p>
          <p>
            When I'm not building AI systems, you'll find me reading research
            papers, writing about technology, or exploring how machine learning
            can solve real-world problems in health, education, and creativity.
          </p>
        </div>
      </div>
    </section>
  )
}

import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section-head">
        <span className="section-index">03</span>
        <h2 className="section-title">Tech Stack</h2>
        <span className="section-rule" />
      </Reveal>

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <Reveal key={cat.category} className="skill-panel panel" delay={i * 0.08}>
            <div className="skill-cat">
              <span className="idx">0{i + 1}/</span> {cat.category}
            </div>
            <div className="skill-tags">
              {cat.items.map((name) => (
                <span key={name} className="skill-tag" data-hover>
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

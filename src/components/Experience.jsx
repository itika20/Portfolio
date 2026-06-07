import { experience } from '../data'
import Reveal from './Reveal'

// Render **bold** segments as <strong> to highlight impact keywords
function withImpact(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="impact">{part.slice(2, -2)}</strong>
      : part
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-head">
        <span className="section-index">02</span>
        <h2 className="section-title">Work Experience</h2>
        <span className="section-rule" />
      </Reveal>

      <div className="exp-list">
        {experience.map((e, i) => (
          <Reveal key={e.role} className="exp panel" delay={i * 0.08}>
            <div className="exp-left">
              <div className="exp-period">{e.period}</div>
              {e.current && (
                <span className="exp-badge live">
                  <span className="dot" />
                  {e.status}
                </span>
              )}
              <div className="exp-company">{e.company}</div>
            </div>

            <div className="exp-right">
              <h3 className="exp-role">{e.role}</h3>
              <ul className="exp-points">
                {e.points.map((p, idx) => (
                  <li key={idx}><span>{withImpact(p)}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

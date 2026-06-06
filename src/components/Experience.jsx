import { experience } from '../data'
import Reveal from './Reveal'

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
              <p className="exp-summary">{e.summary}</p>
              {e.points.length > 1 && (
                <ul className="exp-points">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

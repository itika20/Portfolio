import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { education, achievements } from '../data'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal className="section-head">
        <span className="section-index">05</span>
        <h2 className="section-title">Education & Credentials</h2>
        <span className="section-rule" />
      </Reveal>

      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal key={e.school} className="edu panel" delay={i * 0.06}>
            <div className="edu-top">
              <span className="edu-period">{e.period}</span>
              <span className="edu-grade">{e.grade}</span>
            </div>
            <div className="edu-degree">
              <GraduationCap size={16} style={{ verticalAlign: '-2px', marginRight: 7, color: 'var(--green)' }} />
              {e.degree}
            </div>
            <div className="edu-school">{e.school}</div>
          </Reveal>
        ))}
      </div>

      <Reveal className="eyebrow" delay={0.1} as="div">
        <div style={{ margin: '46px 0 18px' }}>// certifications &amp; achievements</div>
      </Reveal>

      <div className="ach-grid">
        {achievements.map((a, i) => (
          <Reveal key={a.label} className="ach panel" delay={i * 0.05}>
            <span className={`ach-ico ${a.type}`}>
              {a.type === 'cert' ? <BadgeCheck size={20} /> : <Award size={20} />}
            </span>
            <span className="ach-label">{a.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

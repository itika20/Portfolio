import { ExternalLink, Heart, Music } from 'lucide-react'
import { interests } from '../data'
import Reveal from './Reveal'

const icons = { heart: Heart, music: Music }

function Card({ it }) {
  const Icon = icons[it.icon] || Heart
  return (
    <>
      <span className={`interest-ico ${it.icon}`}>
        <Icon size={20} />
      </span>
      <div className="interest-body">
        <div className="interest-top">
          <span className="interest-tag">{it.tag}</span>
          {it.url && <ExternalLink size={15} className="interest-link" />}
        </div>
        <h3 className="interest-name">{it.name}</h3>
        <div className="interest-role">{it.role}</div>
        <p className="interest-desc">{it.description}</p>
        {it.url && <span className="interest-cta">visit the shop →</span>}
      </div>
    </>
  )
}

export default function Interests() {
  return (
    <section id="interests" className="section">
      <Reveal className="section-head">
        <span className="section-index">06</span>
        <h2 className="section-title">Other Interests</h2>
        <span className="section-rule" />
      </Reveal>

      <div className="interest-grid">
        {interests.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.08}>
            {it.url ? (
              <a href={it.url} target="_blank" rel="noreferrer" className="interest panel" data-hover>
                <Card it={it} />
              </a>
            ) : (
              <div className="interest panel">
                <Card it={it} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

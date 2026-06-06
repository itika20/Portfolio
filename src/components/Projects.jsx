import { workProjects, personalProjects } from '../data'
import Reveal from './Reveal'

function Project({ p, i }) {
  return (
    <Reveal className="proj panel" delay={i * 0.07}>
      <div className="proj-top">
        <span className="proj-tag">{p.tag}</span>
      </div>
      <h3 className="proj-name">{p.name}</h3>
      <p className="proj-desc">{p.description}</p>
      <div className="proj-stack">
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </Reveal>
  )
}

function trackGlow(e) {
  const card = e.target.closest('.proj')
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - r.left}px`)
  card.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectSection({ id, index, title, items }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title}</h2>
        <span className="section-rule" />
      </Reveal>

      <div className="proj-grid" onMouseMove={trackGlow}>
        {items.map((p, i) => (
          <Project key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}

export function WorkProjects() {
  return (
    <ProjectSection id="work" index="04" title="Work @ JP Morgan" items={workProjects} />
  )
}

export function PersonalProjects() {
  return (
    <ProjectSection id="projects" index="05" title="Built for Myself" items={personalProjects} />
  )
}

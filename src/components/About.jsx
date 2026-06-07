import Reveal from './Reveal'

const tags = ['Java', 'Python', 'React', 'Angular', 'Spring Boot', 'AWS', 'Anomaly Detection', 'CI/CD', 'TypeScript', 'Scikit-Learn']

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-head">
        <span className="section-index">01</span>
        <h2 className="section-title">System Overview</h2>
        <span className="section-rule" />
      </Reveal>

      <Reveal className="about-card panel" delay={0.05}>
        <span className="panel-label">// readme.md</span>
        <p>
          Software Engineer with <b className="impact">2.5 years</b> building{' '}
          <b className="impact">scalable financial systems</b> and{' '}
          <b className="impact">near-real-time risk workflows</b> at{' '}
          <b className="impact">JP Morgan Chase</b>. I design and ship the UI that operations teams
          trust during volatile markets, backed by Java, Python and cloud-native AWS systems.
          Currently pursuing an <b className="impact">M.Tech in AI/ML at BITS</b> while building
          applied ML expertise in <b className="impact">anomaly detection</b>.
        </p>
        <p>
          My favorite work lives at the seam between <b className="impact">data and interface</b>,
          turning streams of risk signals into dashboards people can act on in seconds. I care about
          clarity under pressure: clean state, honest loading states, and UI that never lies about what the
          system is doing.
        </p>
        <div className="about-tags">
          {tags.map((t) => (
            <span key={t} className="chip" data-hover>{t}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

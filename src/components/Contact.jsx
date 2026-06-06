import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="eyebrow" style={{ marginBottom: 18 }}>// open a connection</div>
        <h2>
          Let's build something <span className="accent">resilient</span>.
        </h2>
        <p>
          Open to roles in UI engineering, full-stack, and applied ML. If you're hiring for
          interfaces that have to stay calm under load — let's talk.
        </p>
      </Reveal>

      <Reveal className="term contact-term" delay={0.1}>
        <div className="term-bar">
          <span className="tb" style={{ background: '#ff5f57' }} />
          <span className="tb" style={{ background: '#febc2e' }} />
          <span className="tb" style={{ background: '#28c840' }} />
          <span style={{ marginLeft: 8 }}>contact — itika</span>
        </div>
        <div className="term-body">
          <div className="term-line"><span className="pr">$</span> whoami</div>
          <div className="term-line"><span className="ok">→</span> {profile.name}</div>
          <div className="term-line"><span className="pr">$</span> cat contact.txt</div>
          <div className="term-line"><span className="ok">→</span> {profile.email}</div>
          <div className="term-line"><span className="ok">→</span> {profile.phone}</div>
          <div className="term-line"><span className="ok">→</span> {profile.location}</div>
          <div className="term-line" style={{ marginBottom: 0 }}>
            <span className="pr">$</span> <span className="caret">&nbsp;</span>
          </div>
        </div>
      </Reveal>

      <Reveal className="contact-actions" delay={0.2}>
        <a href={`mailto:${profile.email}`} className="btn btn-primary" data-hover>
          <Mail size={16} /> Email Me
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost" data-hover>
          <Github size={16} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" data-hover>
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn-ghost" data-hover>
          <Phone size={16} /> Call
        </a>
      </Reveal>
    </section>
  )
}

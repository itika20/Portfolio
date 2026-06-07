import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileDown, Github, Linkedin } from 'lucide-react'
import { profile, profileStats } from '../data'
import { useClock } from '../hooks'

// Typewriter that cycles through the tagline phrases
function useTypewriter(words, { type = 70, pause = 1500, del = 35 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = words[i % words.length]
    let timeout
    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((p) => p + 1)
    } else {
      timeout = setTimeout(() => {
        setText(full.substring(0, deleting ? text.length - 1 : text.length + 1))
      }, deleting ? del : type)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, type, pause, del])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.tagline)
  const now = useClock()
  const clock = now.toLocaleTimeString('en-GB', { hour12: false })
  const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <header id="top" className="hero">
      <div>
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="dot" /> AVAILABLE FOR OPPORTUNITIES · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Itika <span className="accent">Bhattacharjee</span>
        </motion.h1>

        <div className="hero-type">
          &gt; {typed}
          <span className="caret">&nbsp;</span>
        </div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Software Engineer & UI Developer at JP Morgan Chase. I build the near-real-time
          interfaces and risk systems that operations teams trust when markets move.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="#projects" className="btn btn-primary" data-hover>
            View Work <ArrowDown size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost" data-hover>
            <Github size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" data-hover>
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <div className="hero-meta">
          <span>EXP <b>2.5 yrs</b></span>
          <span>FOCUS <b>Risk · UI · ML</b></span>
          <span>STACK <b>Java · Python · React</b></span>
        </div>
      </div>

      <motion.div
        className="term"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="term-bar">
          <span className="tb" style={{ background: '#ff5f57' }} />
          <span className="tb" style={{ background: '#febc2e' }} />
          <span className="tb" style={{ background: '#28c840' }} />
          <span style={{ marginLeft: 8 }}>risk-monitor — itika@jpmc — zsh</span>
          <span style={{ marginLeft: 'auto' }}>{clock}</span>
        </div>
        <div className="term-body">
          <div className="term-line"><span className="pr">$</span> cat profile.json</div>
          <div className="term-line" style={{ color: 'var(--text-faint)' }}>{'{'}</div>
          {profileStats.map((s) => (
            <div className="term-line" key={s.k} style={{ paddingLeft: 16 }}>
              <span className="warn">"{s.k}"</span>
              <span style={{ color: 'var(--text-faint)' }}>:</span>
              <span className="ok">"{s.v}"</span>
            </div>
          ))}
          <div className="term-line" style={{ color: 'var(--text-faint)' }}>{'}'}</div>

          <div className="term-line" style={{ marginTop: 14, marginBottom: 0 }}>
            <span className="pr">$</span> <span className="caret">&nbsp;</span>
          </div>
          <div style={{ marginTop: 10, fontSize: '0.7rem', color: 'var(--text-faint)' }}>
            {date} · all systems nominal
          </div>
        </div>
      </motion.div>
    </header>
  )
}

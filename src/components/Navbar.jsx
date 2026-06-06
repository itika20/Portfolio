import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks'

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'stack' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
  { href: '#interests', label: 'interests' },
]

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-brand">
        IB<span className="blink">_</span>
      </a>

      <div className={`nav-links ${open ? 'nav-menu-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-cta" data-hover>
        ./contact
      </a>

      <button
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </nav>
  )
}

import { profile } from '../data'
import { useClock } from '../hooks'

export default function Footer() {
  const now = useClock()
  return (
    <footer className="footer">
      <span>
        <span className="dot" style={{ marginRight: 8 }} />
        © {now.getFullYear()} {profile.name} · built with React + Vite
      </span>
      <span>
        designed & coded in Mumbai · last render {now.toLocaleTimeString('en-GB', { hour12: false })}
      </span>
    </footer>
  )
}

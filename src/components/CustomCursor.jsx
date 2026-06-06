import { useEffect, useRef } from 'react'

// Two-part custom cursor: a precise dot + a trailing ring that grows over interactive elements
export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) {
        dot.current.style.left = pos.x + 'px'
        dot.current.style.top = pos.y + 'px'
      }
      const target = e.target
      const interactive = target.closest('a, button, .btn, .proj, .chip, .nav-cta, [data-hover]')
      ring.current?.classList.toggle('hover', !!interactive)
    }

    let raf
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) {
        ring.current.style.left = ringPos.x + 'px'
        ring.current.style.top = ringPos.y + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}

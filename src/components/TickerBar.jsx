// Bloomberg-style scrolling ticker pinned to the top of the page
const items = [
  { k: 'JAVA', v: 'EXPERT', up: true },
  { k: 'PYTHON', v: 'EXPERT', up: true },
  { k: 'REACT', v: 'PROD', up: true },
  { k: 'ANGULAR', v: 'PROD', up: true },
  { k: 'AWS', v: 'CERTIFIED', up: true },
  { k: 'RISK-WORKFLOWS', v: 'LIVE', up: true },
  { k: 'ANOMALY-DET', v: 'DEPLOYED', up: true },
  { k: 'MARGIN-ALERTS', v: '~300/day', up: true },
  { k: 'NOTIONAL', v: '$500K/mo', up: true },
  { k: 'RESOLUTION', v: '5d→3d', up: true },
  { k: 'M.TECH-AI/ML', v: 'IN-PROGRESS', up: false },
  { k: 'CI/CD', v: 'STABLE', up: true },
]

function Item({ k, v, up }) {
  return (
    <span className="ticker-item">
      <b>{k}</b> <span className={up ? 'ticker-up' : 'ticker-down'}>{up ? '▲' : '◆'} {v}</span>
    </span>
  )
}

export default function TickerBar() {
  const loop = [...items, ...items]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-tag">
        <span className="dot" /> LIVE
      </div>
      <div className="ticker-track">
        {loop.map((it, i) => (
          <Item key={i} {...it} />
        ))}
      </div>
    </div>
  )
}

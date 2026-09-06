import { useEffect, useState } from 'react'

const navItems = [
  { id: 'top', label: 'Start' },
  { id: 'projects', label: 'Projekte' },
  { id: 'interests', label: 'Interessengebiete' },
  { id: 'skills', label: 'Technologien' },
  { id: 'about', label: 'Über mich' },
  { id: 'experience', label: 'Erfahrung' },
  { id: 'contact', label: 'Kontakt' },
]

function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${elevated ? 'site-nav-elevated' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => scrollToId('top')} aria-label="Nach oben scrollen">
          <span className="brand-mark">MT</span>
          <span>musthamer.github.io</span>
        </button>

        <nav className="nav-links" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToId(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Menü umschalten"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToId(item.id)
                setMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

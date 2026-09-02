import { StatusBadge } from '../components/StatusBadge'
import { siteMeta } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Software-Engineering Portfolio</p>
          <h1>{siteMeta.name}</h1>
          <p className="hero-role">{siteMeta.role}</p>
          <p className="hero-intro">{siteMeta.shortIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Projekte ansehen</a>
            {siteMeta.cvAvailable ? (
              <a className="button ghost" href={siteMeta.cvPath} target="_blank" rel="noreferrer">CV herunterladen</a>
            ) : (
              <button className="button ghost" disabled aria-disabled="true" title="CV wurde noch nicht hochgeladen">CV folgt bald</button>
            )}
          </div>
          <div className="hero-badges">
            <StatusBadge label={siteMeta.availability} />
          </div>
        </div>

        <aside className="hero-panel" aria-label="Aktueller Fokus">
          <img src="/assets/portrait-tech.svg" alt="Abstrakte Entwickler-Illustration" className="hero-portrait" loading="lazy" />
          <h3>Aktueller Fokus</h3>
          <ul>
            <li>Backend-orientierte Anwendungsentwicklung</li>
            <li>Containerisierte Runtime- und Service-Integration</li>
            <li>Zuverlaessiger Datenfluss zwischen UI, API und Datenbank</li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <img src="/assets/code-texture.svg" alt="Abstraktes Code-Muster" className="code-banner" loading="lazy" />
      </div>
    </section>
  )
}

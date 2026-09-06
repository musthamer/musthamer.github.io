import { StatusBadge } from '../components/StatusBadge'
import { siteMeta } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Informatik Portfolio</p>
          <h1>{siteMeta.name}</h1>
          <p className="hero-role">{siteMeta.role}</p>
          <p className="hero-intro">{siteMeta.shortIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Projekte ansehen</a>
            <a className="button ghost" href={siteMeta.githubProfile} target="_blank" rel="noreferrer">GitHub</a>
            {siteMeta.cvAvailable ? (
              <a className="button ghost" href={siteMeta.cvPath} target="_blank" rel="noreferrer">Lebenslauf</a>
            ) : (
              <button className="button ghost" disabled aria-disabled="true" title="Lebenslauf wurde noch nicht bereitgestellt">Lebenslauf (folgt)</button>
            )}
          </div>
          <div className="hero-badges">
            <StatusBadge label={siteMeta.availability} />
          </div>
        </div>

        <aside className="hero-panel" aria-label="Aktueller Fokus">
          <img src="/assets/portrait-tech.svg" alt="Abstrakte Systemarchitektur-Visualisierung" className="hero-portrait" loading="lazy" />
          <h3>Kurzprofil</h3>
          <ul>
            <li>Informatikstudent in Delmenhorst (Deutschland)</li>
            <li>Praxis in IT-Betreuung und Softwareentwicklung</li>
            <li>Interesse an Backend, Web, Datenbanken, Automation und Infrastruktur</li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <img src="/assets/code-texture.svg" alt="Abstraktes Code-Muster" className="code-banner" loading="lazy" />
      </div>
    </section>
  )
}

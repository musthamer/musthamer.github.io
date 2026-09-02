import { StatusBadge } from '../components/StatusBadge'
import { siteMeta } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Software Engineering Portfolio</p>
          <h1>{siteMeta.name}</h1>
          <p className="hero-role">{siteMeta.role}</p>
          <p className="hero-intro">{siteMeta.shortIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            {siteMeta.cvAvailable ? (
              <a className="button ghost" href={siteMeta.cvPath} target="_blank" rel="noreferrer">Download CV</a>
            ) : (
              <button className="button ghost" disabled aria-disabled="true" title="CV not uploaded yet">CV Unavailable</button>
            )}
          </div>
          <div className="hero-badges">
            <StatusBadge label={siteMeta.availability} />
          </div>
        </div>

        <aside className="hero-panel" aria-label="Current focus">
          <h3>Current Focus</h3>
          <ul>
            <li>Backend-oriented application engineering</li>
            <li>Containerized runtime and service integration</li>
            <li>Reliable data flow between UI, API, and database layers</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

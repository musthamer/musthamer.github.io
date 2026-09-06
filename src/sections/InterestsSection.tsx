import { SectionHeading } from '../components/SectionHeading'

const interests = [
  {
    title: 'Softwareentwicklung',
    description: 'Entwicklung praktischer Anwendungen und technischer Lösungen.',
  },
  {
    title: 'Backend und Web',
    description: 'Serverseitige Logik, Datenbanken, Webanwendungen und Schnittstellen.',
  },
  {
    title: 'IT Support und Application Support',
    description: 'Technische Fehleranalyse, Unterstützung bei Software- und Systemproblemen und Betreuung digitaler Abläufe.',
  },
  {
    title: 'Automatisierung',
    description: 'Interesse an der Automatisierung wiederkehrender Abläufe mit Skripten, APIs und technischen Workflows.',
  },
  {
    title: 'KI und intelligente Systeme',
    description: 'Interesse an praktischen KI-Anwendungen, datenbasierten Lösungen und der Verbindung von KI mit Softwareprozessen.',
  },
  {
    title: 'IT-Systeme und Infrastruktur',
    description: 'Interesse an Linux, Docker, Serverdiensten, Netzwerken und zuverlässigen technischen Systemen.',
  },
]

export function InterestsSection() {
  return (
    <section id="interests" className="section-block section-emphasis">
      <div className="container">
        <SectionHeading
          eyebrow="Interessengebiete"
          title="Breiter Informatik-Fokus statt enger Rollenbezeichnung"
          subtitle="Meine Projekte und mein Praxissemester zeigen Interesse an mehreren technischen Bereichen von Software bis Systembetrieb."
        />

        <div className="interests-grid">
          {interests.map((interest) => (
            <article key={interest.title} className="interest-card">
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

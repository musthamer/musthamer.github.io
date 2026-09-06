import { SectionHeading } from '../components/SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="Praxiserfahrung"
          title="Praxissemester in IT-Betreuung und Softwareentwicklung"
          subtitle="Adam und Hawa Kosmetik, Bremen · 09/2025 bis 03/2026"
        />

        <article className="experience-card">
          <h3>Praxissemester</h3>
          <p>
            IT-Betreuung und Softwareentwicklung
            <br />
            Adam und Hawa Kosmetik, Bremen
            <br />
            09/2025 - 03/2026
          </p>

          <ul>
            <li>Betreuung von IT-Systemen, Software und digitalen Arbeitsabläufen</li>
            <li>Technische Fehleranalyse</li>
            <li>Unterstützung bei IT- und Softwarefragen</li>
            <li>Entwicklung und Anpassung kleiner Programme und Softwarelösungen für interne Abläufe</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

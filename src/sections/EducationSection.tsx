import { SectionHeading } from '../components/SectionHeading'

export function EducationSection() {
  return (
    <section id="education" className="section-block">
      <div className="container">
        <SectionHeading eyebrow="Ausbildung" title="Akademischer Hintergrund" subtitle="Fuege bei Bedarf deine exakten Hochschulangaben ein." />

        <article className="education-card">
          <h3>Studium Software Engineering</h3>
          <p>
            TODO_UNIVERSITY_NAME - TODO_CITY_COUNTRY
            <br />
            TODO_START_YEAR - TODO_END_YEAR
          </p>
          <p>Relevante Schwerpunkte: Backend-Entwicklung, Software-Architektur, Datenbanksysteme und Team-Projektumsetzung.</p>
        </article>
      </div>
    </section>
  )
}

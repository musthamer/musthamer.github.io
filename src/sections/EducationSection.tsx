import { SectionHeading } from '../components/SectionHeading'

export function EducationSection() {
  return (
    <section id="education" className="section-block">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic Background" subtitle="Add your exact institution details when ready." />

        <article className="education-card">
          <h3>Software Engineering Program</h3>
          <p>
            TODO_UNIVERSITY_NAME - TODO_CITY_COUNTRY
            <br />
            TODO_START_YEAR - TODO_END_YEAR
          </p>
          <p>Relevant focus: backend development, software architecture, database systems, and collaborative project delivery.</p>
        </article>
      </div>
    </section>
  )
}

import { SectionHeading } from '../components/SectionHeading'

export function EducationSection() {
  return (
    <section id="education" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="Ausbildung"
          title="Ausbildung und Hintergrund"
          subtitle="Der Schwerpunkt liegt auf dem laufenden Informatikstudium und einer technischen Vorbildung."
        />

        <div className="education-grid">
          <article className="education-card">
            <h3>Bachelor Informatik</h3>
            <p>Hochschule Bremerhaven</p>
            <p>seit 10/2022</p>
          </article>

          <article className="education-card">
            <h3>Fachoberschule Technik</h3>
            <p>Schwerpunkt Informatik · BBS II</p>
            <p>2021 - 2022</p>
          </article>

          <article className="education-card">
            <h3>Informationstechnischer Assistent</h3>
            <p>BBS II</p>
            <p>2019 - 2021</p>
          </article>
        </div>
      </div>
    </section>
  )
}

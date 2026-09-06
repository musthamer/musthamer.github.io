import { SectionHeading } from '../components/SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="section-block section-emphasis">
      <div className="container contact-panel">
        <SectionHeading
          eyebrow="Kontakt"
          title="Interesse an einem Austausch oder einer Zusammenarbeit?"
          subtitle="Ich freue mich ueber Kontakte zu Unternehmen und Teams aus dem IT- und Softwarebereich."
        />

        <div className="contact-links">
          <a className="button primary" href="https://github.com/musthamer" target="_blank" rel="noreferrer">GitHub</a>
          <a className="button ghost" href="TODO_LINKEDIN" target="_blank" rel="noreferrer">LinkedIn (TODO)</a>
          <a className="button ghost" href="mailto:TODO_EMAIL">TODO_EMAIL</a>
        </div>
      </div>
    </section>
  )
}

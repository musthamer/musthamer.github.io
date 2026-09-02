import { SectionHeading } from '../components/SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="section-block section-emphasis">
      <div className="container contact-panel">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Reliable" subtitle="I am open to internship and junior software engineering opportunities." />

        <div className="contact-links">
          <a className="button primary" href="TODO_LINKEDIN" target="_blank" rel="noreferrer">LinkedIn (TODO)</a>
          <a className="button ghost" href="mailto:TODO_EMAIL">TODO_EMAIL</a>
        </div>
      </div>
    </section>
  )
}

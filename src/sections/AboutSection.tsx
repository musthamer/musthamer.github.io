import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineering Mindset"
          subtitle="I enjoy building practical systems where backend logic, data reliability, and user-facing workflows meet."
        />

        <div className="about-grid">
          <article>
            <h3>How I Work</h3>
            <p>
              I start from the core problem, define clear interfaces, and implement in small testable steps. My strongest work happens when I can map architecture decisions directly to user impact.
            </p>
          </article>
          <article>
            <h3>What I Value</h3>
            <p>
              Maintainable code, explicit documentation, and reproducible environments. I prefer predictable systems where each service has a clear responsibility.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

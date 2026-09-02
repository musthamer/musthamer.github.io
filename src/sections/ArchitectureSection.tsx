import { SectionHeading } from '../components/SectionHeading'

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-block section-emphasis">
      <div className="container">
        <SectionHeading
          eyebrow="Architecture"
          title="How I Think About Systems"
          subtitle="A high-level flow I typically follow when implementing backend-oriented products."
        />

        <div className="architecture-flow" aria-label="Architecture flow diagram">
          <article>
            <h3>UI Layer</h3>
            <p>Pages and interactions that expose domain workflows clearly and predictably.</p>
          </article>
          <article>
            <h3>Application Layer</h3>
            <p>Controllers/scripts/services that enforce business rules and API contracts.</p>
          </article>
          <article>
            <h3>Data Layer</h3>
            <p>Relational or key-value persistence for durable state and reliable queries.</p>
          </article>
          <article>
            <h3>Operations Layer</h3>
            <p>Containerization, logging, and service supervision to keep systems stable.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

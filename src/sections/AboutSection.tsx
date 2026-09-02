import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="Ueber mich"
          title="Mein Engineering-Ansatz"
          subtitle="Ich baue praktische Systeme, in denen Backend-Logik, Datenqualitaet und nutzernahe Workflows zusammenkommen."
        />

        <div className="about-grid">
          <article>
            <h3>So arbeite ich</h3>
            <p>
              Ich starte beim Kernproblem, definiere klare Schnittstellen und implementiere in kleinen testbaren Schritten. Meine staerkste Arbeit entsteht, wenn Architekturentscheidungen direkt auf den Nutzerwert einzahlen.
            </p>
          </article>
          <article>
            <h3>Was mir wichtig ist</h3>
            <p>
              Wartbarer Code, klare Dokumentation und reproduzierbare Umgebungen. Ich bevorzuge vorhersagbare Systeme, in denen jeder Service eine eindeutige Verantwortung hat.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

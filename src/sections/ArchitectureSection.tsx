import { SectionHeading } from '../components/SectionHeading'

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-block section-emphasis">
      <div className="container">
        <SectionHeading
          eyebrow="Architektur"
          title="Wie ich Systeme aufbaue"
          subtitle="Ein typischer High-Level-Flow, den ich bei backend-orientierten Produkten verfolge."
        />

        <div className="architecture-flow" aria-label="Architekturfluss Diagramm">
          <article>
            <h3>UI-Schicht</h3>
            <p>Seiten und Interaktionen, die Fachprozesse klar und vorhersagbar abbilden.</p>
          </article>
          <article>
            <h3>Applikationsschicht</h3>
            <p>Controller, Skripte und Services, die Business-Regeln und API-Vertraege durchsetzen.</p>
          </article>
          <article>
            <h3>Daten-Schicht</h3>
            <p>Relationale oder Key-Value-Persistenz fuer stabilen Zustand und verlaessliche Abfragen.</p>
          </article>
          <article>
            <h3>Operations-Schicht</h3>
            <p>Containerisierung, Logging und Service-Supervision fuer stabile Systeme im Betrieb.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

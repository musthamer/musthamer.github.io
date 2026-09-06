import { SectionHeading } from '../components/SectionHeading'

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-block section-emphasis">
      <div className="container">
        <SectionHeading
          eyebrow="Architekturdenken"
          title="Vom Browser bis zur Infrastruktur"
          subtitle="Ich arbeite gerne am gesamten technischen Ablauf: Oberflaeche, Business-Logik, Daten und Betriebsstabilitaet."
        />

        <div className="architecture-flow" aria-label="Architekturfluss Diagramm">
          <article>
            <h3>Browser und Frontend</h3>
            <p>Interaktionen, Formulare und Visualisierung als Einstieg in den Prozess.</p>
          </article>
          <article>
            <h3>Backend / API / CGI</h3>
            <p>Servlets, CGI-Endpunkte und Service-Logik fuer Fachregeln, Authentifizierung und Datenfluss.</p>
          </article>
          <article>
            <h3>Datenebene</h3>
            <p>MariaDB, Redis oder SQLite fuer konsistente Speicherung und schnelle Abfragen.</p>
          </article>
          <article>
            <h3>Services und Infrastruktur</h3>
            <p>Docker, Apache, HAProxy, Worker und Monitoring fuer belastbare Laufzeiten.</p>
          </article>
        </div>

        <div className="architecture-tech">
          <span>JavaScript</span>
          <span>Java</span>
          <span>Bash CGI</span>
          <span>MariaDB</span>
          <span>Redis</span>
          <span>Docker</span>
          <span>Apache</span>
          <span>HAProxy</span>
        </div>
      </div>
    </section>
  )
}

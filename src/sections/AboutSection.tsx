import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="Über mich"
          title="Technisches Verständnis über den gesamten Systemfluss"
          subtitle="Ich interessiere mich nicht nur für die sichtbare Oberfläche, sondern auch für Logik, Daten, Sessions, Infrastruktur und die Kommunikation zwischen Diensten."
        />

        <div className="about-grid">
          <article>
            <h3>Wie ich arbeite</h3>
            <p>
              Ich beginne mit dem fachlichen Ziel, zerlege es in technische Bausteine und arbeite mit klaren Schnittstellen zwischen Frontend, Backend und Datenebene. So bleiben Lösungen nachvollziehbar und wartbar.
            </p>
          </article>
          <article>
            <h3>Worauf ich den Fokus lege</h3>
            <p>
              Praktische Lösungen für reale Abläufe: technische Fehleranalyse, robuste Authentifizierungs- und Datenprozesse sowie Systeme, die auch unter Last oder bei Teilausfällen verständlich bleiben.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

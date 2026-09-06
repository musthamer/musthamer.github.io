import { SectionHeading } from '../components/SectionHeading'
import { skillCategories } from '../data/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="section-block">
      <div className="container">
        <SectionHeading
          eyebrow="Technologien"
          title="Technischer Stack aus Studium, Praxis und Projekten"
          subtitle="Schwerpunkte aus Softwareentwicklung, Daten, Infrastruktur und Testing ohne unnötige Buzzword-Erweiterung."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.title} className="skill-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

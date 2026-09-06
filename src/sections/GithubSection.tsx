import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import { siteMeta } from '../data/site'

export function GithubSection() {
  return (
    <section id="github" className="section-block">
      <div className="container">
        <SectionHeading eyebrow="GitHub" title="Repository-Übersicht" subtitle="Direkte Links zu allen verifizierten Repositories aus diesem Portfolio." />

        <div className="github-panel">
          <a href={siteMeta.githubProfile} target="_blank" rel="noreferrer" className="button primary">GitHub-Profil öffnen</a>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">{project.repo}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

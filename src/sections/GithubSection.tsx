import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import { siteMeta } from '../data/site'

export function GithubSection() {
  return (
    <section id="github" className="section-block">
      <div className="container">
        <SectionHeading eyebrow="GitHub" title="Repository Index" subtitle="Direct links to all verified repositories included in this portfolio." />

        <div className="github-panel">
          <a href={siteMeta.githubProfile} target="_blank" rel="noreferrer" className="button primary">Open GitHub Profile</a>
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

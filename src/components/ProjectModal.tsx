import type { ProjectItem } from '../types'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="project-modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose} aria-label="Close details">Close</button>
        </header>

        <p>{project.details.overview}</p>

        <div className="modal-grid">
          <article>
            <h4>Problem</h4>
            <p>{project.details.problem}</p>
          </article>
          <article>
            <h4>Solution</h4>
            <p>{project.details.solution}</p>
          </article>
        </div>

        <article>
          <h4>Architecture</h4>
          <ul>
            {project.details.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <h4>Engineering Challenges</h4>
          <ul>
            {project.details.engineeringChallenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <a href={project.githubUrl} target="_blank" rel="noreferrer">Open Repository</a>
      </section>
    </div>
  )
}

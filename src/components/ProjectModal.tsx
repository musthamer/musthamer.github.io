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
        aria-label={`${project.title} Details`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="project-modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose} aria-label="Details schliessen">Schliessen</button>
        </header>

        <p>{project.details.overview}</p>

        <div className="modal-grid">
          <article>
            <h4>Technische Herausforderung</h4>
            <p>{project.details.challenge}</p>
          </article>
          <article>
            <h4>Loesung</h4>
            <p>{project.details.solution}</p>
          </article>
        </div>

        <article>
          <h4>Architektur</h4>
          <ul>
            {project.details.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <h4>Interessante technische Aspekte</h4>
          <ul>
            {project.details.technicalAspects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <a href={project.githubUrl} target="_blank" rel="noreferrer">Repository oeffnen</a>
      </section>
    </div>
  )
}

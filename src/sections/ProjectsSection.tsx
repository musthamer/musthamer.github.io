import { useMemo, useState } from 'react'
import { ProjectModal } from '../components/ProjectModal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import type { ProjectItem } from '../types'

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectItem['category']>('All')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))] as const, [])

  const visibleProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true
    return project.category === activeCategory
  })

  return (
    <section id="projects" className="section-block section-emphasis">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="All project details below are based on verified repository information and README evidence only."
        />

        <div className="chips" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? 'chip chip-active' : 'chip'} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-challenge">Challenge: {project.challenge}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <button onClick={() => setSelectedProject(project)}>Details</button>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

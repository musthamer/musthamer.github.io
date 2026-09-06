export type ProjectCategory = 'Infrastruktur' | 'Distributed Systems' | 'Backend' | 'Web'

export type ProjectLabel =
  | 'Hochschulprojekt'
  | 'Backend'
  | 'Web'
  | 'Distributed Systems'
  | 'Infrastruktur'
  | 'Java'

export interface ProjectDetail {
  overview: string
  challenge: string
  solution: string
  architecture: string[]
  technicalAspects: string[]
}

export interface ProjectItem {
  id: string
  title: string
  type: string
  year: string
  repo: string
  githubUrl: string
  description: string
  keyIdea: string
  technologies: string[]
  labels: ProjectLabel[]
  category: ProjectCategory
  featured: boolean
  image: string
  imageAlt: string
  highlights: string[]
  details: ProjectDetail
}

export interface SkillCategory {
  title: string
  items: string[]
}

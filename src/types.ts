export type ProjectCategory = 'Systementwicklung' | 'Backend' | 'Webanwendung'

export interface ProjectDetail {
  overview: string
  problem: string
  solution: string
  architecture: string[]
  engineeringChallenges: string[]
}

export interface ProjectItem {
  id: string
  title: string
  repo: string
  githubUrl: string
  description: string
  challenge: string
  technologies: string[]
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

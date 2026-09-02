import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'PHP', 'Bash', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Leaflet', 'AJAX'],
  },
  {
    title: 'Backend',
    items: ['Java runtime workflows', 'CGI (Bash)', 'REST-style API contracts'],
  },
  {
    title: 'Database',
    items: ['MariaDB', 'SQLite', 'Redis', 'MySQL concepts'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Apache', 'HAProxy', 'Linux/WSL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Gnuplot'],
  },
  {
    title: 'Portfolio Technology',
    items: ['React', 'TypeScript', 'Vite'],
  },
]

import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programmierung',
    items: ['Java', 'C++', 'Bash', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web und Backend',
    items: ['HTML', 'CSS', 'Jakarta Servlets', 'Tomcat'],
  },
  {
    title: 'Daten',
    items: ['MariaDB', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    title: 'Systeme und DevOps',
    items: ['Linux', 'Docker', 'Git', 'GitHub', 'Apache', 'HAProxy'],
  },
  {
    title: 'Testing',
    items: ['k6', 'wrk', 'ApacheBench'],
  },
  {
    title: 'Grundlagen',
    items: ['IT-Security', 'Netzwerktechnik', 'KI-Grundlagen'],
  },
  {
    title: 'Portfolio-Technologie',
    items: ['React', 'TypeScript', 'Vite'],
  },
]

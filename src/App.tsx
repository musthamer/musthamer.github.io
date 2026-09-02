import './styles/main.css'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { AboutSection } from './sections/AboutSection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { GithubSection } from './sections/GithubSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ArchitectureSection />
        </Reveal>
        <Reveal>
          <EducationSection />
        </Reveal>
        <Reveal>
          <GithubSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Mustafa Thamer. Built with React + TypeScript + Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

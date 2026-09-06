import './styles/main.css'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { AboutSection } from './sections/AboutSection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { InterestsSection } from './sections/InterestsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <InterestsSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ArchitectureSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <EducationSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Mustafa Thamer. Entwickelt mit React, TypeScript und Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

import './index.css'
import Hero from './components/Hero'
import SakuraPetals from './components/SakuraPetals'
import { projectsData } from './data/projects'
import type { Project } from './data/projects'

function ProjectCard({ title, description, technologies, githubUrl }: Project) {
  return (
    <article className="border border-color-tinta/20 p-6 flex flex-col gap-4">
      <h3 className="text-color-tinta text-lg font-medium tracking-wide">{title}</h3>
      <p className="text-color-tinta/70 text-sm leading-relaxed flex-1">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="text-xs text-color-tinta/60 border border-color-tinta/20 px-2 py-0.5"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-color-sakura underline underline-offset-4 self-start"
      >
        Ver repositorio →
      </a>
    </article>
  )
}

function App() {
  return (
    <main>
      <SakuraPetals />
      <Hero />
      <section className="bg-color-papel px-6 py-16 md:px-12 lg:px-24">
        <h2 className="text-color-tinta text-2xl font-medium tracking-widest mb-10 uppercase">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-color-tinta/20">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-color-papel">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App

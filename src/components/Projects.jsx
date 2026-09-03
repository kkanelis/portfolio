import { ExternalIcon, GithubIcon } from './Icons'

export default function Projects({ projects }) {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="section__head">
          <span className="section__index">03</span>
          <h2 className="section__title">Publiskie darbi</h2>
          <span className="section__line" aria-hidden="true" />
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article className="project" key={project.title} style={{ '--accent': project.accent }}>
              <div className="project__top">
                <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="project__title">{project.title}</h3>
              </div>

              <div className="project__swatch" aria-hidden="true">
                <span className="project__swatch-letter">{project.title[0]}</span>
              </div>

              <p className="project__desc">{project.description}</p>

              <div className="project__tech">
                {project.tech.map((tech) => (
                  <span className="project__tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project__links">
                <a href={project.links.demo} className="project__link" aria-label={`${project.title} live demo`}>
                  <ExternalIcon size={18} />
                    Demo
                </a>
                <a href={project.links.code} className="project__link" aria-label={`${project.title} source code`}>
                  <GithubIcon size={18} />
                    Kods
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

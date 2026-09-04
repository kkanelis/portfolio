import { ExternalIcon, GithubIcon } from './Icons'

function getLinks(value) {
  return (Array.isArray(value) ? value : [value]).filter(
    (link) => typeof link === 'string' && link.trim() && link !== '#',
  )
}

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

              <div className={`project__swatch${project.image ? ' project__swatch--image' : ''}`} aria-hidden="true">
                {project.image && <img className="project__swatch-image" src={project.image} alt="" />}
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

              {(getLinks(project.links?.demo).length > 0 || getLinks(project.links?.code).length > 0) && (
                <div className="project__links">
                  {getLinks(project.links?.demo).map((link, linkIndex) => (
                    <a
                      href={link}
                      className="project__link"
                      aria-label={`${project.title} live demo${linkIndex + 1}`}
                      key={`demo-${linkIndex}-${link}`}
                    >
                      <ExternalIcon size={18} />
                      Demo{getLinks(project.links?.demo).length > 1 ? ` ${linkIndex + 1}` : ''}
                    </a>
                  ))}
                  {getLinks(project.links?.code).map((link, linkIndex) => (
                    <a
                      href={link}
                      className="project__link"
                      aria-label={`${project.title} source code${linkIndex + 1}`}
                      key={`code-${linkIndex}-${link}`}
                    >
                      <GithubIcon size={18} />
                      Kods{getLinks(project.links?.code).length > 1 ? ` ${linkIndex + 1}` : ''}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

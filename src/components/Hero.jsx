import { ArrowIcon, MapPinIcon, DownloadIcon, SparkIcon } from './Icons'

export default function Hero({ profile }) {
  const initials = profile.firstName[0] + profile.name.split(' ').pop()[0]

  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">{profile.firstName}</span>
            <span className="hero__dot">.</span>
          </h1>

          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__meta">
            <span className="hero__location">
              <MapPinIcon size={16} />
              {profile.location}
            </span>
          </div>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              Apskati manus darbus
              <ArrowIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              Pasaki čau!
            </a>
            <a href="#contact" className="btn btn--icon" aria-label="Download resume">
              <DownloadIcon size={18} />
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__card-top">
              <span className={`hero__initials hero__initials--${profile.firstName.toLowerCase()}`}>
                {initials}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

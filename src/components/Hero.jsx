import { ArrowIcon, MapPinIcon, DownloadIcon } from './Icons'
import profile_picture from '../assets/12866.png'

export default function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
          </div>

          <h1 className="hero__title">
            Čau, es esmu <span className="hero__name">{profile.firstName}</span>
            <span className="hero__dot">.</span>
          </h1>

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
              <span className="hero__portrait">
                <img src={profile_picture} alt="Krists Kārlis Grundmanis" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

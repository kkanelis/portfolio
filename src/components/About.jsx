export default function About({ profile }) {
  const initials = profile.firstName[0] + profile.name.split(' ').pop()[0]

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section__head">
          <span className="section__index">01</span>
          <h2 className="section__title">Par mani</h2>
          <span className="section__line" aria-hidden="true" />
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__frame">
              <div className="about__initials">{initials}</div>
              <div className="about__tape"></div>
              <div className="about__sticker">ČĀĀĀU!</div>
            </div>
            <div className="about__facts">
              <span className="about__fact">
                <strong>{profile.location.split('·')[0].trim()}</strong>
                <em>Atrodos</em>
              </span>
              <span className="about__fact">
                <strong>{profile.availability.split('&')[0].trim()}</strong>
                <em>Status</em>
              </span>
            </div>
          </div>

          <div className="about__text">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about__stats">
              {profile.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

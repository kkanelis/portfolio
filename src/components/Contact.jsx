import { MailIcon, GithubIcon, LinkedinIcon, XIcon } from './Icons'

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  'X / Twitter': XIcon,
  Email: MailIcon,
}

export default function Contact({ profile }) {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section__head">
          <span className="section__index">04</span>
          <h2 className="section__title">Uztaisam kaut ko?</h2>
          <span className="section__line" aria-hidden="true" />
        </div>

        <div className="contact__card">
          <p className="contact__lead">
            Vai tev ir kāds projekts galvā, vai vienkārši gribi man pateikt čau? Mans šeit ir mans ēpasts.
          </p>

          <a href={`mailto:${profile.email}`} className="btn btn--primary contact__email">
            <MailIcon size={20} />
            {profile.email}
          </a>

          <div className="contact__socials">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.name] ?? MailIcon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="contact__social"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                  <span>{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

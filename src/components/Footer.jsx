import { SparkIcon } from './Icons'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo">
          {profile.name.split(' ').map((word) => word[0]).join('')}
          <span className="footer__logo-dot">.</span>
        </a>

        <p className="footer__copy">
          © {year} {profile.name}.
        </p>

        <a href="#top" className="footer__top" aria-label="Back to top">
          Atpakaļ uz augšu
          <SparkIcon size={14} />
        </a>
      </div>
    </footer>
  )
}

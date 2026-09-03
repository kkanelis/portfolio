import { useState, useEffect } from 'react'
import { MenuIcon, CloseIcon } from './Icons'

const links = [
  { label: 'Darbi', href: '#work' },
  { label: 'Par mani', href: '#about' },
  { label: 'Prasmes', href: '#skills' },
  { label: 'Kontakti', href: '#contact' },
]

export default function Navbar({ email }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Atpakaļ uz augšu">
          KKG<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${email}`} className="btn btn--small navbar__cta">
          Parunājam?
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Aizvērt' : 'Atvērt'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${email}`} className="btn navbar__mobile-cta" onClick={() => setOpen(false)}>
            Parunājam?
          </a>
        </nav>
      )}
    </header>
  )
}

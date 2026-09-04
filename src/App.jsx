import { profile } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar email={profile.email} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App

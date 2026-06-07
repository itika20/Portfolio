import CustomCursor from './components/CustomCursor'
import TickerBar from './components/TickerBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import { PersonalProjects } from './components/Projects'
import Interests from './components/Interests'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="backdrop" />
      <div className="scanlines" />
      <CustomCursor />
      <TickerBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <PersonalProjects />
        <Education />
        <Interests />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
